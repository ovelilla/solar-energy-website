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
    padding: 0 2px 24px 2px;

    ${media(breakpoints.md)} {
        gap: 24px;
        padding-bottom: 32px;
    }

    ${media(breakpoints.xl)} {
        gap: 32px;
        padding-bottom: 40px;
    }
`;

export const Item = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
`;

export const InfoButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background-color: #e0e7fb;

    svg {
        width: 24px;
        height: 24px;
    }
`;
