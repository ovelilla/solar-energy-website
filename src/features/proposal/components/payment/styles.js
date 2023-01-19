import styled from "@emotion/styled";
import { white, gray, slate } from "@shared/styles/colors";
import { shadows } from "@shared/styles/shadows";
import { breakpoints, media, section } from "@shared/styles/sizes";

export const PaymentStyled = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
`;

export const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 32px;
    width: 100%;

    ${media(breakpoints.xl)} {
        grid-template-columns: 46fr 54fr;
        gap: 48px;
    }
`;

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    gap: 32px;
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

export const OptionsContainer = styled.div`
    display: flex;
    gap: 16px;
`;

export const Bar = styled.div`
    flex: 0 0 8px;
    position: relative;
    background-color: #e4e6ee;
    border-radius: 8px;
`;

export const Pointer = styled.div`
    position: absolute;
    top: ${(p) => (p.selectedOption === 0 ? 0 : "50%")};
    left: 0;
    width: 8px;
    height: 50%;
    background-color: #28365e;
    border-radius: 8px;
    transition: top 0.2s cubic-bezier(0.4, 0, 0.2, 1);
`;

export const Options = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    position: relative;
`;

export const Option = styled.button`
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 24px;

    p:first-of-type {
        font-size: 16px;
        font-weight: 600;

        ${media(breakpoints.md)} {
            font-size: 18px;
        }
    }

    p:last-of-type {
        color: ${gray[500]};
        text-align: left;
    }
`;

export const OptionBackground = styled.div`
    z-index: -1;
    position: absolute;
    top: ${(p) => (p.selectedOption === 0 ? 0 : "50%")};
    left: 0;
    width: 100%;
    height: 50%;
    background-color: #f0f3fd;
    border-radius: 8px;
    transition: top 0.2s cubic-bezier(0.4, 0, 0.2, 1);
`;
