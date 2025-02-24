import { useState, useEffect } from "react";

export const useRequest = (fn: any, dependencies: any) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const request = () => {
    setLoading(true);
    fn()
      .then(setData)
      .catch((err: any) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    request();
  }, dependencies);

  return {
    data,
    loading,
    error
  };
};
