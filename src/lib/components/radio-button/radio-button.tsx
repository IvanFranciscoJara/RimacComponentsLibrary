import * as React from "react";
import { RadioButtonContainer } from "./styled";
import { COLORS } from "../../utils/theme/constants";

interface Props {
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  label?: string;
  disabled?: true | false;
  error?: true | false;
  color?: string;
  id: string | number;
  check?: true | false;
}

export const RadioButton: React.FC<Props> = (props) => {
  const { onChange, label, disabled, id, error } = props;
  const handleChange = (event) => onChange && onChange(event);
  return (
    <RadioButtonContainer error={error}>
      <input
        type="radio"
        id={`radio-input-${id}`}
        onChange={handleChange}
        onClick={handleChange}
        disabled={disabled}
      />
      <label htmlFor={`radio-input-${id}`}>{label}</label>
    </RadioButtonContainer>
  );
};

RadioButton.defaultProps = {
  color: COLORS.GREEN,
  disabled: false,
  error: false,
};

export default RadioButton;
