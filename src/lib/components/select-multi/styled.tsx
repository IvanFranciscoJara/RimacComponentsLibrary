import styled, { css } from "styled-components";
import { switchProp } from "styled-tools";
import { COLORS, FONTS } from "../../utils/theme/constants";

export const Options = styled.div`
  max-height: 56px;
  width: 100%;
  background: #ffffff;
  box-sizing: border-box;
  padding: 16px 0 16px 16px;
  cursor: pointer;
  display: flex;
  align-items: center;
  p {
    font-family: ${FONTS.LATO};
    font-size: 16px;
    text-transform: capitalize;
    line-height: 24px;
    color: ${COLORS.GRAY};
    margin-left: 10px;
  }
  &:hover {
    color: ${COLORS.RED};
    background-color: ${COLORS.GRAY_7};
  }
`;

interface PropsContainerOptions {
  showOptions: boolean;
}

export const ContainerOptions = styled.div<PropsContainerOptions>`
  /* width: calc(100% - 12px); */
  width: 100%;
  background: #ffffff;
  overflow-y: scroll;
  position: absolute;
  top: 100%;
  left: 0px;
  transition: 0.5s ease;
  max-height: ${(props) => (props.showOptions ? "232px" : "0px")};
  z-index: 99;
  box-shadow: 0px 0px 4px rgba(77, 103, 205, 0.1),
    0px 2px 12px rgba(63, 76, 130, 0.1);
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
  fill?: number;
  disabled?: boolean;
}
export const ContainerInput = styled.div<PropsContainerInput>`
  background: ${(props) => (props.disabled ? COLORS.GRAY_6 : "#FFFFFF")};
  box-shadow: ${(props) =>
    !props.active ? `0px 0px 0px 1px ${COLORS.GRAY_4} inset` : "none"};
  box-sizing: border-box;
  border-radius: 4px;
  padding: ${(props) => (props.fill && props.fill > 0 ? "8px 16px" : "16px")};
  font-family: ${FONTS.LATO};
  font-size: ${(props) => (props.fill && props.fill > 0 ? "12px" : "16px")};
  line-height: ${(props) => (props.fill && props.fill > 0 ? "16px" : "24px")};
  color: ${COLORS.GRAY_3};
  text-transform: capitalize;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: 0.5s;
`;

interface Props {
  width?: string;
  active?: boolean;
}

export const SelectContainer = styled.div<Props>`
  display: inline-block;
  position: relative;
  top: 0;
  left: 0px;
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
export const OptionSelected = styled.div<PropsOptionSelect>`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  padding: 5px 2px 2px 2px;
  .option {
    background-color: ${COLORS.GRAY_5};
    padding: 8px 16px;
    border-radius: 6px;
    margin: 0px 8px 8px 0px;
    display: flex;
    align-items: center;
    width: auto;
    cursor: pointer;
    svg {
      fill: ${COLORS.RED};
    }
    h1 {
      color: ${(props) => (props.disabled ? COLORS.GRAY_3 : COLORS.GRAY)};
      font-family: ${FONTS.LATO};
      font-size: 14px;
      line-height: 16px;
      margin-right: 10px;
    }
  }
`;

interface PropsTitle {
  size: "small" | "normal";
}
export const TitleSelect = styled.span<PropsTitle>`
  width: auto;
  color: ${COLORS.GRAY_3};

  ${switchProp("size", {
    small: css`
      font-size: 12px;
      font-family: ${FONTS.ROBOTO},
      line-height: 12px
    `,
    normal: css`
      font-size: 16px;
      font-family: ${FONTS.LATO},
      line-height: 24px
    `,
  })}
`;
