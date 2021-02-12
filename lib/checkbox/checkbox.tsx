import * as React from "react";
import styled from "styled-components";
import { COLORS, FONTS } from '../../utils/theme/constants';

interface Props {
  disabled: boolean;
  className?: string;
  label: string;
  checked: boolean;
  id: string | undefined;
  onChange?: ((check: boolean | undefined) => void) 
}

const CheckboxDiv = styled.div`
display: grid;
  margin-bottom: 16px;
  grid-template-columns: 20px auto;
  grid-column-gap: 12px;
  width: 100%;
  position: relative;
  z-index: 1;
  
  &.disabled {
    & .rd--checkbox-box {
      pointer-events: none;
    }

    & .rd--checkbox-label {
      color: ${COLORS.GRAY_4};
      pointer-events: none;
    }

    & .rd--checkbox-input {
      pointer-events: none;
      &:checked {
        & ~ .rd--checkbox-checkmark:after {
          border-color: ${COLORS.GRAY_4};
        }
      }
    }

    & .rd--checkbox-checkmark {
      background-color: ${COLORS.GRAY_6};
      border-color: ${COLORS.GRAY_5};
      pointer-events: none;
    }
  }
`

const Box = styled.div`
display: block;
position: relative;
cursor: pointer;
font-size: 22px;
-webkit-user-select: none;
-moz-user-select: none;
-ms-user-select: none;
user-select: none;
height: 20px;
width: 20px;
`

const Label = styled.label`
font-family: ${FONTS.LATO};
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 24px;
letter-spacing: 0.2px;
color: ${COLORS.GRAY};
`

const Input = styled.input`
position: absolute;
opacity: 0;
cursor: pointer;
height: 100%;
width: 100%;

&:checked {
  & ~ .rd--checkbox-checkmark {
    background-color: ${COLORS.GREEN};
    border: 1px solid ${COLORS.GREEN};

    &:after {
      display: block;
    }
  }
}
`
const Checkmarck = styled.span`
position: absolute;
top: 0;
left: 0;
height: 20px;
width: 20px;
border: 1px solid ${COLORS.GRAY_4};
box-sizing: border-box;
border-radius: 4px;

&:after {
  content: "";
  position: absolute;
  display: none;
  left: calc(50% - 2px);
  top: calc(50% - 5px);
  width: 3.5px;
  height: 7px;
  border: solid #fff;
  border-width: 0 1.5px 1.5px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}
`

export const Checkbox: React.FC<Props> = (props) => {
  const {
    disabled = false,
    className = '',
    label = '', // AGREGAR CUANDO SOLO SE MOSTRARA TEXTO
    id,
    checked,
    onChange,
    } = props;
    const [check, setCheck] = React.useState(checked);

  const onCliked = () => {
    if ( !disabled) {
      console.log(checked);
      
      if(typeof checked === "undefined" ){
        
        setCheck(!check)
      }
      if(onChange){
        onChange(check)
      }
    }
  }

  return (
    <CheckboxDiv className={`${className} ${disabled ? 'disabled' : ''}`.trim()}>
      <Box onClick={onCliked}>
        <Input
          type="checkbox"
          className="rd--checkbox-input"
          id={id}
          disabled={disabled}
          // value={check}
          checked={check}
        />
        <Checkmarck className="rd--checkbox-checkmark"></Checkmarck>
      </Box>
      <Label htmlFor={id}>{label}</Label>
    </CheckboxDiv>
  );
};

export default Checkbox;
