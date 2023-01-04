import styled from "@emotion/styled";

import { gray } from "@shared/styles/colors";
import { breakpoints, media, logo, section } from "@shared/styles/sizes";

export const ProgressStyled = styled.div`
    position: relative;
    margin-top: 16px;
`;

export const Bar = styled.div`
    position: absolute;
    top: 20px;
    left: 15%;
    right: 15%;
    height: 1px;
    background-color: ${gray[300]};
`;

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const Step = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    /* width: calc(100% / 3); */

    /* &:first-of-type {
        align-items: flex-start;
    }

    &:last-of-type {
        align-items: flex-end;
    } */
`;

export const StepContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    /* position: relative; */
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
    border: 1px solid ${gray[300]};
    color: ${gray[400]};
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
    /* font-weight: 300; */
    color: ${gray[400]};

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
