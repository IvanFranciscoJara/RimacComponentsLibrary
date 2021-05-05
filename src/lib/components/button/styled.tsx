import styled, { css } from "styled-components";
import { switchProp } from "styled-tools";
import { COLORS, FONTS } from "../../utils/theme/constants";
import { screenSize } from "../../utils/theme/screenSize";

let NewScreenSize = screenSize as any;
interface Props {
  propType: "primary" | "secondary" | "link";
  propSize: "small" | "default" | "large";
}
export default styled.button<Props>`
  border: none;
  border-radius: 8px;
  background-color: ${COLORS.RED};
  color: #ffffff;
  outline: none;
  cursor: pointer;
  font-family: ${FONTS.LATO};
  font-weight: bold;
  line-height: 16px;
  font-size: 14px;
  letter-spacing: 0.8px;
  text-transform: uppercase;

  &:disabled {
    background-color: ${COLORS.GRAY_6};
    color: ${COLORS.GRAY_4};
    border: none;
  }

  ${switchProp("propType", {
    primary: css`
      min-width: 148px;

      &:hover {
        &:not([disabled]) {
          box-shadow: 0px 4px 10px rgba(239, 51, 64, 0.24);
          background-color: ${COLORS.RED_2};
        }
      }
    `,
    secondary: css`
      border: 1px solid ${COLORS.RED};
      background-color: transparent;
      color: ${COLORS.RED};

      &:hover {
        &:not([disabled]) {
          border: 2px solid ${COLORS.RED_3};
          color: ${COLORS.RED_3};
        }
      }
    `,
    link: css`
      color: ${COLORS.ACIAN};
      background-color: transparent;

      &:hover {
        &:not([disabled]) {
          color: ${COLORS.ACIAN_2};
        }
      }
    `,
  })};

  ${switchProp("propSize", {
    small: css`
      min-width: 100px;
      height: 32px;
      border-radius: 6px;
      font-size: 12px;
      line-height: 16px;
      ${NewScreenSize.lg`
        height: 40px;
     `}
    `,
    default: css`
      height: 44px;
      min-width: 148px;
      ${NewScreenSize.lg`
        height: 48px;
     `}
    `,
    large: css`
      height: 52px;
      min-width: 140px;
      ${NewScreenSize.lg`
        height: 56px;
     `}
    `,
  })};
`;
