import * as React from "react";
import {
  Options,
  ContainerOptions,
  ContainerInput,
  OptionSelected,
  SelectContainer,
} from "./styled";
import { useEffect, useState, useRef, useCallback } from "react";
import { Icon } from "../icon";
import { COLORS } from "../../utils/theme/constants";
import Checkbox from "../checkbox";
interface Props {
  placeholder?: string;
  width?: string;
  options?: { value: string; text: string }[];
  onChange?: (newSelectedOptions: { value: string; text: string }[]) => void;
  selectedOptions?: { value: string; text: string }[];
  disabled?: boolean;
  limitTags?: number;
}

interface elemDelete {
  value?: string;
  text?: string;
}

export const Select: React.FC<Props> = (props) => {
  const ref = useRef(null);
  const [showOptions, setShowOptions] = useState(false);
  const [showAllOptions, setShowAllOptions] = useState(false);
  const [selectAll, setSelectAll] = useState(false);
  const {
    placeholder,
    width,
    options,
    onChange,
    selectedOptions,
    disabled,
    limitTags = 3,
  } = props;

  useEffect(() => {
    // if (selectedItem) {
    //   setOptionSelected(selectedItem);
    // }
  }, []);

  useEffect(() => {
    const validateAllSelected = () => {
      if (selectedOptions?.length === options?.length) setSelectAll(true);
      else setSelectAll(false);
    };
    validateAllSelected();
  }, [selectedOptions]);

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
      setShowAllOptions(false);
    }
  }, []);

  const clickOutListener = useCallback(
    (e: MouseEvent) => {
      if (!(ref.current! as any)?.contains(e.target)) {
        setShowOptions(false);
        setShowAllOptions(false);
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
      setShowAllOptions(!showAllOptions);
    }
  };

  const removeElement = (elem: elemDelete) => {
    let copyList = selectedOptions ? [...selectedOptions] : [];
    copyList = copyList.filter(
      (item) => item.value !== elem.value && item.text !== elem.text
    );
    onChange && onChange(copyList);
  };

  const handleSelectAll = (newState) => {
    // let newState = !selectAll;
    // console.log("handle multi after ", newState);
    setSelectAll(newState);
    if (newState) {
      onChange && onChange(options ?? []);
    } else {
      onChange && onChange([]);
    }
  };

  const renderSeleccion = () => (
    <ContainerInput
      onClick={handleClick}
      active={showOptions}
      fill={selectedOptions?.length}
      disabled={disabled}
    >
      <div style={{ width: "100%" }}>
        <p>{placeholder}</p>
        {selectedOptions && selectedOptions.length > 0 && (
          <OptionSelected>
            {selectedOptions
              ?.filter(
                (_, i) =>
                  i < (!showAllOptions ? limitTags : selectedOptions?.length)
              )
              .sort((a, b) =>
                a.text < b.text ? -1 : a.text === b.text ? 0 : 1
              )
              .map((selectedOption, index) => (
                <div
                  className="option"
                  key={index}
                  onClick={() => removeElement(selectedOption)}
                >
                  <h1>{selectedOption.text}</h1>
                  <Icon
                    name="gl_close"
                    width="16px"
                    height="16px"
                    fill={COLORS.GRAY_2}
                  />
                </div>
              ))}
            {!showAllOptions &&
              (selectedOptions ? selectedOptions.length - limitTags : 0) >
                0 && (
                <div
                  className="option"
                  key={0}
                  onClick={() => setShowAllOptions(true)}
                >
                  <h1>
                    + {selectedOptions ? selectedOptions.length - limitTags : 0}
                  </h1>
                </div>
              )}
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
  );

  const renderOptions = () => (
    <ContainerOptions showOptions={showOptions}>
      {options && (
        <>
          <Options
            key="TodosOption"
            onClick={() => handleSelectAll(!selectAll)}
          >
            <Checkbox checked={selectAll} />
            <p>Seleccionar todos</p>
          </Options>

          {options.map((option) => {
            let isSelected =
              selectedOptions?.findIndex(
                (selectedOption) => selectedOption.value === option.value
              ) !== -1;
            return (
              <Options
                key={option.value}
                onClick={() => selectOption(option.value, option.text)}
              >
                <Checkbox checked={isSelected} />
                <p>{option.text}</p>
              </Options>
            );
          })}
        </>
      )}
    </ContainerOptions>
  );

  return (
    <SelectContainer width={width} active={showOptions} ref={ref}>
      {renderSeleccion()}
      {renderOptions()}
    </SelectContainer>
  );
};

export default Select;
