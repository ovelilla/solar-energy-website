import styled from "@emotion/styled";

import { gray, slate, white } from "@shared/styles/colors";
import { breakpoints, media, section, container } from "@shared/styles/sizes";
import { shadows } from "@shared/styles/shadows";

import { Swiper, SwiperSlide } from "swiper/react";

export const StepsStyled = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    margin-top: 24px;
    ${section}
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 32px;
    width: 100%;
    max-width: ${breakpoints.xl}px;
    ${container}

    ${media(breakpoints.md)} {
        gap: 40px;
    }

    ${media(breakpoints.xl)} {
        gap: 48px;
    }

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

export const Info = styled(SwiperSlide)`
    padding-bottom: 32px;
`;

export const SlideContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
    position: relative;
    padding: 32px;
    background-color: rgb(250, 250, 255);
    border-radius: 16px;

    &:before {
        content: "";
        position: absolute;
        top: 100%;
        left: 50%;
        height: 0;
        width: 0;
        transform: translateX(-50%);
        height: 0;
        width: 0;
        border-style: solid;
        border-color: rgb(250, 250, 255) transparent transparent transparent;
        border-width: 32px;
    }
`;

export const Step = styled(SwiperSlide)`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;

    &:first-of-type {
        &::after {
            display: none;
        }
    }

    &::after {
        position: absolute;
        content: "";
        top: 24px;
        left: 0px;
        height: 0;
        width: 70%;
        border-top: 2px solid rgb(234 235 249);
        transform: translateX(-50%);
    }
`;

export const Circle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background-color: #28365e;
    color: ${white};
    font-size: 16px;
    font-weight: 600;
`;
