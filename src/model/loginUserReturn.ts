/**
 * Generated by orval v6.15.0 🍺
 * Do not edit manually.
 * Rust API
 * This is the template for the Rust API
 * OpenAPI spec version: 0.1.0
 */
import type { LoginStatus } from "./loginStatus";
import type { User } from "./user";

export interface LoginUserReturn {
  status: LoginStatus;
  token?: string;
  user?: User;
}
