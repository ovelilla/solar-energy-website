import styled from "@emotion/styled";
import { media, breakpoints } from "@shared/styles/sizes";
import { gray, slate, white } from "@shared/styles/colors";

export const FinancingStyled = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 24px;
    background-color: rgb(245, 246, 255);
    border-bottom-left-radius: 16px;
    border-bottom-right-radius: 16px;

    ${media(breakpoints.md)} {
        padding: 0 32px;
    }

    ${media(breakpoints.xl)} {
        padding: 0 40px;
    }
`;

export const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-shrink: 0;
    gap: 8px;
    padding: 32px 0;

    ${media(breakpoints.sm)} {
        gap: 16px;
    }

    span {
        font-size: 16px;
        font-weight: 500;
        text-align: left;

        ${media(breakpoints.md)} {
            font-weight: 600;
            font-size: 18px;
        }
    }

    svg {
        flex-shrink: 0;
        transform: ${(p) => (p.open ? "rotate(90deg)" : "rotate(0deg)")};
        transition: transform 0.3s ease-in-out;
        width: 16px;
        height: 16px;

        ${media(breakpoints.md)} {
            width: 24px;
            height: 24px;
        }
    }
`;

export const ButtonContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;
`;

export const Collapse = styled.div`
    overflow: hidden;
    height: ${(p) => (p.collapseHeight === -1 ? "auto" : `${p.collapseHeight}px`)};
    transition: height 0.2s ease-in-out;
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 0 0 32px 0;

    ${media(breakpoints.md)} {
        gap: 24px;
        padding-bottom: 40px;
    }

    ${media(breakpoints.xl)} {
        gap: 32px;
    }
`;

export const FeeContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 100%;

    ${media(breakpoints.sm)} {
        flex-direction: row;
        gap: 32px;
    }
`;

export const FeeButton = styled.button`
    display: flex;
    flex-direction: column;
    color: #28365e;
`;

export const FeeC = styled.button`
    display: flex;
    flex-direction: column;
    color: #28365e;
`;

export const Fee = styled.div`
    display: flex;
    align-items: baseline;
    gap: 4px;
    font-size: 32px;
    font-weight: 700;
    letter-spacing: -0.4px;
    color: ${(p) => (p.active ? "#28365e" : gray[300])};
    line-height: 1.4;

    span {
        font-size: 16px;
        letter-spacing: 0;
        span {
            font-weight: 300;
        }
    }
`;

export const Time = styled.div`
    display: flex;
    color: ${(p) => (p.active ? "#28365e" : gray[300])};
`;

export const Line = styled.div`
    display: flex;
    height: 4px;
    width: 100%;
    margin-top: 16px;
    border-radius: 4px;
    background-color: ${(p) => (p.active ? "#28365e" : "transparent")};
`;

export const InfoButton = styled.button`
    display: flex;
    align-items: center;
    gap: 16px;

    span:hover {
        text-decoration: underline;
    }

    &::before {
        content: "?";
        display: flex;
        justify-content: center;
        align-items: center;
        width: 48px;
        height: 48px;
        background-color: #e0e7fb;
        border-radius: 50%;
        font-size: 24px;
        font-weight: 600;
    }
`;
