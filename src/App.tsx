import React, { useState } from "react";
// import logo from "./logo.svg";
// import "./App.css";
// import { Button, Input } from "@ivanfranciscojara/rimac-component-library";
// import Button from "./lib";
import { Button, SelectMulti, RadioButton } from "./lib";

function App() {
  const [options] = useState([
    { value: "1", text: "uno" },
    { value: "2", text: "numero 2" },
    { value: "3", text: "numero 3" },
    { value: "4", text: "cuarenta y cinco" },
    // { value: "5", text: "cino" },
    // { value: "6", text: "seis" },
    // { value: "7", text: "siete" },
    // { value: "8", text: "ocho" },
    // { value: "9", text: "nueve" },
    // { value: "10", text: "diez" },
    // { value: "11", text: "once" },
    // { value: "12", text: "doce" },
    // { value: "13", text: "trece" },
    // { value: "14", text: "catorce" },
    // { value: "15", text: "quince" },
    // { value: "16", text: "diez y seis" },
  ]);
  const [selectedOptions, setSelectecOption] = useState([
    { value: "1", text: "uno" },
    { value: "2", text: "numero 2" },
    { value: "3", text: "numero 3" },
    { value: "4", text: "cuarenta y cinco" },
  ]);
  // const handleSelectOption = (option) => {
  //   let newselectedOptions = [...selectedOptions];
  //   let indexOptionSelected = newselectedOptions.findIndex(
  //     (selectedOption) => selectedOption.value === option.value
  //   );
  //   if (indexOptionSelected === -1) {
  //     newselectedOptions = [...newselectedOptions, option];
  //   } else {
  //     newselectedOptions.splice(indexOptionSelected, 1);
  //   }
  //   setSelectecOption(newselectedOptions);
  // };

  // const handleSelectOption = (
  //   type: "add" | "remove",
  //   option: { value: string; text: string }
  // ) => {

  //   let newselectedOptions = [...selectedOptions];
  //   if(type==='add'){
  //       newselectedOptions.push(option)
  //   }else{
  //       newselectedOptions.splice(indexOptionSelected, 1);
  //   }
  //   let indexOptionSelected = newselectedOptions.findIndex(
  //     (selectedOption) => selectedOption.value === option.value
  //   );
  //   if (indexOptionSelected === -1) {
  //     newselectedOptions = [...newselectedOptions, option];
  //   } else {
  //   }
  //   setSelectecOption(newselectedOptions);
  // };
  const [cheked, setCheked] = useState(false);
  console.log(cheked);
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={} className="App-logo" alt="logo" /> */}
        Edit <code>src/App.js</code> and save to reload.
        <h1>Hola como va todo?</h1>
        <Button>Hola como va todo?</Button>
        <div style={{ border: "1px solid red", padding: "10px" }}>
          <RadioButton
            id={1}
            onChange={() => {
              console.log("este es un radio-button");
              setCheked(!cheked);
            }}
            // check={cheked}
          />
          {/* <RadioButton
            id={2}
            disabled={true}
            check={cheked}
            onChange={() => {
              console.log("hola");
              setCheked(!cheked);
            }}
          />
          <RadioButton id={3} error={true} /> */}
          <SelectMulti
            placeholder="Esto es el placeholder"
            width="100%"
            options={options}
            selectedOptions={selectedOptions}
            onChange={(newArray) => {
              setSelectecOption(newArray);
            }}
          />
          {/* <SelectMulti
            placeholder="Esto es el placeholder"
            width="100%"
            options={options}
            selectedOptions={selectedOptions}
            onChange={handleSelectOption}
          /> */}
        </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
