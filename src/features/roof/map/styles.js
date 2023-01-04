import styled from "@emotion/styled";
import { white, slate } from "@shared/styles/colors";
import { shadows } from "@shared/styles/shadows";
import { breakpoints, media, header, section } from "@shared/styles/sizes";

export const MapStyled = styled.section`
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

export const MapContainer = styled.div`
    width: 100%;
    height: 100%;
    border-radius: 8px;
    touch-action: none;

    a[href^="http://maps.google.com/maps"]
    {
        display: none !important;
    }
    a[href^="https://maps.google.com/maps"]
    {
        display: none !important;
    }

    .gmnoprint a,
    .gmnoprint span,
    .gm-style-cc {
        display: none;
    }
    .gmnoprint div {
        background: none !important;
    }
`;

export const Marker = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -100%);

    svg {
        overflow: visible;
        width: 56px;
        height: 56px;
        color: #28365e;
        stroke: #ffffff;
        stroke-width: 2px;
        paint-order: stroke;
    }

    &::after {
        z-index: -1;
        content: "";
        position: absolute;
        top: 12px;
        left: 50%;
        transform: translateX(-50%);
        width: 32px;
        height: 32px;
        border-radius: 50%;
        background-color: ${white};
    }
`;
