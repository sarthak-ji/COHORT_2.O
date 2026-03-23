import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [val, setVal] = useState(0);
  const [username, setUsername] = useState("");

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get("https://randomuser.me/api/");

      // setUsername(`${user.name.title} ${user.name.first} ${user.name.last}`);
      setUsername((response.data.results[0].name.title) + " " + (response.data.results[0].name.first) + " " + (response.data.results[0].name.last));
    };

    getData();
  }, [val]);

  return (
    <div className="m-4">
      {username}

      <h1 className="font-semibold text-4xl m-4">{val}</h1>
      <button
        className="bg-blue-300 text-black font-semibold m-4"
        onClick={() => {
          setVal(val + 1);
        }}
      >
        Update
      </button>
    </div>
  );
};

export default App;
