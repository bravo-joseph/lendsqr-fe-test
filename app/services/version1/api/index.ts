/* eslint-disable @typescript-eslint/no-explicit-any */
import type { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import axios from "axios";

// import axiosRetry from "axios-retry";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

const axiosInstance = axios.create({
  baseURL: `${API_BASE_URL}`,
  headers: {
    "Content-Type": "application/json",
  },
});

const handleApiSuccess = (res: AxiosResponse) => {
  return res;
};

const handleApiError = (err: AxiosError) => {
  if (err.response) {  
    const { data } = err.response;
    const error =
      (data as any).message || (data as any).error || "An error occurred";

    // console.error(`Backend returned code ${status}, body was: ${JSON.stringify(error)}`);
    throw error;
  } else if (err.request) {
    // Handle network error (no response received)
    // console.error('A network error occurred. Please check your internet connection.');
    throw "Network Error";
  } else {
    // Handle unexpected error
    // console.error('An unexpected error occurred:', err.message);
    throw "Unexpected Error";
  }
};

const Api = {
  getCancelTokenSource: () => axios.CancelToken.source(),
  get: <T>(endpoint: string, config?: AxiosRequestConfig): Promise<T> =>
    axiosInstance
      .get(endpoint, { ...config })
      .then(handleApiSuccess)
      .catch(handleApiError) as Promise<T>,
  post: <T>(
    endpoint: string,
    data: unknown,
    config?: AxiosRequestConfig
  ): Promise<T> =>
    axiosInstance
      .post(endpoint, data, config)
      .then(handleApiSuccess)
      .catch(handleApiError) as Promise<T>,
  put: <T>(
    endpoint: string,
    data: unknown,
    config?: AxiosRequestConfig
  ): Promise<T> =>
    axiosInstance
      .put(endpoint, data, config)
      .then(handleApiSuccess)
      .catch(handleApiError) as Promise<T>,
  patch: <T>(
    endpoint: string,
    data: unknown,
    config?: AxiosRequestConfig
  ): Promise<T> =>
    axiosInstance
      .patch(endpoint, data, config)
      .then(handleApiSuccess)
      .catch(handleApiError) as Promise<T>,
  delete: <T>(endpoint: string, config?: AxiosRequestConfig): Promise<T> =>
    axiosInstance
      .delete(endpoint, config)
      .then(handleApiSuccess)
      .catch(handleApiError) as Promise<T>,
};

export default Api;
