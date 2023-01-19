import styled from "@emotion/styled";
import { white, gray, slate } from "@shared/styles/colors";
import { shadows } from "@shared/styles/shadows";
import { breakpoints, media, section } from "@shared/styles/sizes";

export const SwitchContainer = styled.div`
    display: inline-block;
    position: relative;
    width: 56px;
    height: 32px;

    ${media(breakpoints.sm)} {
        width: 64px;
        height: 32px;
    }
`;

export const SwitchInput = styled.input`
    display: none;

    &:checked + label {
        background-color: #28365e;
    }

    &:checked + label:before {
        transform: translateX(24px);

        ${media(breakpoints.sm)} {
            transform: translateX(32px);
        }
    }
`;

export const SwitchLabel = styled.label`
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 56px;
    height: 32px;
    border-radius: 32px;
    background-color: #ccc;
    transition: background-color 0.2s;

    ${media(breakpoints.sm)} {
        width: 64px;
        height: 32px;
    }

    &:before {
        content: "";
        display: block;
        position: absolute;
        top: 4px;
        left: 4px;
        width: 24px;
        height: 24px;
        border-radius: 50%;
        background-color: white;
        transition: transform 0.2s ease-in-out;
    }
`;
