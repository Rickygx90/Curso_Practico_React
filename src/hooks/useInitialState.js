import { useState, useEffect } from "react";

const useInitialState = (API) => {
  const [videos, setVideos] = useState([]);

  const fetchVideos = async () => {
    try {
      const response = await fetch(API);
      const data = await response.json();
      return setVideos(data);
    } catch {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchVideos();
  }, []);

  return videos;
};

export default useInitialState;
