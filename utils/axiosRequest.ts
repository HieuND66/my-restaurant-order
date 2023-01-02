import axios, { AxiosRequestConfig } from "axios";
import { STORAGES } from "../constants/storages";


export const axiosRequest = async (
  config: AxiosRequestConfig,
  unauthorized?: boolean,
) => {
  const axiosConfig: AxiosRequestConfig = {
    ...config,
    baseURL: process.env.NEXT_PUBLIC_BACKEND_API_URL,
  };

  if (!unauthorized && localStorage.getItem(STORAGES.TOKEN)) {
    axiosConfig.headers = {
      Authorization: `Bearer ${localStorage.getItem(STORAGES.TOKEN)}`,
    };
  }

  const response = await axios(axiosConfig);
  return response.data.data;
};