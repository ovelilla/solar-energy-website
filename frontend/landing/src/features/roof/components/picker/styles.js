import styled from "@emotion/styled";

import { white, slate } from "@shared/styles/colors";
import { shadows } from "@shared/styles/shadows";
import { breakpoints, media } from "@shared/styles/sizes";

export const PickerStyled = styled.div`
    display: flex;
    flex-grow: 1;
    background-color: ${white};

    ${media(breakpoints.sm)} {
        padding: 24px;
        border-radius: 16px;
        box-shadow: ${shadows.sm};
    }

    ${media(breakpoints.lg)} {
        padding: 36px;
    }
`;

export const Grid = styled.div`
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: auto 1fr;
    gap: 16px;
    flex-grow: 1;

    ${media(breakpoints.sm)} {
        gap: 24px;
    }

    ${media(breakpoints.md)} {
        grid-template-columns: 35fr 65fr;
        grid-template-rows: 1fr;
    }

    ${media(breakpoints.lg)} {
        gap: 36px;
    }
`;

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    position: relative;

    ${media(breakpoints.sm)} {
        gap: 24px;
    }
`;

export const Title = styled.h1`
    font-size: 24px;
    font-weight: 600;
    letter-spacing: -0.8px;
    line-height: 1.2;

    ${media(breakpoints.sm)} {
        font-size: 32px;
    }
`;

export const Description = styled.p`
    color: ${slate[600]};
    font-weight: 300;
`;

export const Address = styled.p`
    display: flex;
    flex-direction: colukmn;
    align-items: center;
    gap: 8px;
    font-weight: 500;

    span {
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    svg {
        overflow: visible;
        width: 20px;
        height: 20px;
        stroke: black;
        stroke-width: 0.4px;
    }
`;
