import styled from "@emotion/styled";
import { white, gray, slate } from "@shared/styles/colors";
import { shadows } from "@shared/styles/shadows";
import { breakpoints, media, section } from "@shared/styles/sizes";

export const Overlay = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 800;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 0;
    background-color: rgba(64, 77, 105, 0.25);

    ${media(breakpoints.sm)} {
        padding: 16px;
    }

    &.dialog-enter {
        opacity: 0;
    }

    &.dialog-enter-active {
        opacity: 1;
        transition: opacity 0.3s ease;
    }

    &.dialog-enter-done {
        opacity: 1;
    }

    &.dialog-exit {
        opacity: 1;
    }

    &.dialog-exit-active {
        opacity: 0;
        transition: opacity 0.3s ease;
    }

    &.dialog-exit-done {
        opacity: 0;
    }
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    position: relative;
    width: 100%;
    max-width: 640px;
    max-height: 100%;
    margin: auto;
    padding: 16px;
    background-color: ${white};
    box-shadow: ${shadows.md};

    ${media(breakpoints.sm)} {
        padding: 24px;
        border-radius: 8px;
    }

    ${media(breakpoints.md)} {
        padding: 32px;
    }

    &.dialog-appear {
        transform: translateY(-16px);
    }

    &.dialog-appear-active {
        transform: translateY(0);
        transition: transform 0.3s ease;
    }

    &.dialog-appear-done {
        transform: translateY(0);
    }

    &.dialog-exit {
        transform: translateY(0);
    }

    &.dialog-exit-active {
        transform: translateY(-16px);
        transition: transform 0.3s ease;
    }

    &.dialog-exit-done {
        transform: translateY(-16px);
    }
`;

export const Close = styled.div`
    z-index: 100;
    position: absolute;
    top: 8px;
    right: 8px;

    svg {
        color: ${slate[400]};
        width: 24px;
        height: 24px;
    }
`;
