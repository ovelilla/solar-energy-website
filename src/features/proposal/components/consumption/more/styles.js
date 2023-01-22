import styled from "@emotion/styled";
import { media, breakpoints } from "@shared/styles/sizes";
import { gray, slate, white } from "@shared/styles/colors";

export const MoreStyled = styled.div`
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
    gap: 16px;
    padding: 32px 0;

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

export const Collapse = styled.div`
    overflow: ${(p) => (p.open && p.transitioned ? "visible" : "hidden")};
    height: ${(p) => `${p.collapseHeight}px`};
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

export const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 16px;

    ${media(breakpoints.sm)} {
        grid-template-columns: 1fr 1fr;
        gap: 24px;
    }
`;

export const Field = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
`;

export const Label = styled.label`
    font-weight: 500;
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

export const selectStyles = (error) => ({
    control: (provided, state) => ({
        ...provided,
        height: "48px",
        marginTop: "4px",
        border: "none",
        outline: "none",
        borderRadius: "4px",
        boxShadow:
        error.length > 0
                ? state.isFocused
                    ? "rgb(220 38 38) 0px 0px 0px 2px"
                    : "rgb(220 38 38) 0px 0px 0px 1px"
                : state.isFocused
                ? "rgb(105 121 162) 0px 0px 0px 2px"
                : "rgb(215 220 245) 0px 0px 0px 1px",

        "&:hover": {
            boxShadow:
            error.length > 0
                    ? !state.isFocused && "rgb(220 38 38) 0px 0px 0px 1px"
                    : !state.isFocused && "rgb(105 121 162) 0px 0px 0px 1px",
        },
    }),
    valueContainer: (provided, state) => ({
        ...provided,
        padding: "0 16px",
    }),
    singleValue: (provided, state) => ({
        ...provided,
        color: "#56627a",
        margin: "0",
    }),
    input: (provided, state) => ({
        ...provided,
        margin: "0",
    }),
    groupHeading: (provided, state) => ({
        ...provided,
        display: "flex",
        alignItems: "center",
        height: "40px",
        padding: "0 16px",
        fontSize: "14px",
    }),
    option: (provided, state) => ({
        ...provided,
        display: "flex",
        alignItems: "center",
        height: "48px",
        padding: "0 16px",
        color: "#56627a",
        backgroundColor: state.isSelected ? "rgb(245, 246, 255);" : "#fff",
        "&:hover": {
            backgroundColor: !state.isSelected && "rgb(250, 250, 255);",
        },
    }),
});
