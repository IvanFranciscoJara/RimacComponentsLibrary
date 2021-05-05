import * as React from "react";
import {
  Options,
  ContainerOptions,
  ContainerInput,
  SelectContainer,
  OptionSelected,
  ConstantHeight,
} from "./styled";
import { useEffect, useState, useRef, useCallback } from "react";
import { Icon } from "../icon";
import { COLORS } from "../../utils/theme/constants";

interface Props {
  placeholder?: string;
  width?: string;
  options?: { value: string; text: string }[];
  onChange?: (newSelectedOptions: { value: string; text: string }[]) => void;
  selectedOptions?: { value: string; text: string }[];
  disabled?: boolean;
}

export const Select: React.FC<Props> = (props) => {
  const ref = useRef(null);
  const [showOptions, setShowOptions] = useState(false);
  const [optionSelected] = useState<{
    value: string;
    text: string;
  } | null>(null);
  const {
    placeholder,
    width,
    options,
    onChange,
    selectedOptions,
    disabled,
    // onAddItem,
    // onRemoveItem,
  } = props;

  useEffect(() => {
    // if (selectedItem) {
    //   setOptionSelected(selectedItem);
    // }
  }, []);

  const selectOption = (value: string, text: string) => {
    let newSelectedOptions = selectedOptions ? [...selectedOptions] : [];
    let indexOptionSelected = newSelectedOptions.findIndex(
      (selectedOption) => selectedOption.value === value
    );
    if (indexOptionSelected === -1) {
      newSelectedOptions = [...newSelectedOptions, { value, text }];
    } else {
      newSelectedOptions.splice(indexOptionSelected, 1);
    }
    onChange && onChange(newSelectedOptions);
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
    <div style={{ position: "relative" }}>
      <ConstantHeight
        onClick={handleClick}
        active={showOptions}
        fill={optionSelected}
        disabled={disabled}
      >
        <div>
          {options?.length === selectedOptions?.length ? (
            <span>{placeholder}: TODOS</span>
          ) : (
            <>
              <span>{placeholder}</span>
              <OptionSelected>
                {selectedOptions?.map((selectedOption) => (
                  <div className="option">{selectedOption.text}</div>
                ))}
              </OptionSelected>
            </>
          )}
        </div>
        <Icon
          name={showOptions ? "gl_arrow_up" : "gl_arrow_down"}
          width="16px"
          height="16px"
          fill={disabled ? COLORS.GRAY_4 : COLORS.RED}
        />
      </ConstantHeight>
      <SelectContainer width={width} active={showOptions} ref={ref}>
        <ContainerInput
          onClick={handleClick}
          active={showOptions}
          fill={optionSelected}
          disabled={disabled}
        >
          <div style={{ width: "100%" }}>
            {options?.length === selectedOptions?.length ? (
              <span>{placeholder}: TODOS</span>
            ) : (
              <>
                <span>{placeholder}</span>
                <OptionSelected>
                  {selectedOptions?.map((selectedOption) => (
                    <div className="option">{selectedOption.text}</div>
                  ))}
                </OptionSelected>
              </>
            )}
            {/* <span>{placeholder}</span>
            <OptionSelected>
              {selectedOptions?.map((selectedOption) => (
                <div className="option">{selectedOption.text}</div>
              ))}
            </OptionSelected> */}
          </div>
          <Icon
            name={showOptions ? "gl_arrow_up" : "gl_arrow_down"}
            width="16px"
            height="16px"
            fill={disabled ? COLORS.GRAY_4 : COLORS.RED}
          />
        </ContainerInput>
        <ContainerOptions showOptions={showOptions}>
          {options &&
            options.map((option) => {
              let isSelected =
                selectedOptions?.findIndex(
                  (selectedOption) => selectedOption.value === option.value
                ) !== -1;
              return (
                <Options
                  key={option.value}
                  onClick={() => selectOption(option.value, option.text)}
                >
                  {option.text}
                  {isSelected && (
                    <Icon
                      name={"gl_check"}
                      width="16"
                      height="16px"
                      fill={COLORS.GREEN}
                    />
                  )}
                </Options>
              );
            })}
        </ContainerOptions>
      </SelectContainer>
    </div>
  );
};

export default Select;
