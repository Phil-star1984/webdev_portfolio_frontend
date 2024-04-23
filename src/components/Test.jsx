import React, { useState, useEffect } from "react";
import axios from "axios";

function Test() {
  const [apiData, setApiData] = useState([]);

  const URL = `http://universities.hipolabs.com/search?country=United+States`;

  const fetchData = async () => {
    try {
      const { data } = await axios.get(URL);
      const filteredData = data.filter((item) => {
        return item.name.includes("District");
      });
      console.log(filteredData);
      /* console.log(data) */
      setApiData(filteredData);
    } catch (error) {
      console.error("Could not fetch", error);
    }
  };

  return (
    <>
      <button onClick={fetchData}>Fetch</button>
      {!!apiData &&
        apiData.map((item, index) => <h1 key={index}>{item.name}</h1>)}
    </>
  );
}

export default Test;
