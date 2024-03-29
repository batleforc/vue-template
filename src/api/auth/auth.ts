/**
 * Generated by orval v6.15.0 🍺
 * Do not edit manually.
 * Rust API
 * This is the template for the Rust API
 * OpenAPI spec version: 0.1.0
 */
import axios from "axios";
import type { AxiosRequestConfig, AxiosResponse } from "axios";
import type {
  AuthStatus,
  LoginUserReturn,
  LoginUser,
  RefreshTokenReturn,
  RegisterUserReturn,
  RegisterUser,
} from "../../model";

/**
 * Return the auth status (and in the future include the oidc enabled and if main auth enabled)
 * @summary Return the auth status (and in the future include the oidc enabled and if main auth enabled)
 */
export const status = <TData = AxiosResponse<AuthStatus>>(
  options?: AxiosRequestConfig
): Promise<TData> => {
  return axios.get(`/api/auth`, options);
};
/**
 * Login user
 * @summary Login user
 */
export const login = <TData = AxiosResponse<LoginUserReturn>>(
  loginUser: LoginUser,
  options?: AxiosRequestConfig
): Promise<TData> => {
  return axios.post(`/api/auth/login`, loginUser, options);
};
/**
 * Logout

This endpoint is used to disconnect the user with the refresh token
 * @summary Logout
 */
export const logout = <TData = AxiosResponse<string>>(
  options?: AxiosRequestConfig
): Promise<TData> => {
  return axios.get(`/api/auth/logout`, options);
};
/**
 * Refresh token

This endpoint is used to get access token from refresh token
 * @summary Refresh token
 */
export const refresh = <TData = AxiosResponse<RefreshTokenReturn>>(
  options?: AxiosRequestConfig
): Promise<TData> => {
  return axios.get(`/api/auth/refresh`, options);
};
/**
 * Register user

Password must be between 3 and 20 characters long and contain at least one number, one lowercase and one uppercase letter.
Email must be a valid email.
Name and surname must be at least 2 characters long.
 * @summary Register user
 */
export const register = <TData = AxiosResponse<RegisterUserReturn>>(
  registerUser: RegisterUser,
  options?: AxiosRequestConfig
): Promise<TData> => {
  return axios.post(`/api/auth/register`, registerUser, options);
};
