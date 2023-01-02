import styled from "@emotion/styled";

import { white, slate } from "@shared/styles/colors";
import { breakpoints, media } from "@shared/styles/sizes";

import { MapPinIcon, ArrowRightIcon } from "@heroicons/react/24/outline";

export const FormStyled = styled.form`
    position: relative;
    height: 72px;
    box-shadow: 0px 16px 80px rgb(0 0 0 / 15%);
    ${(p) => {
        if (p.predictions.length) {
            return `
                border-top-left-radius: 16px;
                border-top-right-radius: 16px;
                `;
        } else {
            return "border-radius: 16px;";
        }
    }}

    ${media(breakpoints.lg)} {
        height: 80px;
    }
`;

export const Field = styled.div`
    z-index: 100;
    display: flex;
    align-items: center;
    gap: 16px;
    position: absolute;
    width: 100%;
    height: 100%;
    padding: 0 24px;
    background-color: ${white};

    ${(p) => {
        if (p.predictions.length) {
            return `
                border-top-left-radius: 16px;
                border-top-right-radius: 16px;
                `;
        } else {
            return "border-radius: 16px;";
        }
    }}
`;

export const StyledMapPinIcon = styled(MapPinIcon)`
    display: none;
    flex-shrink: 0;
    width: 32px;
    height: 32px;
    color: ${slate[500]};

    ${media(breakpoints.sm)} {
        display: block;
    }
`;

export const Input = styled.input`
    display: flex;
    align-items: center;
    flex-grow: 1;
    min-width: 0;
    height: 100%;
    border: none;
    outline: none;
    font-size: 18px;
    color: ${slate[700]};
    letter-spacing: -0.8px;

    ${media(breakpoints.sm)} {
        font-size: 20px;
    }

    ${media(breakpoints.md)} {
        font-size: 20px;
        font-weight: 300;
    }
`;

export const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    width: 48px;
    height: 48px;
    padding: 8px;
    border-radius: 50%;
    background-color: #13192e;
`;

export const StyledArrowRightIcon = styled(ArrowRightIcon)`
    width: 24px;
    height: 24px;
    color: ${white};
    stroke-width: 2;
`;
