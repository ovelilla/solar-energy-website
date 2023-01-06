import styled from "@emotion/styled";
import { white, gray, slate } from "@shared/styles/colors";
import { shadows } from "@shared/styles/shadows";
import { breakpoints, media, section } from "@shared/styles/sizes";

export const NumberStyled = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    ${section}
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

export const Text = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`;

export const Summary = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 24px;
    padding: 24px;
    background-color: rgb(245, 246, 255);
    border-radius: 8px;

    div {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 8px;
    }

    span:first-of-type {
        font-size: 14px;
        font-weight: 500;
        text-transform: uppercase;
        color: ${slate[500]};
    }

    span:last-of-type {
        font-size: 24px;
        font-weight: 600;
    }
`;

export const Line = styled.div`
    width: 1px;
    height: 48px;
    background-color: ${slate[200]};

    ${media(breakpoints.md)} {
        height: 48px;
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
