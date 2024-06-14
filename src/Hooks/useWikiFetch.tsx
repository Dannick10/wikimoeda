import React, { useEffect, useState } from "react";

export const useWikiFetch = (url: string) => {
  const [data, setData] = useState<any>();
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const FetchData = async () => {
      setLoading(true);

      try {
        const res = await fetch(url);
        const json = await res.json();
        setData(json);
        console.log(json)
      } catch {
        console.log("error");
      }

      setLoading(false);
    };

    FetchData();
  }, [url]);

  return { data, loading };
};
