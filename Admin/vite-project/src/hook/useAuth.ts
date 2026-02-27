// api/auth.ts

import { apiServer } from "../constant/apiclient";

import { useMutation } from "@tanstack/react-query";
// import { loginUser, LoginPayload, LoginResponse } from "../api/auth";

export interface LoginPayload {
  email: string;
  password: string;
}

export interface LoginResponse {
  token: string;
  user: {
    id: string;
    email: string;
    name: string;
  };
}

export const loginUser = async (
  payload: LoginPayload
): Promise<LoginResponse> => {
  const { data } = await apiServer.post("/login", payload);
  return data?.data || data;
};



// hooks/useLogin.ts

// import { useMutation } from "@tanstack/react-query";
// import { loginUser, LoginPayload, LoginResponse } from "../api/auth";

export const useLogin = () => {
  return useMutation<LoginResponse, Error, LoginPayload>({
    mutationFn: loginUser,
    onSuccess: (data) => {
      // Save token in localStorage (if needed)
      localStorage.setItem("token", data.token);
    },
  });
};
