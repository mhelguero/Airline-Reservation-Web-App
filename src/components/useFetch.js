import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // if no url submitted yet(ex: first time loading page), don't do anything and set pending to false
    if (!url) {
      setIsPending(false);
      return;
    }
    setIsPending(true);
    const abortCont = new AbortController();
    let stillMounted = true;

    fetch(url, { signal: abortCont.signal })
      .then((response) => {
        if (!response.ok) {
          throw Error("Could not fetch data for that resource");
        }
        return response.json();
      })
      .then((responseData) => {
        // prevent memory leak if component unmounted while fetch still pending
        if (stillMounted) {
          setData(responseData);
          setIsPending(false);
          setError(null);
        }
      })
      .catch((err) => {
        if (stillMounted) {
          if (err.name === "AbortError") {
            console.log("fetch aborted");
          } else {
            setError(err.message);
            setIsPending(false);
          }
        }
      });

    return () => {
      stillMounted = false;
      abortCont.abort();
    };
  }, [url]);

  return { data, isPending, error };
};

export default useFetch;
