import styled, { css }  from 'styled-components';
import { COLORS, FONTS } from '../../utils/theme/constants';
import { switchProp } from 'styled-tools';
import { screenSize } from "../../utils/theme/_screenSize";

interface LayerProps {
    type?: 'default' | 'full' | 'terms' 
}
export const Layer = styled.div<LayerProps>`
    background: rgba(73, 79, 102, 0.8);
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 0;
    bottom: 0;
    width: 100%;
    position: absolute;
    min-height: 100vh;
    ${switchProp('type', {
        full: css`
        background: #FFFFFF;
        `
    })}
`;


interface BodyProps {
    size?: string,
    type?: 'default' | 'full' | 'terms',
}
export const Body = styled.div<BodyProps>`
    background: #FFFFFF;
    width: calc((${props => props.size}/37)*100%);
    border-radius: 12px;
    ${switchProp('type', {
        default: css`
        margin: 0px 32px 0px 32px;
        max-width: calc(100% - 64px);
        width: 100%;
        ${screenSize.md`
            width: calc((${props => props.size}/37)*100%);
        `}       
        `,
        full: css`
        max-height: calc(100vh - 144px);
        margin: 16px 0px 48px 0px;
        width: 100%;
        ${screenSize.md`
            margin: 48px calc((2/37)*100%) 96px calc((5/37)*100%);
            width: calc((30/37)*100%);
            border-radius: 0px;
        `} 
        `,
        terms: css`
        margin: 32px 0px 32px 0px;
        width: calc(100% - 64px);
        height: calc(100vh - 64px);
        ${screenSize.md`
            margin: 96px calc((3/37)*100%) 96px calc((3/37)*100%);
            max-height: calc(100vh - 192px);
            width: calc((31/37)*100%);
        `}
        `
    })}
`;


interface IconContainerProps {
    type?: 'default' | 'full' | 'terms',
}
export const IconContainer = styled.div<IconContainerProps>`
    display: inline-block;
    width: 32px;
    height: 32px;
    background-repeat: no-repeat;
    float: right;
    margin-right: 16px;
    margin-top: 16px;
    ${props => props.type && props.type === 'full' && css`
        display: flex;
        margin-right: 0px;
        margin-top: 0px;
        width: auto;
        align-items: center;
        color: ${COLORS.GRAY_3};
        font-family: ${FONTS.LATO};
        letter-spacing: 0.8px;
        font-size: 10px;
        line-height: 16px;
        font-weight: normal;
        span{
            margin-right: 8px;
        }
    `};
`;


interface ContentProps {
    paddingRight?: string,
    paddingLeft?: string,
    type?: 'default' | 'full' | 'terms',
}
export const Content = styled.div<ContentProps>`
    max-height: calc(100vh - 304px);
    margin-top: 75px;
    margin-bottom: 64px;
    padding-left: calc((${props => props.paddingLeft}/37)*100%);
    padding-right: calc((${props => props.paddingRight}/37)*100%);
    &::-webkit-scrollbar{
        background: white;
        width: 4px;
    }
    &::-webkit-scrollbar-thumb{
        background: ${COLORS.GRAY_6};
        height: 10px;
        border-radius: 12px;
    };
    ${switchProp('type', {
        full: css`
        width: 100%;
        margin: 48px 0px 48px 0px;
        max-height: calc(100vh - 112px);
        height: 100%;
        overflow: auto;
        ${screenSize.sm`
            margin-top: 64px;
            margin-bottom: 64px;
        `} 
        `,
        terms: css`
        width: calc(100% - 48px);
        margin: 48px 16px 48px 32px;
        max-height: calc(100vh - 144px);
        height: calc(100vh - 144px);
        ${screenSize.md`
            margin-top: 48px;
            padding-right: calc((1/37)*100%);
            padding-left: calc((3/37)*100%)
            border: 1px solid blue;
        `}
        `
    })}
`;


export const BodyContent = styled.div`
    max-height: calc(100vh - 176px);
    overflow: auto;
    &::-webkit-scrollbar{
        background: white;
        width: 4px;
    }
    &::-webkit-scrollbar-thumb{
        background: ${COLORS.GRAY_6};
        height: 10px;
        border-radius: 12px;
    }
    ${screenSize.md`
        max-height: calc(100vh - 352px);
    `} 
`;


export const TitleContent = styled.p`
    font: normal bold 12px/16px ${FONTS.LATO};
    letter-spacing: 0.6px;
    color: ${COLORS.GRAY};
    border-bottom: 1px solid ${COLORS.GRAY_5};
    padding-bottom: 16px;
    ${screenSize.sm`
        display: flex;
        justify-content: center;
        padding-bottom: 32px;
        margin: 0 calc((2/37)*100%) 0px calc((3/37)*100%);
    `}
`;


export const TextContent = styled.div`
    padding-top: 16px;
    ${screenSize.sm`
        margin: 0 calc((2/37)*100%) 0 calc((3/37)*100%);
        padding-top: 48px;
    `}
`;