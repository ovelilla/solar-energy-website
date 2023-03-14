import styled from "@emotion/styled";
import { white, gray, slate } from "@shared/styles/colors";
import { shadows } from "@shared/styles/shadows";
import { breakpoints, media, section } from "@shared/styles/sizes";

export const Slide = styled.div`
    display: flex;
    overflow: hidden;
`;

export const Step = styled.div`
    min-width: 100%;
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 2px;
    transition: transform 0.3s ease-in-out;
    overflow-y: auto;
    ${({ active }) => {
        if (active) {
            return `
                transform: translateX(0);
            `;
        }
        return `
            transform: translateX(-100%);
        `;
    }}
`;

export const Title = styled.h4`
    display: flex;
    align-items: center;
    gap: 16px;
    font-size: 20px;
    font-weight: 600;
`;

export const Text = styled.p`
    color: rgb(86, 98, 122);
    font-weight: 300;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 16px;

    ${media(breakpoints.sm)} {
        margin-top: 16px;
    }

    button[type="submit"] {
        margin-top: 24px;
    }
`;

export const Field = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
`;

export const Label = styled.label`
    font-weight: 600;
`;

export const Input = styled.input`
    width: 100%;
    height: 48px;
    margin-top: 4px;
    padding: 0 16px;
    color: rgb(86, 98, 122);
    outline: none;
    border: none;
    border-radius: 4px;
    box-shadow: ${({ error }) =>
        error ? "rgb(220 38 38) 0px 0px 0px 1px" : "rgb(215 220 245) 0px 0px 0px 1px"};

    &:focus {
        box-shadow: ${({ error }) =>
            error ? "rgb(220 38 38) 0px 0px 0px 2px" : "rgb(105 121 162) 0px 0px 0px 2px"};
    }

    &:hover:not(:focus) {
        box-shadow: ${({ error }) =>
            error ? "rgb(220 38 38) 0px 0px 0px 1px" : "rgb(105 121 162) 0px 0px 0px 1px"};
    }

    &::placeholder {
        color: rgb(122, 124, 163);
    }
`;

export const Error = styled.p`
    font-size: 13px;
    color: rgb(220 38 38);
`;

export const Notice = styled.p`
    margin-top: 16px;
    -webkit-font-smoothing: antialiased;
    font-size: 13px;
    color: rgb(122, 124, 163);
    letter-spacing: -0.2px;
`;

export const Back = styled.div`
    svg {
        color: ${slate[400]};
        width: 24px;
        height: 24px;
    }
`;
