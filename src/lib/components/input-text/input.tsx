import * as React from "react";
import { BoxInput, ContainerInput, LabelInput, ErrorText } from "./styled";
import { useState } from "react";
import { useCallback, useEffect, useRef } from "react";
import Val from "./validations.js";

interface Props {
  placeholder?: string;
  width?: string;
  onChange?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  disabled?: boolean;
  type?: "text" | "number" | "decimal" | "alphaNumeric";
  opcType?: string;
  maxLength?: number;
  value?: string;
  errorText?: string;
}

export const Input: React.FC<Props> = ({
  placeholder,
  width,
  type = "nombre",
  onChange,
  disabled,
  maxLength,
  value,
  errorText,
  opcType = null,
}) => {
  const ref = useRef(null);
  const [valueInput, setValue] = useState(value || "");
  const [fill, setFill] = useState(!!value ? true : false);
  const [active, setActive] = useState(false);
  const [valid, setValid] = useState(true);
  useEffect(() => {
    setValue(value || "");
    setFill(!!value ? true : false);
  }, [value]);
  const handleChange = (text) => {
    // let text = e.target.value;
    // const typeInput = type ===  "celular" || type === "documento" || type === "nrodir" || type === "anio" || type === "monto";
    // const typeInput = true;
    if (!disabled && onChange) {
      // console.log("hola", typeInput ? text.replace(/\D/, "") : text);
      onChange(text);
      setValue(text);
      setFill(true);
      setActive(true);
    }
    validateInput(text);
  };

  useEffect(() => {
    if (valueInput.length > 0) {
      setValid(Val.validarcampos(type, valueInput, opcType));
    }
  }, []);

  const validateInput = (text) => {
    setValid(Val.validarcampos(type, text, opcType));
  };

  const escListener = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape") {
      setActive(false);
      if (valueInput === "") {
        setFill(false);
      }
    }
  }, []);

  const clickOutListener = useCallback(
    (e: MouseEvent) => {
      if (!(ref.current! as any).contains(e.target)) {
        setActive(false);
        if (valueInput === "") {
          setFill(false);
        }
      }
    },
    [ref.current, valueInput]
  );

  useEffect(() => {
    document.addEventListener("click", clickOutListener);
    document.addEventListener("keyup", escListener);

    return () => {
      document.removeEventListener("click", clickOutListener);
      document.removeEventListener("keyup", escListener);
    };
  }, [valueInput]);

  const handleClick = () => {
    if (!disabled) {
      setActive(true);
    }
  };

  return (
    <>
      <ContainerInput
        ref={ref}
        filled={fill}
        width={width}
        active={active}
        disabled={disabled}
        valid={valid}
      >
        <LabelInput active={active} filled={fill}>
          {placeholder}{" "}
        </LabelInput>
        <BoxInput
          maxLength={maxLength}
          value={valueInput}
          onClick={() => handleClick()}
          onChange={(e) => handleChange(e.target.value)}
          disabled={disabled}
        ></BoxInput>
      </ContainerInput>
      {!valid && !active && <ErrorText>{errorText}</ErrorText>}
    </>
  );
};

export default Input;
