import React, { useEffect, useState } from "react";
import axios from "./axios";

function Row({ title }) {
  const [movies, setMovies] = useState([]);

  // snipet which runs based on specific condition
  useEffect(() => {
    // if [ run once when row loads dont run again ]

    async function fetchData() {
      const request = await axios.get(fetchUrl);
      console.log(request.data.results);
      return request;
    }
    fetchData();
  }, []);
  return (
    <div>
      <h2>{title}</h2>

      {/* container posters */}
    </div>
  );
}

export default Row;
