import styled from "@emotion/styled";
import { white, gray, slate } from "@shared/styles/colors";
import { shadows } from "@shared/styles/shadows";
import { breakpoints, media, section } from "@shared/styles/sizes";

export const Label = styled.label`
    display: flex;
    align-items: center;
    gap: 8px;
    cursor: pointer;
    font-size: 16px;
    font-weight: 500;

    ${media(breakpoints.sm)} {
        font-size: 18px;
    }

    &:hover span:first-of-type {
        background-color: #e0e7fb;
    }
`;

export const Input = styled.input`
    z-index: 1;
    position: absolute;
    opacity: 0;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    margin: 0;
    padding: 0;
    cursor: inherit;
`;

export const Icon = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    position: relative;
    cursor: pointer;
    user-select: none;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    color: #28365e;

    &:hover {
        background-color: #e0e7fb;
    }

    svg {
        width: 24px;
        height: 24px;
    }
`;
