import styled from "@emotion/styled";

import { white, slate } from "@shared/styles/colors";
import { shadows } from "@shared/styles/shadows";
import { breakpoints, media } from "@shared/styles/sizes";

export const RangeStyled = styled.div`
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
    gap: 36px;
    flex-grow: 1;

    ${media(breakpoints.sm)} {
        gap: 36px;
    }

    ${media(breakpoints.md)} {
        grid-template-columns: 60fr 40fr;
        grid-template-rows: 1fr;
    }

    ${media(breakpoints.lg)} {
        gap: 36px;
    }
`;

export const LeftColumn = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;

    ${media(breakpoints.sm)} {
        gap: 24px;
    }
`;

export const RightColumn = styled.div`
    display: flex;
    flex-direction: column;
    gap: 36px;
`;

export const Box = styled.div`
    display: flex;
    gap: 16px;
    padding: 16px;
    background-color: #f5f6ff;
    border-radius: 8px;

    ${media(breakpoints.md)} {
        flex-grow: 1;
        padding: 24px;
    }

    ${media(breakpoints.xl)} {
        padding: 36px;
    }

    div {
        display: flex;
        flex-direction: column;

        span:first-of-type {
            font-weight: 600;

            ${media(breakpoints.md)} {
                font-size: 18px;
            }
        }

        span:last-of-type {
            font-weight: 300;
            color: ${slate[600]};
        }
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

export const InputNumber = styled.input`
    width: 160px;
    height: 48px;
    padding: 0 16px;
    outline: none;
    border: none;
    border-radius: 8px;
    box-shadow: rgb(215 220 245) 0px 0px 0px 1px;

    &:focus {
        box-shadow: 0px 0px 0px 2px #28365e;
    }

    &:hover:not(:focus) {
        box-shadow: 0px 0px 0px 1px #28365e;
    }
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;

    ${media(breakpoints.sm)} {
        gap: 36px;
    }

    ${media(breakpoints.md)} {
        margin-top: 24px;
    }

    ${media(breakpoints.xl)} {
        margin-top: 36px;
    }
`;

export const RangeContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`;

export const InputRange = styled.input`
    appearance: none;
    width: 100%;
    height: 16px;
    background-color: #edefff;
    border-radius: 8px;

    &::-webkit-slider-thumb {
        appearance: none;
        width: 40px;
        height: 40px;
        background: #28365e;
        border: 6px solid #ffffff;
        border-radius: 50%;
        box-shadow: ${shadows.md};
        cursor: pointer;
    }

    &::-moz-range-thumb {
        width: 40px;
        height: 40px;
        background: #28365e;
        border: 6px solid #ffffff;
        border-radius: 50%;
        box-shadow: ${shadows.md};
        cursor: pointer;
    }
`;

export const Line = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${slate[600]};
    font-weight: 300;
`;
