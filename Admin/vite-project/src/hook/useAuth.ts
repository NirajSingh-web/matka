// api/auth.ts

import { apiServer } from "../constant/apiclient";

import { useMutation } from "@tanstack/react-query";
// import { loginUser, LoginPayload, LoginResponse } from "../api/auth";

export interface LoginPayload {
  email: string;
  password: string;
}

export interface IUser {
  _id: string;
  email: string;
  phone: string;
  userPanel: string;
  adminPanel: string;
  role: "admin" | "user" | string;
  createdAt: string;   // ISO Date string
  updatedAt: string;   // ISO Date string
  loginAt: string;     // ISO Date string
  __v: number;
}

// Results object
export interface ILoginResults {
  data: IUser;
  accessToken: string;
}
export interface LoginResponse {
  success: boolean;
  message: string;
  results: ILoginResults;
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
  });
};
