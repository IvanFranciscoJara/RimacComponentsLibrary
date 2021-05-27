import * as React from "react";
import styled from "styled-components";
import { COLORS } from "../../utils/theme/constants";
import { IconCheck } from "../icon";

interface Props {
  className?: string;
  checked: boolean;
  id?: string | undefined;
  onChange?: () => void;
}

const CheckboxDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  background-color: white;
  border: 1px solid ${COLORS.GRAY_3};
  border-radius: 5px;
  transition: 0.1s ease;
  &:hover {
    cursor: pointer;
  }
  &.checked {
    background-color: ${COLORS.GREEN};
    border: 1px solid ${COLORS.GREEN};
  }
  svg {
    fill: white;
  }
`;

export const Checkbox: React.FC<Props> = (props) => {
  const { className = "", id, checked, onChange } = props;

  return (
    <CheckboxDiv
      id={id}
      className={`${className} ${checked && "checked"}`.trim()}
      onClick={onChange}
    >
      <IconCheck />
    </CheckboxDiv>
  );
};

export default Checkbox;
