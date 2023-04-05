import axios from "axios";
import { useEffect, useState } from "react";
import { BASE_URL } from "../constants/constants";

export function useRequerstData(path) {
  const [data, setData] = useState([]);
  const [ isLoading, setIsloading] = useState(false)

  useEffect(() => {
    setIsloading(true)
    axios
      .get(`${BASE_URL}${path}`)
      .then((response) => {
        setData(response.data);
        setIsloading(false)
      })
      .catch((error) => {
        console.log(error);
        setIsloading(false)
      });
  },[path]);
  return [data, isLoading];
}
