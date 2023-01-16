import styled from "@emotion/styled";
import { breakpoints, media } from "@shared/styles/sizes";

export const SidebarStyled = styled.div`
    z-index: 400;
    position: fixed;
    top: 72px;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0 0 0 / 0.3);
    animation: fadeIn 0.3s ease forwards;
    ${(p) => {
        if (p.isClosing) {
            return "animation: fadeOut 0.3s ease forwards;";
        }
    }}

    ${media(breakpoints.sm)} {
        top: 80px;
    }

    ${media(breakpoints.md)} {
        top: 88px;
    }

    @keyframes fadeIn {
        from {
            opacity: 0;
        }

        to {
            opacity: 1;
        }
    }

    @keyframes fadeOut {
        from {
            opacity: 1;
        }

        to {
            opacity: 0;
        }
    }
`;

export const Container = styled.div`
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    gap: 48px;
    position: absolute;
    left: -272px;
    width: 272px;
    height: calc(100% - 72px);
    padding: 16px;
    background-color: #ffffff;
    animation: slideIn 0.3s ease forwards;
    ${(p) => {
        if (p.isClosing) {
            return "animation: slideOut 0.3s ease forwards;";
        }
    }}

    ${media(breakpoints.sm)} {
        gap: 56px;
        left: -288px;
        width: 288px;
        height: calc(100% - 80px);
    }

    ${media(breakpoints.md)} {
        gap: 64px;
        left: -304px;
        width: 304px;
        height: calc(100% - 88px);
    }

    @keyframes slideIn {
        from {
            transform: translateX(0);
        }

        to {
            transform: translateX(100%);
        }
    }

    @keyframes slideOut {
        from {
            transform: translateX(100%);
        }

        to {
            transform: translateX(0);
        }
    }

    ul {
        display: flex;
        flex-direction: column;
        gap: 8px;
        padding: 0;
        list-style: none;
    }

    a {
        display: flex;
        align-items: center;
        height: 48px;
        padding: 0 16px;
        font-weight: 500;
        color: #141b2f;
        letter-spacing: -0.8px;
        border-radius: 8px;

        &:hover {
            background-color: #f0f3fd;
        }
    }
`;
