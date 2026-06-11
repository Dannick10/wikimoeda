import { useFetch } from "./useFetch";
import { IwikiResponse } from "../interfaces/IwikiInterface";

export const useWikiFetch = (url: string) => {
  return useFetch<IwikiResponse>(url);
};
