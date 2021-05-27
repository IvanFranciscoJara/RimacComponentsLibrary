import React, { useState } from "react";
import { SelectMulti } from "./lib";

const App3 = () => {
  const [options] = useState([
    { value: "opt01", text: "opt01" },
    { value: "opt02", text: "opt02" },
    { value: "opt03", text: "opt03" },
    { value: "opt04", text: "opt04" },
    { value: "opt05", text: "opt05" },
    { value: "opt06", text: "opt06" },
    { value: "opt07", text: "opt07" },
    { value: "opt08", text: "opt08" },
    { value: "opt09", text: "opt09" },
    { value: "opt10", text: "opt10" },
    { value: "opt11", text: "opt11" },
    { value: "opt12", text: "opt12" },
    { value: "opt13", text: "opt13" },
    { value: "opt14", text: "opt14" },
    { value: "opt15", text: "opt15" },
    { value: "opt16", text: "opt16" },
    { value: "opt17", text: "opt17" },
    { value: "opt18", text: "opt18" },
  ]);
  const [selectedOptions, setSelectecOption] = useState([
    { value: "opt01", text: "opt01" },
  ]);
  return (
    <div>
      <h1>Hola</h1>
      <SelectMulti
        placeholder="Placeholder App3"
        width="30%"
        options={options}
        selectedOptions={selectedOptions}
        onChange={(newArray) => {
          setSelectecOption(newArray);
        }}
        limitTags={2}
      />
      <h1 style={{ background: "yellow" }}>Hola2</h1>
    </div>
  );
};

export default App3;
