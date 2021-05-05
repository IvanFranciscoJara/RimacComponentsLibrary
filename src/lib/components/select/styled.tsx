import styled from "styled-components";
import { COLORS, FONTS } from "../../utils/theme/constants";

export const Options = styled.div`
  max-height: 56px;
  width: 100%;
  background: #ffffff;
  box-sizing: border-box;
  font-family: ${FONTS.LATO};
  font-size: 16px;
  text-transform: capitalize;
  line-height: 24px;
  padding: 16px 0 16px 16px;
  color: ${COLORS.GRAY};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  &:hover {
    color: ${COLORS.RED};
    background-color: ${COLORS.GRAY_7};
  }
`;

interface PropsContainerOptions {
  showOptions: boolean;
}

export const ContainerOptions = styled.div<PropsContainerOptions>`
  /* max-height: 232px; */
  max-height: ${(props) => (props.showOptions ? "232px" : "0px")};
  transition: 0.5s ease;
  /* width: calc(100% - 12px); */
  width: 100%;
  background: #ffffff;
  position: absolute;
  top: 100%;
  /* border: 1px solid red; */
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 4px;
    height: 68px;
  }
  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 0px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: inset 0 0 0px rgba(0, 0, 0, 0.3);
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${COLORS.GRAY_5};
    border-radius: 10px;
    outline: 1px solid slategrey;
    &:hover {
      background-color: #b2b3bf;
    }
  }
`;

interface PropsContainerInput {
  active?: boolean;
  fill?: { value: string; text: string } | null;
  disabled?: boolean;
}

export const ContainerInput = styled.div<PropsContainerInput>`
  background: ${(props) => (props.disabled ? COLORS.GRAY_6 : "#FFFFFF")};
  box-shadow: ${(props) =>
    !props.active ? `0px 0px 0px 1px ${COLORS.GRAY_4} inset` : "none"};
  box-sizing: border-box;
  border-radius: 4px;
  padding: ${(props) => (props.fill ? "8px 16px" : "16px")};
  font-family: ${FONTS.LATO};
  font-size: ${(props) => (props.fill ? "12px" : "16px")};
  line-height: ${(props) => (props.fill ? "16px" : "24px")};
  color: ${COLORS.GRAY_3};
  text-transform: capitalize;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

interface Props {
  width?: string;
  active?: boolean;
}

export const SelectContainer = styled.div<Props>`
  display: inline-block;
  position: relative;
  width: ${(props) => props.width || "100%"};
  ${(props) =>
    props.active &&
    `  background: #FFFFFF;
        box-shadow: 0px 2px 12px rgba(63, 76, 130, 0.1), 0px 0px 4px rgba(77, 103, 205, 0.1);
        border-radius: 4px;  `}
`;

interface PropsOptionSelect {
  disabled?: boolean;
}
export const OptionSelected = styled.p<PropsOptionSelect>`
  margin: 0;
  font-family: ${FONTS.LATO};
  font-size: 16px;
  line-height: 24px;
  color: ${(props) => (props.disabled ? COLORS.GRAY_3 : COLORS.GRAY)};
`;
