import { ApiObject } from "../util/interfaces/apiNecessaryInterface";
import ApiService from "./apiService";

export async function uploadFiles(files: FormData) {
  const apiObject: ApiObject = {
    method: "POST",
    authentication: true,
    isWithoutPrefix: false,
    multipart: true,
    endpoint: `file/upload`,
    body: files,
  };
  return await ApiService.callApi(apiObject);
}
