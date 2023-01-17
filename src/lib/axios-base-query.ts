import { BaseQueryFn } from "@reduxjs/toolkit/dist/query";
import axios, { AxiosError, AxiosRequestConfig } from "axios";
// import { getCurrentSession } from "../auth";

export const axiosBaseQuery =
  (
    { baseUrl }: { baseUrl: string } = { baseUrl: "" }
  ): BaseQueryFn<
    {
      url: string;
      method: AxiosRequestConfig["method"];
      data?: AxiosRequestConfig["data"];
      params?: AxiosRequestConfig["params"];
    },
    unknown,
    unknown
  > =>
  async ({ url, method, data, params }) => {
    try {
      const result = await axios({
        url: baseUrl + url,
        method,
        data,
        // params: { ...params, access_token: getCurrentSession().accessToken },
      });
      return { data: result.data };
    } catch (axiosError) {
      return {
        error: axiosError,
      };
    }
  };
