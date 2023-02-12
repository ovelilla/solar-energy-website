import styled from "@emotion/styled";
import { white, gray, slate } from "@shared/styles/colors";
import { shadows } from "@shared/styles/shadows";
import { breakpoints, media, section } from "@shared/styles/sizes";

export const MonthlyEnergyStyled = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
    width: 100%;
`;

export const Title = styled.h2`
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
`;

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`;

export const Subtitle = styled.p`
    font-weight: 600;
    ${media(breakpoints.md)} {
        font-size: 18px;
    }
`;

export const Text = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    color: ${gray[500]};
`;

export const Container = styled.div`
    display: grid;
    grid-template-columns: 40px 1fr;
    grid-template-rows: 1fr 40px;
    margin-top: 16px;

    ${media(breakpoints.md)} {
        grid-template-columns: 56px 1fr;
        grid-template-rows: 1fr 56px;
        margin-top: 24px;
    }
`;

export const Chart = styled.div`
    grid-column: 2 / 3;
    grid-row: 1 / 2;
    position: relative;
    display: flex;
    align-items: flex-end;
    gap: 8px;
    width: 100%;
    height: 280px;

    ${media(breakpoints.sm)} {
        gap: 16px;
    }

    ${media(breakpoints.md)} {
        gap: 24px;
    }
`;

export const Column = styled.div`
    z-index: 1;
    display: flex;
    flex-direction: column;
    gap: 4px;
    width: calc(100% / 12);
    background-color: #d1dbf9;
    border-radius: 8px;
    transition: height 3s ease-in-out;
    height: ${(p) => (p.isVisible ? p.height + "%" : "0")};
`;

export const Lines = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const Line = styled.div`
    width: 100%;
    height: 1px;
    background-color: ${slate[200]};
`;

export const AxisX = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    grid-column: 2 / 3;
    grid-row: 2 / 3;
    color: ${gray[400]};
    font-size: 14px;

    span {
        display: flex;
        span {
            display: none;
            ${media(breakpoints.sm)} {
                display: block;
            }
        }
    }
`;

export const AxisY = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
    grid-column: 1 / 2;
    grid-row: 1 / 2;
    padding-right: 8px;
    color: ${gray[400]};
    font-size: 14px;

    ${media(breakpoints.md)} {
        padding-right: 16px;
    }
`;
