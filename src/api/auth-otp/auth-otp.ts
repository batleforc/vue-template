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
  GenOtp,
  ActivateOtp,
  LoginUserReturn,
  ValidateOtp,
} from "../../model";

/**
 * Start the totp activate process
 * @summary Start the totp activate process
 */
export const generate = <TData = AxiosResponse<GenOtp>>(
  options?: AxiosRequestConfig
): Promise<TData> => {
  return axios.get(`/api/auth/otp/activate`, options);
};
/**
 * End the totp activate process
 * @summary End the totp activate process
 */
export const activate = <TData = AxiosResponse<void>>(
  activateOtp: ActivateOtp,
  options?: AxiosRequestConfig
): Promise<TData> => {
  return axios.post(`/api/auth/otp/activate`, activateOtp, options);
};
/**
 * End the auth process
 * @summary End the auth process
 */
export const validate = <TData = AxiosResponse<LoginUserReturn>>(
  validateOtp: ValidateOtp,
  options?: AxiosRequestConfig
): Promise<TData> => {
  return axios.post(`/api/auth/otp/validate`, validateOtp, options);
};
