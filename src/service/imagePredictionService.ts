import { ApiObject } from "../util/interfaces/apiNecessaryInterface";
import { DNASequencePredictionDataObj, PerpetratorCreateDataObj } from "../util/interfaces/uiNecessaryInterface";
import ApiService from "./apiService";

export async function predictImagesOfSuspicion(data: DNASequencePredictionDataObj) {
  const apiObject: ApiObject = {
    method: "POST",
    authentication: true,
    isWithoutPrefix: false,
    endpoint: `gpt/generate`,
    body: data,
  };
  return await ApiService.callApi(apiObject);
}
