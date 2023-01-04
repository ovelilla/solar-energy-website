import styled from "@emotion/styled";

import { slate } from "@shared/styles/colors";
import { breakpoints, media, logo, section } from "@shared/styles/sizes";

export const ProgressStyled = styled.div`
    position: relative;
    margin-top: 16px;
`;

export const Bar = styled.div`
    position: absolute;
    top: 20px;
    left: 64px;
    right: 64px;
    /* width: 80%; */
    height: 2px;
    background-color: ${slate[300]};
`;

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const Step = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Number = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
    width: 40px;
    height: 40px;
    background-color: #ffffff;
    border-radius: 50%;
    border: 2px solid ${slate[300]};
    color: ${slate[400]};
    font-size: 14px;
    font-weight: 500;

    &.active {
        color: #28365e;
        border-color: #28365e;
    }

    &.completed {
        color: #fff;
        background-color: #28365e;
        border-color: #28365e;
    }
`;

export const Text = styled.div`
    font-size: 12px;
    letter-spacing: -0.6px;
    color: ${slate[400]};

    ${media(breakpoints.sm)} {
        font-size: 14px;
    }

    &.active {
        color: #28365e;
    }

    &.completed {
        color: #28365e;
    }
`;
