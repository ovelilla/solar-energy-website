import styled from "@emotion/styled";

import { white, transparent } from "@shared/styles/colors";
import { shadows } from "@shared/styles/shadows";
import { breakpoints, media, header, section } from "@shared/styles/sizes";

export const HeaderStyled = styled.header`
    display: flex;
    justify-content: center;
    z-index: 600;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    ${section}
    background-color: ${(p) => {
        if (p.isScroll || (p.sidebar.isOpen && !p.sidebar.isClosing)) {
            return white;
        } else {
            return transparent;
        }
    }};
    box-shadow: ${(p) => {
        if (p.isScroll || (p.sidebar.isOpen && !p.sidebar.isClosing)) {
            return shadows.md;
        } else {
            return shadows.none;
        }
    }};
    transition: background-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
`;

export const Container = styled.div`
    display: flex;
    align-items: center;
    gap: 56px;
    width: 100%;
    max-width: ${breakpoints.xl}px;

    ${header}
    
`;

export const Logo = styled.img`
    width: 132px;

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

export const Hamburguer = styled.button`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 6px;
    width: 40px;
    height: 40px;
    margin-left: auto;
    -webkit-tap-highlight-color: transparent;

    ${media(breakpoints.md)} {
        gap: 7px;
    }

    ${media(breakpoints.lg)} {
        display: none;
    }

    ${(p) => {
        if (p.sidebar.isOpen && !p.sidebar.isClosing) {
            return `
                span:nth-of-type(1) {
                    transform: translateY(0) rotate(45deg);
                }
        
                span:nth-of-type(2) {
                    transform: translateX(-10px);
                    opacity: 0;
                }
        
                span:nth-of-type(3) {
                    transform: translateY(1px) rotate(-45deg);
                }
            `;
        }
    }}

    span {
        width: 30px;
        height: 4px;
        background-color: #141b2f;
        border-radius: 4px;
        transform-origin: left;
        transition: transform, opacity, 0.3s ease;

        ${media(breakpoints.md)} {
            width: 32px;
        }
    }
`;
