import React, { useState } from "react";
import { Input, Button } from "./lib";
const App2 = () => {
  const [input, setInput] = useState("");
  const handleChange = (text) => {
    // console.log(text);
    setInput(text);
  };
  // console.log(input);
  return (
    <div>
      <Input
        //   placeholder: 'aaaa'
        //   width?: string;
        onChange={handleChange}
        // fill={false}
        //   disabled?: boolean;
        //   type?: "text" | "number" | "decimal" | "alphaNumeric";
        //   opcType?: string;
        //   maxLength?: number;
        value={input}
        //   errorText?: string;
        placeholder={"asdasd"}
      />
      <button
        onClick={() => {
          setInput("vacio");
        }}
      >
        {" "}
        Vuelve el input vacio
      </button>
      hola
      <Button>
        ENVIAR A REVISION ENVIAR A REVISION ENVIAR A REVISION ENVIAR A REVISION
        :D
      </Button>
    </div>
  );
};

export default App2;
