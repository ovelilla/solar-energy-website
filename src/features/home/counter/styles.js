import { Link } from "react-router-dom";

import styled from "@emotion/styled";

import { white, slate } from "@shared/styles/colors";
import { breakpoints, media } from "@shared/styles/sizes";

export const CounterStyled = styled.section`
    display: flex;
    justify-content: center;
    position: relative;
    width: 100%;
    background-color: #141b2f;
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: ${breakpoints.xl}px;
    padding: 24px 16px;

    ${media(breakpoints.sm)} {
        padding: 48px 24px;
    }

    ${media(breakpoints.md)} {
        padding: 72px 32px;
    }

    ${media(breakpoints.lg)} {
        padding: 96px 32px;
    }

    ${media(breakpoints.xl)} {
        padding: 120px 32px;
    }
`;

export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 96px;

    ${media(breakpoints.md)} {
        grid-template-columns: repeat(2, 1fr);
    }

    ${media(breakpoints.lg)} {
        grid-template-columns: repeat(3, 1fr);
    }
`;

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Number = styled.p`
    font-size: 48px;
    font-weight: 700;
    color: #f0f3fd;
`;

export const Text = styled.p`
    font-size: 18px;
    font-weight: 500;
    color: #f0f3fd;
`;
