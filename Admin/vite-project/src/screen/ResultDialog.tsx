import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm, Controller } from "react-hook-form";
import type { MarketResult } from "../types/market.type";
import { useMarkets } from "../hook/useMarket";
import { useCreateMarketResult, useUpdateMarketResult } from "../hook/useResult";
import type { AxiosError } from "axios";
import { toast } from "react-toastify";
import { formatDateTimeLocal } from "../utils/dateTime";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  editData: MarketResult | null;
  refetch: () => void;
}

export interface FormValues {
  market_id: string;
  result: string;
  status: boolean;
  result_time: string;
}

const ResultDialog: React.FC<Props> = ({
  isOpen,
  onClose,
  editData,
  refetch,
}) => {
  const { data } = useMarkets();
  const { mutate: createResult } = useCreateMarketResult();
  const { mutate: updateResult } = useUpdateMarketResult();
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      market_id: "",
      result: "",
      status: true,
      result_time: "", // ✅ added
    },
  });

  // ✅ Proper edit mode handling
  useEffect(() => {
    if (isOpen) {
      if (editData) {
        reset({
          market_id: (editData.market_id as any)._id,
          result: editData.result,
          status: editData.status,
          result_time: editData.result_time
            ? formatDateTimeLocal(editData.result_time)
            : "",
        } as any);
      } else {
        reset();
      }
    }
  }, [isOpen, editData, reset]);
  const query = {
    onSuccess: () => {
      toast.success(
        editData
          ? "Market result updated successfully"
          : "Market result created successfully",
      );
      onClose();
      reset();
      refetch?.();
    },
    onError: (e:any) => {
      const error = e?.response?.data as any;
      toast.error(error?.message || "Something went wrong");
    },
  };
  const onSubmit = (formData: FormValues) => {
    const payload = {
      ...formData,
    };
    if (editData?._id) {
      updateResult({
        id: editData._id,
        payload
      }, query)

    } else {
      createResult(formData, query);
    };
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center bg-black/60 z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
            className="bg-slate-900 border border-slate-700 rounded-2xl p-6 w-full max-w-md shadow-2xl"
          >
            <h2 className="text-xl font-semibold mb-4 text-white">
              {editData ? "Edit Market Result" : "Add Market Result"}
            </h2>

            <form onSubmit={handleSubmit(onSubmit)}>
              {/* Market Dropdown */}
              <div className="mb-4">
                <label className="block text-sm text-slate-400 mb-1">
                  Select Market
                </label>

                <select
                  {...register("market_id", {
                    required: "Market is required",
                  })}
                  className="w-full px-4 py-2 rounded-lg bg-slate-800 border border-slate-700 text-white"
                >
                  <option value="">Select Market</option>
                  {data?.map((m) => (
                    <option key={m._id} value={m._id}>
                      {m.market_name}
                    </option>
                  ))}
                </select>

                {errors.market_id && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.market_id.message}
                  </p>
                )}
              </div>

              {/* Result */}
              <div className="mb-4">
                <label className="block text-sm text-slate-400 mb-1">
                  Result (2 Digit)
                </label>

                <input
                  type="text"
                  maxLength={2}
                  placeholder="00 - 99"
                  {...register("result", {
                    required: "Result is required",
                    pattern: {
                      value: /^\d{2}$/,
                      message: "Enter exactly 2 digits",
                    },
                  })}
                  className="w-full px-4 py-2 rounded-lg bg-slate-800 border border-slate-700 text-white"
                />

                {errors.result && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.result.message}
                  </p>
                )}
              </div>

              {/* ✅ Result Time (NEW FIELD) */}
              <div className="mb-4">
                <label className="block text-sm text-slate-400 mb-1">
                  Result Time
                </label>
                <input
                  type="datetime-local"
                  {...register("result_time", {
                    required: "Result time is required",
                  })}
                  className="w-full px-4 py-2 rounded-lg bg-slate-800 border border-slate-700 text-white"
                />

                {errors.result_time && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.result_time.message}
                  </p>
                )}
              </div>

              {/* Status Toggle */}
              <div className="mb-6 flex items-center justify-between">
                <label className="text-sm text-slate-400">Status</label>

                <Controller
                  name="status"
                  control={control}
                  render={({ field }) => (
                    <button
                      type="button"
                      onClick={() => field.onChange(!field.value)}
                      className={`relative w-14 h-7 rounded-full transition ${field.value ? "bg-green-500" : "bg-red-500"
                        }`}
                    >
                      <span
                        className={`absolute top-1 left-1 w-5 h-5 bg-white rounded-full transition ${field.value ? "translate-x-7" : ""
                          }`}
                      />
                    </button>
                  )}
                />
              </div>

              {/* Buttons */}
              <div className="flex justify-end gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 rounded-lg bg-slate-700 hover:bg-slate-600 transition text-white"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="px-4 py-2 rounded-lg bg-green-600 hover:bg-green-500 transition text-white"
                >
                  {editData ? "Update" : "Add"}
                </button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ResultDialog;
