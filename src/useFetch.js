import { useEffect, useState } from "react";

const useFetch = (url, id = null) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortCont = new AbortController();
    fetch(url, { signal: abortCont.signal })
      .then((res) => {
        if (!res.ok) {
          throw Error("could not fetch the data");
        }
        return res.json();
      })
      .then((data) => {
        //console.log(data['title']);
        if(id !== null){
         // console.log(data.data);
          setData(data.data);
        } else {
          setData(data.data.blogs);
        }
        setIsLoading(false);
        setError(null);
      })
      .catch((err) => {
        if(err.name === 'AbortError'){
           console.log("Fetch Aborted");
        } else {
          setIsLoading(false);
          setError(err.message);
        }
      });
      //return () => console.log("cleanup");
      return () => abortCont.abort();
  }, [url]);

  return { data, isLoading, error }
};

export default useFetch;