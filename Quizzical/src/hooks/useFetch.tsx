import { useEffect, useState } from "react";

const useFetch = (url: string, timeStamp: string) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true)
    fetch(url) 
      .then((res) => {
        if (!res.ok) {
          throw Error(`There is an error during fetching... ${res.status}: ${res.statusText}`);
        }
        return res.json();
      })
      .then((d) => {
        setData(d);
        setError(null);
        setIsLoading(false);
      })
      .catch((err) => {
        if (err.name === "AbortError") {
          console.log("fetch aborted");
        } else {
          setIsLoading(false);
          setError(err.message);
        }
      }
    );
  }, [url, timeStamp]);
  return { data, setData, isLoading, error };
};

export default useFetch;
