import { useState, useEffect } from "react";
import http from "../http";

type RequestMethod = "get" | "post";

interface HttpRequest {
  url: string;
  method: RequestMethod;
  data?: { [key: string]: string };
}

export const useHttp = (
  path: string,
  method: RequestMethod,
  payload?: { [key: string]: string }
): [
  { [key: string]: string | number } | null,
  { [key: string]: any } | null,
  boolean
] => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (path) {
      const request: HttpRequest = {
        url: path,
        method: method,
      };
      if (payload && method === "post") {
        request.data = payload;
      }

      setResponse(null);
      setError(null);
      setLoading(true);

      http(request)
        .then((response) => {
          setResponse(response.data);
        })
        .catch((error) => {
          setError(error.response ? error.response : error.toJSON());
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [method, path, payload]);

  return [response, error, loading];
};
