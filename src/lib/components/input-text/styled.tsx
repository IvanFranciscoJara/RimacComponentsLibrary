import styled from "styled-components";
import { COLORS, FONTS } from "../../utils/theme/constants";

interface PropsContainerInput {
  active?: boolean;
  //   fill?: { value: string; text: string } | null;
  disabled?: boolean;
  width?: string;
}

interface Props {
  width?: string;
  active?: boolean;
  filled?: boolean;
  disabled?: boolean;
  valid?: boolean;
}

export const ContainerInput = styled.div<Props>`
  display: inline-flex;
  justify-content: center;
  border-radius: 4px;
  outline: none;
  background: #ffffff;
  margin: 0;
  box-shadow: none;
  padding: 0;
  flex-direction: column;
  width: ${(props) => props.width || "100%"};
  height: 56px;
  position: relative;
  -webkit-transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  -ms-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
  border: 1px solid ${COLORS.GRAY_4};
   ${(props) =>
     props.filled && !props.active && props.valid
       ? `border: 1px solid ${COLORS.GRAY_4};`
       : ""}
  ${(props) => props.active && `border: 1px solid ${COLORS.GRAY};`}
  ${(props) =>
    props.filled && !props.valid && !props.active
      ? `border: 1px solid ${COLORS.RED};`
      : ""} 
   &:hover{
        border: 1px solid ${(props) =>
          props.disabled ? COLORS.GRAY_4 : COLORS.GRAY};
    }
    ${(props) =>
      props.disabled &&
      ` background-color: ${COLORS.GRAY_6};
          border: 1px solid ${COLORS.GRAY_4};
          color: ${COLORS.GRAY_3}
        `}
`;

export const BoxInput = styled.input<PropsContainerInput>`
  font-family: ${FONTS.ROBOTO};
  font-size: 16px;
  line-height: 24px;
  color: ${COLORS.GRAY};
  position: absolute;
  z-index: 1;
  height: 100%;
  width: 100%;
  padding: 20px 16px 0;
  border-radius: 4px;
  background: transparent;
  box-sizing: border-box;
  outline: none;
  box-shadow: none;
  border: none;
  &[type="number"]::-webkit-inner-spin-button,
  &[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  ${(props) => props.disabled && `color: ${COLORS.GRAY_3}`}
`;

interface PropsSpan {
  width?: string;
  active?: boolean;
  filled?: boolean;
}

export const LabelInput = styled.span<PropsSpan>`
  font-family: ${FONTS.LATO};
  font-size: 16px;
  line-height: 24px;
  color: ${COLORS.GRAY_3};
  position: absolute;
  left: 16px;
  top: 16px;
  z-index: 0;
  text-transform: capitalize;
  background: transparent;
  -webkit-transition: top 0.3s ease-in-out;
  -moz-transition: top 0.3s ease-in-out;
  -ms-transition: top 0.3s ease-in-out;
  -o-transition: top 0.3s ease-in-out;
  transition: top 0.3s ease-in-out;
  ${(props) =>
    props.active || props.filled
      ? `top: 8px;
         font-size: 12px;
         line-height: 16px;`
      : ""}
  &:hover {
    color: ${COLORS.GRAY_2};
  }
`;

export const ErrorText = styled.p`
  font-family: ${FONTS.ROBOTO};
  font-size: 10px;
  line-height: 16px;
  color: ${COLORS.RED};
  margin: 8px 0 0 0;
`;
