import React from "react";
import Men from "./Components/Men";
import Women from "./Components/Women";

const App = () => {
  // const user1 = {
  //   name: "Samyak",
  //   age: 19,
  //   gender: "Male",
  // };

  // const user2 = {
  //   name: "Saumya",
  //   age: 23,
  //   gender: "Female",
  // };

  const user3 = {
    name: "Shaurya",
    age: 9,
    gender: "Male",
  };

  return (
    // Conditional Rendering..
    <div>
      {user3.gender == "Male" ? (
        user3.age >= 10 ? (
          <Men />
        ) : (
          <Women />
        )
      ) : (
        <Women />
      )}
    </div>
  );
};

export default App;
