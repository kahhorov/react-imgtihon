import { useState } from "react";
import { Url } from "../Url";

function useAxios() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fn = async (method, url) => {
    setLoading(true);
    try {
      const response = await Url({ method, url });
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
    get: () => fn("get", "/posts"),
  };
}

export default useAxios;
