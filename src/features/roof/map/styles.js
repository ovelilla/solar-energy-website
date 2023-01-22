import styled from "@emotion/styled";
import { white } from "@shared/styles/colors";

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
        top: 8px;
        left: 50%;
        transform: translateX(-50%);
        width: 24px;
        height: 24px;
        border-radius: 50%;
        background-color: ${white};
    }
`;
