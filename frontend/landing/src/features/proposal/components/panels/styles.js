import styled from "@emotion/styled";
import { white, gray, slate } from "@shared/styles/colors";
import { shadows } from "@shared/styles/shadows";
import { breakpoints, media, section } from "@shared/styles/sizes";

export const PanelsStyled = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 32px;
    width: 100%;
    max-width: ${breakpoints.xl}px;
    padding: 24px;
    background-color: rgb(250, 250, 255);
    border-radius: 16px;

    ${media(breakpoints.md)} {
        gap: 48px;
        padding: 32px;
    }

    ${media(breakpoints.lg)} {
        margin-top: 48px;
    }

    ${media(breakpoints.xl)} {
        gap: 64px;
        padding: 40px;
    }
`;

export const Text = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;

    h2 {
        font-size: 20px;
        font-weight: 600;
        letter-spacing: -0.4px;
        line-height: 1.2;

        ${media(breakpoints.md)} {
            font-size: 24px;
            letter-spacing: -0.8px;
        }

        ${media(breakpoints.xl)} {
            font-size: 28px;
            letter-spacing: -1.2px;
        }
    }

    p {
        color: ${gray[500]};
    }
`;

export const Inputs = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;

    ${media(breakpoints.md)} {
        gap: 32px;
    }

    ${media(breakpoints.xl)} {
        gap: 40px;
    }
`;

export const InputNumber = styled.input`
    width: 160px;
    height: 48px;
    padding: 0 16px;
    outline: none;
    border: none;
    border-radius: 8px;
    box-shadow: rgb(215 220 245) 0px 0px 0px 1px;

    &:focus {
        box-shadow: 0px 0px 0px 2px #28365e;
    }

    &:hover:not(:focus) {
        box-shadow: 0px 0px 0px 1px #28365e;
    }
`;

export const Range = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
`;

export const InputRange = styled.input`
    appearance: none;
    width: 100%;
    height: 16px;
    background-color: #edefff;
    border-radius: 8px;

    &::-webkit-slider-thumb {
        appearance: none;
        width: 40px;
        height: 40px;
        background: #28365e;
        border: 6px solid #ffffff;
        border-radius: 50%;
        box-shadow: ${shadows.md};
        cursor: pointer;
    }

    &::-moz-range-thumb {
        width: 40px;
        height: 40px;
        background: #28365e;
        border: 6px solid #ffffff;
        border-radius: 50%;
        box-shadow: ${shadows.md};
        cursor: pointer;
    }
`;

export const AxisTitle = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${slate[500]};
    font-weight: 300;
`;

export const Type = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 24px;

    ${media(breakpoints.xl)} {
        gap: 48px;
    }
`;

export const TypeButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-grow: 1;
    gap: 24px;
    position: relative;
    padding: 24px;
    background-color: ${white};
    border: 4px solid #ffffff;
    border-radius: 8px;
    box-shadow: ${shadows.md};
    border: ${(p) => p.active && `4px solid #28365e`};

    ${media(breakpoints.md)} {
        padding: 32px;
    }

    div:first-of-type {
        display: flex;
        flex-direction: column;
        align-items: flex-start;

        ${media(breakpoints.md)} {
            gap: 4px;
        }
    }

    span:first-of-type {
        font-size: 18px;
        font-weight: 600;
        color: ${(p) => (p.active ? "#28365e" : gray[600])};
    }

    span:last-of-type {
        color: ${(p) => (p.active ? gray[500] : gray[400])};
    }
`;

export const TypeButtonIcon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 48px;
    height: 48px;
    background-color: ${(p) => (p.active ? "#e0e7fb;" : "rgb(250, 250, 255)")};
    border-radius: 50%;
    color: "#28365e";

    svg {
        width: 32px;
        height: 32px;
    }
`;
