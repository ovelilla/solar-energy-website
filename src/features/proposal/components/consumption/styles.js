import styled from "@emotion/styled";
import { white, gray, slate } from "@shared/styles/colors";
import { shadows } from "@shared/styles/shadows";
import { breakpoints, media, section } from "@shared/styles/sizes";

export const ConsumptionStyled = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 40px;
    background-color: rgb(250, 250, 255);
    border-radius: 16px;
    scroll-margin-top: 104px;

    ${media(breakpoints.sm)} {
        scroll-margin-top: 112px;
    }

    ${media(breakpoints.md)} {
        scroll-margin-top: 120px;
    }

    ${media(breakpoints.lg)} {
        scroll-margin-top: 128px;
    }

    ${media(breakpoints.xl)} {
        scroll-margin-top: 136px;
    }
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 32px;
    padding: 32px 24px;

    ${media(breakpoints.md)} {
        gap: 48px;
        padding: 32px;
    }

    ${media(breakpoints.xl)} {
        gap: 64px;
        padding: 40px;
    }
`;

export const Text = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;

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

export const NumberContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
`;

export const InputNumber = styled.input`
    width: 120px;
    height: 48px;
    padding: 0 16px;
    outline: none;
    border: none;
    border-radius: 8px;
    box-shadow: rgb(215 220 245) 0px 0px 0px 1px;

    ${media(breakpoints.sm)} {
        width: 160px;
    }

    &:focus {
        box-shadow: 0px 0px 0px 2px #28365e;
    }

    &:hover:not(:focus) {
        box-shadow: 0px 0px 0px 1px #28365e;
    }
`;

export const Number = styled.div`
    display: flex;
    align-items: baseline;
    gap: 8px;
    font-size: 32px;
    font-weight: 700;

    span {
        font-size: 16px;
        font-weight: 400;
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
