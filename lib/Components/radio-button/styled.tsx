import styled, { keyframes, css } from 'styled-components';
import { COLORS } from "../../utils/theme/constants";

const VARIABLES = {
    RADIO_CHECKED_COLOR: COLORS.GREEN,
    RADIO_BORDER_COLOR: COLORS.GREEN,
    RADIO_SIZE: '20px',
    RADIO_CHECKED_SIZE: '12px',
    RADIO_RIPPLE_SIZE: '10px',
};

const ripple = keyframes`
    0% {
        box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0.0);
    }

    50% {
        box-shadow: 0px 0px 0px ${VARIABLES.RADIO_RIPPLE_SIZE} rgba(0, 0, 0, 0.1);
    }

    100% {
        box-shadow: 0px 0px 0px ${VARIABLES.RADIO_RIPPLE_SIZE} rgba(0, 0, 0, 0);
    }
`;

interface RadioButtonProps {
    error?: true | false,
}

export const RadioButtonContainer = styled.div<RadioButtonProps>`
    width: 23px;
    margin: 16px 0;
    input[type="radio"] {
        display: none;
        &:checked + label {
        color: ${COLORS.GRAY};
            &:before {
                border-color: ${VARIABLES.RADIO_CHECKED_COLOR};
                animation: ${ripple} 0.2s linear forwards;
                color: ${COLORS.GRAY};
            }
        }
        &:checked + label:after {
            transform: scale(1);
        }
        &:disabled + label {
            &:before {
                border-color: ${COLORS.GRAY_5};
                color: ${COLORS.GRAY};
                background: ${COLORS.GRAY_6};
            }
        }
    }

    label {
        display: inline-block;
        height: ${VARIABLES.RADIO_SIZE};
        position: relative;
        padding: 0 (${VARIABLES.RADIO_SIZE} + 12px);
        margin-bottom: 0;
        cursor: pointer;
        vertical-align: bottom;
        color: ${COLORS.GRAY_3};
        &:before, &:after {
            position: absolute;
            content: '';
            border-radius: 50%;
            transition: all .3s ease;
            transition-property: transform, ${VARIABLES.RADIO_BORDER_COLOR};
        }
        &:before {
            left: 0;
            top: 0;
            width: ${VARIABLES.RADIO_SIZE};
            height: ${VARIABLES.RADIO_SIZE};
            border: 1px solid ${COLORS.GRAY_4};
        }
        &:after {
            top: 5.1px;
            left: 5px;
            width: ${VARIABLES.RADIO_CHECKED_SIZE};
            height: ${VARIABLES.RADIO_CHECKED_SIZE};
            transform: scale(0);
            background: ${VARIABLES.RADIO_CHECKED_COLOR};
        }
        ${props => props.error && css`
            &:before {
                border: 1px solid ${COLORS.RED_3};
            }
        `}
    }
`;