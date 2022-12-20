import styled from "@emotion/styled";

import { white, slate } from "@shared/styles/colors";
import { breakpoints, media } from "@shared/styles/sizes";

export const HeroStyled = styled.section`
    display: flex;
    justify-content: center;
    position: relative;
    width: 100%;
    background-color: ${slate[50]};

    img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

export const Container = styled.div`
    z-index: 100;
    display: flex;
    flex-direction: column;
    gap: 32px;
    width: 100%;
    max-width: ${breakpoints.xl}px;
    padding: 96px 16px;

    ${media(breakpoints.sm)} {
        padding: 120px 24px;
    }

    ${media(breakpoints.md)} {
        gap: 48x;
        padding: 144px 32px;
    }

    ${media(breakpoints.lg)} {
        gap: 56px;
        padding: 168px 32px;
    }

    ${media(breakpoints.xl)} {
        padding: 192px 32px;
    }
`;

export const Title = styled.h1`
    display: flex;
    flex-direction: column;
    font-size: 42px;
    font-weight: 500;
    line-height: 1.2;
    letter-spacing: -2px;
    color: ${white};

    ${media(breakpoints.sm)} {
        font-size: 48px;
    }

    ${media(breakpoints.md)} {
        font-size: 56px;
    }

    ${media(breakpoints.lg)} {
        font-size: 56px;
    }

    ${media(breakpoints.xl)} {
        font-size: 64px;
    }
`;

export const Paragraph = styled.p`
    max-width: 50%;
    font-size: 18px;
    line-height: 1.6;
    color: ${white};
`;
