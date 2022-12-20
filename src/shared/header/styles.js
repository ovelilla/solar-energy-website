import styled from "@emotion/styled";

import { white, transparent, slate } from "@shared/styles/colors";
import { shadows } from "@shared/styles/shadows";
import { breakpoints, media } from "@shared/styles/sizes";

export const HeaderStyled = styled.header`
    display: flex;
    justify-content: center;
    z-index: 200;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: ${(p) => (p.isScroll ? white : transparent)};
    box-shadow: ${(p) => (p.isScroll ? shadows.md : shadows.none)};
    transition: background-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
`;

export const Container = styled.div`
    display: flex;
    align-items: center;
    gap: 56px;
    width: 100%;
    max-width: ${breakpoints.xl}px;
    height: 72px;
    padding: 0 16px;

    ${media(breakpoints.sm)} {
        height: 80px;
        padding: 0 24px;
    }

    ${media(breakpoints.md)} {
        height: 88px;
        padding: 0 32px;
    }

    ${media(breakpoints.lg)} {
        height: 96px;
    }

    ${media(breakpoints.xl)} {
        height: 104px;
    }
`;

export const Logo = styled.img`
    width: 152px;

    ${media(breakpoints.sm)} {
        width: 160px;
    }

    ${media(breakpoints.md)} {
        width: 168px;
    }

    ${media(breakpoints.lg)} {
        width: 176px;
    }

    ${media(breakpoints.xl)} {
        width: 184px;
    }
`;

export const Button = styled.button`
    height: 48px;
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
