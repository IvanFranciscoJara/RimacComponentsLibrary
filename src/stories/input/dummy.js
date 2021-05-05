import React from "react";
import { Input } from "../../lib";

const handleInput = (e) => {
  console.log(e);
};

export const ViewInput = () => {
  return (
    <Input
      placeholder="label"
      width="280px"
      type="documento"
      opcType="2"
      maxLength={8}
      errorText="*El dato ingresado no es correcto"
      onChange={(elem) => handleInput(elem)}
    />
  );
};

export const EmailInput = () => {
  return (
    <Input
      placeholder="email"
      width="280px"
      type="correo"
      errorText="*El dato ingresado no es correcto"
      onChange={(e) => handleInput(e)}
    />
  );
};
