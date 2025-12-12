import { useState } from "react";
import { Api } from "../Url";

function useAxios() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fn = async (method, url) => {
    setLoading(true);
    try {
      const response = await Api({ method, url });
      return response;
    } catch (error) {
      setError(error.message);
      return null;
    } finally {
      setLoading(false);
    }
  };
  return {
    loading,
    error,
    get: () => fn("get", "/posts"),
  };
}

export default useAxios;
