import styled from "styled-components";
import {COLORS, FONTS} from "../../utils/theme/constants";

export const TooltipDiv = styled.div`
  position: absolute;
  bottom: 130%;
  width: 220px;
  margin: auto;
  background-color: #ffffff;
  padding: 16px;
  border-radius: 4px;
  box-shadow: 0px 2px 12px rgba(63, 76, 130, 0.1),
    0px 0px 4px rgba(77, 103, 205, 0.1);
  box-sizing: border-box;
`;

export const Paragraph = styled.span`
  margin: 0;
  font-family: ${FONTS.ROBOTO};
  font-style: normal;
  font-weight: 300;
  font-size: 12px;
  line-height: 18px;
  color: ${COLORS.GRAY_2};
  letter-spacing: 0.2px;
`;