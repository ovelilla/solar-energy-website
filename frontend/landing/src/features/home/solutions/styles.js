import { Link } from "react-router-dom";

import styled from "@emotion/styled";

import { white, slate, blue } from "@shared/styles/colors";
import { breakpoints, media } from "@shared/styles/sizes";

export const SolutionsStyled = styled.section`
    display: flex;
    justify-content: center;
    position: relative;
    width: 100%;
    background-color: #f0f3fd;
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
    gap: 48px;

    ${media(breakpoints.md)} {
        grid-template-columns: repeat(2, 1fr);
    }

    ${media(breakpoints.lg)} {
        gap: 64px;
    }

    ${media(breakpoints.xl)} {
        gap: 80px;
    }

    ${media(breakpoints.xxl)} {
        gap: 96px;
    }
`;

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    gap: 32px;
    padding: 32px;
    border-radius: 8px;
    background-color: ${white};
    box-shadow: 0px 16px 80px rgb(0 0 0 / 10%);

    ${media(breakpoints.lg)} {
        padding: 48px;
    }
`;

export const Title = styled.p`
    font-size: 24px;
    text-align: center;
    font-weight: 600;
    letter-spacing: -0.8px;
    color: ${slate[700]};
`;

export const Price = styled.p`
    display: flex;
    align-items: baseline;
    justify-content: center;
    gap: 8px;

    span:nth-of-type(1) {
        font-size: 20px;
        font-weight: 500;

        ${media(breakpoints.lg)} {
            font-size: 24px;
        }
    }

    span:nth-of-type(2) {
        font-size: 48px;
        font-weight: 700;

        ${media(breakpoints.lg)} {
            font-size: 56px;
        }
    }

    span:nth-of-type(3) {
        font-size: 20px;
        font-weight: 500;
        color: ${slate[400]};

        ${media(breakpoints.lg)} {
            font-size: 24px;
        }
    }
`;

export const Description = styled.p`
    color: ${slate[600]};
`;

export const Dl = styled.dl`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    gap: 24px;
    margin-top: 16px;
`;

export const Dt = styled.dt`
    display: flex;
    align-items: center;
    gap: 16px;

    h3 {
        letter-spacing: -0.4px;
        font-weight: 600;
    }
`;

export const Dd = styled.dd`
    padding-left: 64px;
    color: ${slate[600]};
`;

export const Icon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background-color: #e0e7fb;
`;

export const StyledLink = styled(Link)`
    display: flex;
    align-items: center;
    align-self: center;
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
