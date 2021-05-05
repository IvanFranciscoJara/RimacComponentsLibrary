import * as React from 'react'
import { NotifyWrapper, NotifyContainer, NotifyContent, NotifyClose, NotifyIcon, NotifyTheme } from './styled'
import { Icon } from "../icon";
import {COLORS} from "../../utils/theme/constants";

// TS
export interface IProps {
  type?: 'success' | 'warning' | 'danger';
  children: React.ReactNode;
  onClose?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export const Notify: React.FC<IProps> = (props) => {
  const {type, children, onClose} = props;

  const handleClose = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>):void => {
    if (onClose) onClose(event)
  }

  const theme = NotifyTheme[`${type}`];

  return (
    <NotifyWrapper theme={theme}>
      <NotifyContainer>
        <NotifyIcon>
          <Icon name={theme['icon']} width="24px" height="24px" fill={theme['iconFill']} />
        </NotifyIcon>
        <NotifyContent>{children}</NotifyContent>
        <NotifyClose onClick={handleClose}>
          <Icon name="gl_close" width="16px" height="16px" fill={COLORS.GRAY_2} />
        </NotifyClose>
      </NotifyContainer>
    </NotifyWrapper>
  )
};

Notify.defaultProps = {
  type: 'success'
};
