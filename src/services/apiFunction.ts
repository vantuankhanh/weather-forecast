/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosRequestConfig } from "axios";
import { toast } from "react-toastify";

interface IAPIFunctionOptionProps {
  messageAPI?: boolean;
  messageSuccess?: string;
  messageFail?: string;
  configAPI?: AxiosRequestConfig<any>;
}

export const getAPI = async (url: string, option?: IAPIFunctionOptionProps) =>
  await axios
    .get(url, { ...option?.configAPI })
    .then((res) => {
      if (res.status >= 200 && res.status < 300) {
        option?.messageSuccess &&
          toast.success(
            option.messageSuccess || (option.messageAPI && res.data.message)
          );
        return res.data;
      } else {
        toast.error(
          option?.messageFail || res.data.message || "Something went wrong"
        );
        return false;
      }
    })
    .catch((error) => {
      toast.error(option?.messageFail || error.response?.data.message);
      return false;
    });
