import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useLogin } from "../hook/useAuth";
import { useUser } from "../constant/UserProvider";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import type { AxiosError } from "axios";
import { getToken } from "../utils/getTocken";
import { motion } from "framer-motion";

type FormValues = {
  email: string;
  password: string;
};

const LoginPage: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } =
    useForm<FormValues>();

  const { login } = useUser();
  const navigate = useNavigate();
  const { mutateAsync, isPending } = useLogin();
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = async (data: FormValues) => {
    try {
      const res = await mutateAsync(data);
      if (res.results) {
        login(res.results);
        toast.success("Login Successfully 🚀");
        navigate("/");
      }
    } catch (e) {
      const error = (e as AxiosError).response?.data as any;
      const message =
        error?.message ||
        error?.error ||
        error?.err ||
        (Array.isArray(error?.error) ? error.error.join(", ") : null) ||
        "Something went wrong";

      toast.error(message);
    }
  };

  useEffect(() => {
    const token = getToken();
    token ? navigate("/") : navigate("/login");
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 px-4">

      {/* Background Glow */}
      <div className="absolute w-[400px] h-[400px] bg-purple-600/20 blur-[120px] rounded-full top-10 left-10"></div>
      <div className="absolute w-[300px] h-[300px] bg-indigo-600/20 blur-[120px] rounded-full bottom-10 right-10"></div>

      {/* Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative backdrop-blur-xl bg-slate-900/60 border border-slate-700 shadow-2xl rounded-3xl p-10 w-full max-w-md"
      >
        <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
          Welcome Back
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

          {/* Email */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-slate-400">
              Email Address
            </label>

            <input
              type="email"
              className="w-full px-4 py-2.5 rounded-lg bg-slate-800 text-slate-200 
               border border-slate-700 
               focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 
               outline-none transition duration-200"
              {...register("email", { required: "Email is required" })}
            />

            {errors.email && (
              <p className="text-pink-400 text-sm">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password */}
          <div className="flex flex-col gap-2 relative">
            <label className="text-sm font-medium text-slate-400">
              Password
            </label>

            <input
              type={showPassword ? "text" : "password"}
              className="w-full px-4 py-2.5 rounded-lg bg-slate-800 text-slate-200 
               border border-slate-700 
               focus:border-purple-500 focus:ring-1 focus:ring-purple-500 
               outline-none transition duration-200"
              {...register("password", { required: "Password is required" })}
            />

            <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-[38px] cursor-pointer text-slate-400 hover:text-white"
            >
              {showPassword ? "🙈" : "👁"}
            </span>

            {errors.password && (
              <p className="text-pink-400 text-sm">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Button */}
          <motion.button
            whileTap={{ scale: 0.96 }}
            type="submit"
            disabled={isPending}
            className="w-full py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:opacity-90 transition shadow-lg shadow-purple-700/30 disabled:opacity-70"
          >
            {isPending ? "Authenticating..." : "Login"}
          </motion.button>

        </form>

        <p className="text-center text-slate-400 text-sm mt-6">
          Secure trading platform access
        </p>
      </motion.div>
    </div>
  );
};

export default LoginPage;