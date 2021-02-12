import * as React from 'react';
import { Layer, IconContainer, Body, Content, BodyContent, TitleContent, TextContent } from './styled';
import { Icon } from "../icon";
import { COLORS } from '../../utils/theme/constants';

interface Props {
    size?: string,
    children?: React.ReactNode,
    iconColor?: 'RED' | 'GRAY_3',
    paddingLeft?: string,
    paddingRight?: string,
    closeModal: any,
    type?: 'default' | 'full' | 'terms',
    titleText?: string,
}

export const Modal: React.FC<Props> = props => {
    const { size, children, iconColor, paddingLeft, paddingRight, closeModal, type, titleText } = props;
    const propIconColor = iconColor || 'RED'; 
    const propType = type || 'default';
    return (
        <Layer type={propType}>
            <Body type={propType} size={size}>
                <IconContainer type={propType} onClick={() => closeModal(false) }>
                    {type === 'full' && <span>CERRAR</span>}
                    <Icon name="icon_close_modal" width="32px" height="32px" fill={COLORS[propIconColor]}/>
                </IconContainer>
                {
                    type === 'terms' ? <Content type={propType}>
                        <TitleContent>{titleText}</TitleContent>
                        <BodyContent>
                            <TextContent>
                                {children}
                            </TextContent>
                        </BodyContent>
                    </Content> :
                    <Content type={propType} paddingLeft={paddingLeft} paddingRight={paddingRight}>
                        {children}
                    </Content>
                }
            </Body>
        </Layer>
    )
};

Modal.defaultProps = {
    iconColor: 'RED',
    type: 'default',
};

export default Modal;
