import { useFetch } from "./useFetch";
import { Icoin } from "../interfaces/IcoinInterface";

export const useConversorFetch = (oneSymbol: string, twoSymbol: string) => {
  const { data, loading, error } = useFetch<Record<string, Icoin>>(
    `https://economia.awesomeapi.com.br/json/last/${oneSymbol}-${twoSymbol}`,
  );

  return { data, loading, error };
};
