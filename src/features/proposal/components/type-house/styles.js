import styled from "@emotion/styled";
import { white, gray, slate } from "@shared/styles/colors";
import { shadows } from "@shared/styles/shadows";
import { breakpoints, media, section } from "@shared/styles/sizes";

export const TypeHouseStyled = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
    width: 100%;
    padding: 24px;
    background-color: rgb(250, 250, 255);
    border-radius: 16px;

    ${media(breakpoints.sm)} {
        gap: 32px;
    }

    ${media(breakpoints.md)} {
        gap: 40px;
        padding: 24px;
    }

    ${media(breakpoints.lg)} {
        gap: 48px;
        margin-top: 48px;
        padding: 40px;
    }
`;

export const Text = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
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

export const Subtitle = styled.p`
    color: ${gray[500]};
`;

export const Grid = styled.div`
    display: flex;
    gap: 16px;

    ${media(breakpoints.md)} {
        gap: 24px;
    }

    ${media(breakpoints.xl)} {
        gap: 48px;
    }
`;

export const Card = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: calc(100% / 3);
    background-color: ${white};
    border: 2px solid ${(p) => (p.selected ? "#28365e" : "#ffffff")};
    border-radius: 8px;
    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 10%), 0 2px 4px -2px rgb(0 0 0 / 10%);

    &::after {
        content: "";
        display: block;
        padding-bottom: 72%;
    }

    svg {
        color: ${(p) => (p.selected ? "#28365e" : gray[400])};
        width: 32px;
        height: 32px;

        ${media(breakpoints.sm)} {
            width: 40px;
            height: 40px;
        }
    }
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
`;

export const Type = styled.span`
    color: ${(p) => (p.selected ? "#28365e" : gray[400])};
`;
