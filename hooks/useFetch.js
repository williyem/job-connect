import { useEffect, useState } from "react";
import axios from "axios";
const useFetch = (endpoint, query) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const options = {
    method: "GET",
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    params: {
      ...query,
      //   query: "Python developer in Texas, USA",
      //   page: "1",
      //   num_pages: "1",
    },
    headers: {
      "X-RapidAPI-Key": "df2af6a8b6msh9895d75c9954448p1b447bjsnffbee87a4a7c",
      "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
    },
  };

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await axios.request(options);
      setData(response.data?.data);
    } catch (e) {
      setError(e);
      alert("There is an error");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => {
    setIsLoading(true);
    fetchData();
  };

  return { data, isLoading, error, refetch };
};

export default useFetch;
