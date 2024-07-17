/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosRequestConfig } from "axios";
import { toast } from "react-toastify";

export const getAPI = async (
  url: string,
  errorMessage = "",
  configAPI: AxiosRequestConfig<any> | null = null
) =>
  await axios
    .get(url, { timeout: 15000, ...configAPI })
    .then((res) => {
      if (res.status >= 200 && res.status < 300) {
        return res.data;
      } else {
        toast.error(errorMessage || "Something went wrong");
        throw Error(errorMessage || "Something went wrong");
      }
    })
    .catch((error) => {
      toast.error(errorMessage || error);
    });
