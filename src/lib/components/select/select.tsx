import * as React from "react";
import {
  Options,
  ContainerOptions,
  ContainerInput,
  SelectContainer,
  OptionSelected,
} from "./styled";
import { useEffect, useState, useRef, useCallback } from "react";
import { Icon } from "../icon";
import { COLORS } from "../../utils/theme/constants";

interface Props {
  placeholder?: string;
  width?: string;
  options?: { value: string; text: string }[];
  onSelect?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  selectedItem?: { value: string; text: string } | null;
  disabled?: boolean;
}

export const Select: React.FC<Props> = (props) => {
  const ref = useRef(null);
  const [showOptions, setShowOptions] = useState(false);
  const [optionSelected, setOptionSelected] = useState<{
    value: string;
    text: string;
  } | null>(null);
  const {
    placeholder,
    width,
    options,
    onSelect,
    selectedItem,
    disabled,
  } = props;

  useEffect(() => {
    if (selectedItem) {
      setOptionSelected(selectedItem);
    }
  }, []);

  const selectOption = (option) => {
    setOptionSelected(option);
    setShowOptions(false);
    onSelect && onSelect(option);
  };

  const escListener = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape") {
      setShowOptions(false);
    }
  }, []);

  const clickOutListener = useCallback(
    (e: MouseEvent) => {
      if (!(ref.current! as any).contains(e.target)) {
        setShowOptions(false);
      }
    },
    [ref.current]
  );

  useEffect(() => {
    document.addEventListener("click", clickOutListener);
    document.addEventListener("keyup", escListener);
    return () => {
      document.removeEventListener("click", clickOutListener);
      document.removeEventListener("keyup", escListener);
    };
  }, []);

  const handleClick = () => {
    if (!disabled) {
      setShowOptions(!showOptions);
    }
  };

  return (
    <SelectContainer width={width} active={showOptions} ref={ref}>
      <ContainerInput
        onClick={handleClick}
        active={showOptions}
        fill={optionSelected}
        disabled={disabled}
      >
        <div>
          <span>{placeholder}</span>
          {optionSelected && (
            <OptionSelected disabled={disabled}>
              {optionSelected && optionSelected.text}
            </OptionSelected>
          )}
        </div>
        <Icon
          name={showOptions ? "gl_arrow_up" : "gl_arrow_down"}
          width="16px"
          height="16px"
          fill={disabled ? COLORS.GRAY_4 : COLORS.RED}
        />
      </ContainerInput>
      {/* { showOptions && */}
      <ContainerOptions showOptions={showOptions}>
        {options &&
          options.map((option) => (
            <Options key={option.value} onClick={() => selectOption(option)}>
              {option.text}
              {optionSelected && optionSelected.value === option.value && (
                <Icon
                  name={"gl_check"}
                  width="16"
                  height="16px"
                  fill={COLORS.GREEN}
                />
              )}
            </Options>
          ))}
      </ContainerOptions>
      {/* } */}
    </SelectContainer>
  );
};

export default Select;
