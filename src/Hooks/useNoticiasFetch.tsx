import { useState } from "react";
import { useFetch } from "./useFetch";
import { Inoticias } from "../interfaces/Inoticiasinterface";

export const useNoticiasFetch = (url: string) => {
  const [page, SetPage] = useState<number>(1);
  const { data, loading, error } = useFetch<Inoticias>(`${url}&page=${page}`);

  return { data, loading, error, page, SetPage };
};
