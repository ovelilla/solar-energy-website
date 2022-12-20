import { Link } from "react-router-dom";

import styled from "@emotion/styled";

import { white, slate } from "@shared/styles/colors";
import { breakpoints, media } from "@shared/styles/sizes";

export const SelfConsumptionStyled = styled.section`
    display: flex;
    justify-content: center;
    position: relative;
    width: 100%;
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
`;

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 24px;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 16px;
    }

    h2 {
        font-size: 48px;
        letter-spacing: -1px;
        font-weight: 600;
        line-height: 1.2;
        color: #13192e;
    }

    h3 {
        font-size: 24px;
        font-weight: 600;
        letter-spacing: -1px;
    }
`;

export const StyledLink = styled(Link)`
    display: flex;
    align-items: center;
    height: 48px;
    margin-top: 24px;
    padding: 0 24px;
    background-color: #28365e;
    font-weight: 500;
    color: ${white};
    letter-spacing: -0.8px;
    border-radius: 48px;
    transition: box-shadow 0.3s ease-in-out;

    &:hover {
        box-shadow: 0 10px 40px -5px rgb(0 0 0 / 30%);
    }
`;
