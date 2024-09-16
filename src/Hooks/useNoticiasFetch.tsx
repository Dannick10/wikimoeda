import { useEffect, useState } from "react";
import { Inoticias } from "../interfaces/Inoticiasinterface";

export const useNoticiasFetch = (url: string) => {
  const [data, setData] = useState<Inoticias>();
  const [loading, setLoading] = useState<boolean>(false);
  const [page, SetPage] = useState<number>(1)

  useEffect(() => {
    const FetchData = async () => {
      setLoading(true);

      try {
        const res = await fetch(`${url}&page=${page}`);
        const json = await res.json();
        setData(json);
      } catch {
        console.log("error");
      }

      setLoading(false);
    };

    FetchData();
  }, [url,page]);

  return { data, loading, page, SetPage };
};
