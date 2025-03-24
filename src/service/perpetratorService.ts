import { ApiObject } from "../util/interfaces/apiNecessaryInterface";
import { PerpetratorCreateDataObj } from "../util/interfaces/uiNecessaryInterface";
import ApiService from "./apiService";

export async function getAllPerpetrators() {
  const apiObject: ApiObject = {
    method: "GET",
    authentication: true,
    isWithoutPrefix: false,
    endpoint: `suspicion/find-all`,
    body: null,
  };
  return await ApiService.callApi(apiObject);
}
export async function getPerpetratorDetailsById(perpetratorId: number) {
  const apiObject: ApiObject = {
    method: "GET",
    authentication: true,
    isWithoutPrefix: false,
    endpoint: `suspicion/find-by-id/${perpetratorId}`,
    body: null,
  };
  return await ApiService.callApi(apiObject);
}

export async function createPerpetrator(data: PerpetratorCreateDataObj) {
  const apiObject: ApiObject = {
    method: "POST",
    authentication: true,
    isWithoutPrefix: false,
    endpoint: `suspicion/create`,
    body: data,
  };
  return await ApiService.callApi(apiObject);
}

export async function updatePerpetrator(
  perpetratorId: number,
  data: PerpetratorCreateDataObj
) {
  const apiObject: ApiObject = {
    method: "PUT",
    authentication: true,
    isWithoutPrefix: false,
    endpoint: `suspicion/create/${perpetratorId}`,
    body: data,
  };
  return await ApiService.callApi(apiObject);
}

export async function deletePerpetrator(perpetratorId: number) {
  const apiObject: ApiObject = {
    method: "DELETE",
    authentication: true,
    isWithoutPrefix: false,
    endpoint: `suspicion/create/${perpetratorId}`,
    body: null,
  };
  return await ApiService.callApi(apiObject);
}

export async function findMatchingPerpetrators(data: string) {
  const apiObject: ApiObject = {
    method: "POST",
    authentication: true,
    isWithoutPrefix: false,
    endpoint: `find_match`,
    body: data,
  };
  return await ApiService.callApi(apiObject);
}
