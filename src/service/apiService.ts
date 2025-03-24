import axios from "axios";
import apiConfig from "./apiConfig";
import {Cookies} from "typescript-cookie";
import * as constants from "../util/constants";
import { ApiObject } from "../util/interfaces/apiNecessaryInterface";
import { customToastMsg } from "../util/commonFunctions";

export const callApi = async (apiObject: ApiObject): Promise<any> => {
    let body = {};
    let headers: {
        "Content-Type": string;
        "Content-Disposition": string | false | undefined;
        responseType: string | false | undefined;
        "X-CSRF-Token": string | null;
        Authorization: string;
        VerifyCode: undefined | string;
    };
    let method = apiObject.method ? apiObject.method.toLowerCase() : "get";
    let csrfToken = localStorage.getItem(constants.CSRF_TOKEN_KEY);
    body = ["post", "put", "patch", "delete"].includes(method)
        ? apiObject.body
        : {};

    headers = {
        "Content-Type": apiObject.urlencoded
            ? "application/x-www-form-urlencoded"
            : apiObject.arrayBufferType
                ? "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
                : apiObject.multipart
                    ? "multipart/form-data"
                    : "application/json",
        "Content-Disposition":
            apiObject.arrayBufferType && "attachment; filename=template.xlsx",
        responseType: apiObject.arrayBufferType && "blob",
        "X-CSRF-Token": csrfToken,
        Authorization: "",
        VerifyCode: undefined,
    };

    if (apiObject.authentication) {
        let access_token = Cookies.get(constants.ACCESS_TOKEN);
        let refresh_token = Cookies.get(constants.REFRESH_TOKEN);
        if (access_token && apiObject.state !== "refresh_token") {
            headers.Authorization = `Bearer ${access_token}`;
        } else if (apiObject.state === "refresh_token") {
            headers.Authorization = `Bearer ${refresh_token}`;
        }
    }

    if (apiObject.isBasicAuth) {
        headers.Authorization = `Basic ${constants.BASIC_AUTH}`;
    }

    // headers.VerifyCode = Cookies.get(constants.VERIFY_CODE);

    const url = `${apiConfig.serverUrl}/${apiObject.endpoint}`;
    let result;

    try {
        let response;
        if (method === "get") {
            response = await axios.get(url, {headers});
        } else if (method === "post") {
            response = await axios.post(url, body, {headers});
        } else if (method === "put") {
            response = await axios.put(url, body, {headers});
        } else if (method === "patch") {
            response = await axios.patch(url, body, {headers});
        } else if (method === "delete") {
            response = await axios.delete(url, {headers});
        }

        result = {
            ...response?.data,
        };
    } catch (error: any) {
        if (error !== undefined) {
            if (error.response === undefined) {
                result = {
                    success: false,
                    status: 2,
                    data: null,
                    message: "Your connection was interrupted",
                };
            } else if (error.response.statusCode === 401) {
                customToastMsg("Your session expired! Please login again..", 0);
                result = await renewTokenHandler(apiObject);
            } else if (error.response.statusCode === 403) {
                result = {
                    success: false,
                    status: 2,
                    data: null,
                    message: "Access is denied.",
                };
            } else if (error.response.statusCode === 417) {
                result = {
                    success: false,
                    status: 2,
                    data: null,
                    message: "Oops! Something went wrong.",
                };
            } else if (error.response.data !== undefined) {
                result = {
                    success: false,
                    status: 0,
                    data: null,
                    message: error.response.data.result
                        ? error.response.data.result
                        : "Sorry, something went wrong",
                };
            } else {
                result = {
                    success: false,
                    status: 2,
                    data: null,
                    message: "Sorry, something went wrong.",
                };
            }
        } else {
            result = {
                success: false,
                status: 2,
                data: null,
                message: "Your connection was interrupted!",
            };
        }
        throw error;
    }
    return result;
};

export const renewTokenHandler = async (apiObject: ApiObject): Promise<any> => {
    let result;
    // renew token - start
    const obj = {
        refresh_token: Cookies.get(constants.REFRESH_TOKEN),
        grant_type: "refresh_token",
    };
    //
    // await authService
    //   .renewToken(apiObject.body)
    //   .then(async (response) => {
    //     Cookies.setCookie(constants.ACCESS_TOKEN, response.data.access_token);
    //     Cookies.setCookie(constants.REFRESH_TOKEN, response.data.refresh_token);
    //     result = await callApi(apiObject);
    //   })
    //   .catch(async (c) => {
    //     window.location.href = `/login`;
    //   });
    // renew token - end
    return result;
};

export default {renewTokenHandler, callApi};
