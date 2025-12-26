import axios from 'axios';
import { useEffect, useState } from 'react';

const useGet = (url) => {
  const [data, setData] = useState([]);
  
  const getData = async () => {
    try {
      const res = await axios.get(
        `https://693d1ae6f55f1be79301e90f.mockapi.io/${url}`
      );
      setData(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (url) getData();
  }, [url]);

  return { data, refetch: getData };
};

export default useGet;
