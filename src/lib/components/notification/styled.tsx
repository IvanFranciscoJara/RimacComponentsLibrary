import styled from "styled-components";
import { COLORS } from '../../utils/theme/constants';

// Theme
export const NotifyTheme = {
  success: {
    background: `${COLORS.GREEN_3}`,
    borderColor: `${COLORS.GREEN_2}`,
    icon: 'gl_correct',
    iconFill: `${COLORS.GREEN}`

  },
  warning: {
    background: `${COLORS.ORANGE_3}`,
    borderColor: `${COLORS.ORANGE_2}`,
    icon: 'gl_warning',
    iconFill: `${COLORS.ORANGE}`
  },
  danger: {
    background: `${COLORS.RED_5}`,
    borderColor: `${COLORS.RED_4}`,
    icon: 'gl_error',
    iconFill: `${COLORS.RED}`
  }
};

// Containers
export const NotifyWrapper = styled.div`
  background-color: ${props => props.theme.background};
  border-bottom: 1px solid ${props => props.theme.borderColor};
  padding-top: 16px;
  padding-bottom: 16px;
  width: 100%;

  @media (min-width: 1025px) {
    padding-top: 20px;
    padding-bottom: 20px;
  }
`;

export const NotifyContainer = styled.div`
  max-width: 1124px;
  margin-left: 32px;
  margin-right: 32px;
  position: relative;
  display: flex;
  align-items: flex-start;

  @media (min-width: 1025px) {
    margin-left: auto;
    margin-right: auto;
    align-items: center;
  }
`;

export const NotifyContent = styled.div`
  color: ${COLORS.GRAY};
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  font-weight: 300;
  line-height: 28px;
  flex: 1;

  b, strong {
    font-weight: 400;
  }

  p {
    margin: 0;
  }

  button {
    margin-top: 8px;
  }

  @media (min-width: 1025px) {
    display: flex;
    align-items: center;

    button {
      margin-top: 0;
      margin-left: 30px;
    }
  }
`;

// Button
export const NotifyClose = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  margin: 0;
  padding: 0;
  height: 16px;
  width: 16px;
  margin-top: 2px;
  i {
    margin: 0;
  }
`;

export const NotifyIcon = styled.div`
  width: 24px;
  height: 24px;
  margin-right: 16px;
  margin-top: 2px;
`;
