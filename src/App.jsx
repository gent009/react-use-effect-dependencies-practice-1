import React, { useState, useEffect } from "react";

const App = () => {
  const [dataType, setDataType] = useState("people");
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://swapi.dev/api/${dataType}/`);
        const result = await response.json();
        setData(result.results);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [dataType]);

  return (
    <div>
      <h1>Star Wars {dataType.charAt(0).toUpperCase() + dataType.slice(1)}</h1>
      <div>
        <button onClick={() => setDataType("people")}>People</button>
        <button onClick={() => setDataType("planets")}>Planets</button>
        <button onClick={() => setDataType("starships")}>Starships</button>
      </div>
      <ul>
        {data.map((item, index) => (
          <li key={index}>{item.name || item.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
