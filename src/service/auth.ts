import {
  ApiObject,
  LoginUserCredentialsObj,
  SignUpUserObj,
} from "../util/interfaces/apiNecessaryInterface";
import ApiService from "./apiService";

export async function loginService(userCredentials: LoginUserCredentialsObj) {
  const apiObject: ApiObject = {
    method: "POST",
    authentication: false,
    urlencoded: false,
    isWithoutPrefix: false,
    endpoint: "user/login",
    body: userCredentials,
  };
  return await ApiService.callApi(apiObject);
}


export async function signUpService(userCredentials: SignUpUserObj) {
  const apiObject: ApiObject = {
    method: "POST",
    authentication: false,
    urlencoded: false,
    isWithoutPrefix: false,
    endpoint: "user/register",
    body: userCredentials,
  };
  return await ApiService.callApi(apiObject);
}

// export async function resetPasswordConfirmEmail(data: any) {
//   const apiObject: ApiObject = {
//     method: "POST",
//     authentication: true,
//     isWithoutPrefix: false,
//     endpoint: "api/password-reset-request",
//     body: data,
//   };
//   return await ApiService.callApi(apiObject);
// }

// export async function resetPasswordDetailsWithOtp(data: any) {
//   const apiObject: ApiObject = {
//     method: "POST",
//     authentication: true,
//     isWithoutPrefix: false,
//     endpoint: "api/password/check-otp-for-reset",
//     body: data,
//   };
//   return await ApiService.callApi(apiObject);
// }

// export async function changeFirstTimePassword(data: any) {
//   const apiObject: ApiObject = {
//     method: "POST",
//     authentication: true,
//     endpoint: "reset-default-password",
//     body: data,
//   };
//   return await ApiService.callApi(apiObject);
// }

// export async function renewToken(token: string) {
//   const apiObject: ApiObject = {
//     method: "POST",
//     authentication: true,
//     urlencoded: false,
//     endpoint: "auth/refresh",
//     body: token,
//   };
//   return await ApiService.callApi(apiObject);
// }

// export async function verifyOtp(data: any) {
//   const apiObject: ApiObject = {
//     method: "POST",
//     authentication: true,
//     endpoint: "forgot-password/verify-otp",
//     body: data,
//   };
//   return await ApiService.callApi(apiObject);
// }

// export async function requestOTP(email: string) {
//   const apiObject: ApiObject = {
//     method: "POST",
//     authentication: true,
//     urlencoded: false,
//     endpoint: "forgot-password/request-otp",
//     body: email,
//   };
//   return await ApiService.callApi(apiObject);
// }

// export async function resetPasswordInProfile(data: any) {
//   const apiObject: ApiObject = {
//     method: "PATCH",
//     authentication: true,
//     urlencoded: false,
//     endpoint: "api/auth/me",
//     body: data,
//   };
//   return await ApiService.callApi(apiObject);
// }

// export async function resetPassword(data: any) {
//   const apiObject: ApiObject = {
//     method: "POST",
//     authentication: true,
//     urlencoded: false,
//     endpoint: "api/auth/staff/reset/password",
//     body: data,
//   };
//   return await ApiService.callApi(apiObject);
// }

// export async function getCsrfToken() {
//   const apiObject: ApiObject = {
//     method: "GET",
//     authentication: false,
//     isWithoutPrefix: false,
//     endpoint: "api/auth/csrf-token",
//   };
//   return await ApiService.callApi(apiObject);
// }
