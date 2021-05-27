import React, { useState } from "react";
import { Select } from "./lib";

const App3 = () => {
  const [options] = useState([
    { value: "aaa", text: "aaa" },
    { value: "bbb", text: "bbb" },
    { value: "ccc", text: "ccc" },
    { value: "ddd", text: "ddd" },
    { value: "eee", text: "eee" },
  ]);
  const [selectedOption, setSelectedOption] = useState({
    value: "ccc",
    text: "ccc",
  });
  console.log(selectedOption);
  return (
    <div>
      <h1>Hola</h1>
      <Select
        placeholder="Placeholder"
        options={options}
        onSelect={(option: any) => setSelectedOption(option)}
        selectedItem={selectedOption}
      />
      <h1>Hola2</h1>
    </div>
  );
};

export default App3;
