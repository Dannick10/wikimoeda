import { useEffect, useState } from "react";

interface FetchState<T> {
  data: T | undefined;
  loading: boolean;
  error: string | null;
}

export const useFetch = <T,>(url: string, options?: RequestInit) => {
  const [state, setState] = useState<FetchState<T>>({
    data: undefined,
    loading: false,
    error: null,
  });

  useEffect(() => {
    const controller = new AbortController();
    let isMounted = true;

    const fetchData = async () => {
      setState({ data: undefined, loading: true, error: null });

      try {
        const res = await fetch(url, {
          signal: controller.signal,
          ...options,
        });

        if (!res.ok) {
          throw new Error(`HTTP ${res.status}: ${res.statusText}`);
        }

        const json = await res.json();

        if (isMounted) {
          setState({ data: json, loading: false, error: null });
        }
      } catch (err) {
        if (isMounted && !(err instanceof DOMException)) {
          const errorMessage = err instanceof Error ? err.message : "Erro ao buscar dados";
          setState({ data: undefined, loading: false, error: errorMessage });
        }
      }
    };

    fetchData();

    return () => {
      isMounted = false;
      controller.abort();
    };
  }, [url, options]);

  return state;
};
