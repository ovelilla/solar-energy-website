import styled from "@emotion/styled";
import { white, slate } from "@shared/styles/colors";
import { shadows } from "@shared/styles/shadows";
import { breakpoints, media, section } from "@shared/styles/sizes";

export const RoofStyled = styled.section`
    display: flex;
    justify-content: center;
    flex-grow: 1;
    ${section}

    ${media(breakpoints.sm)} {
        background-color: #fafaff;
    }
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 16px;
    width: 100%;
    max-width: ${breakpoints.xl}px;

    ${media(breakpoints.sm)} {
        gap: 24px;
        padding: 24px 0;
    }

    ${media(breakpoints.xl)} {
        gap: 48px;
        padding: 48px 0;
    }
`;

export const Grid = styled.div`
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: auto 1fr;
    gap: 16px;
    flex-grow: 1;
    background-color: ${white};

    ${media(breakpoints.sm)} {
        gap: 24px;
        padding: 24px;
        border-radius: 16px;
        box-shadow: ${shadows.sm};
    }

    ${media(breakpoints.md)} {
        grid-template-columns: 35fr 65fr;
        grid-template-rows: 1fr;
    }

    ${media(breakpoints.xl)} {
        gap: 36px;
        padding: 36px;
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

    h1 {
        font-size: 24px;
        font-weight: 600;
        letter-spacing: -0.8px;
        line-height: 1.2;

        ${media(breakpoints.sm)} {
            font-size: 32px;
        }
    }

    p:first-of-type {
        color: ${slate[600]};
        font-weight: 300;
    }

    p:last-of-type {
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
    }
`;
