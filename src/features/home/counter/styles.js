import { Link } from "react-router-dom";
import CountUp from "react-countup";
import styled from "@emotion/styled";

import { white, slate } from "@shared/styles/colors";
import { breakpoints, media, section, container } from "@shared/styles/sizes";

export const CounterStyled = styled.section`
    display: flex;
    justify-content: center;
    position: relative;
    width: 100%;
    ${section}
    background-color: #141b2f;
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: ${breakpoints.xl}px;
    ${container}
`;

export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 72px;

    ${media(breakpoints.md)} {
        grid-template-columns: repeat(2, 1fr);
        gap: 96px;
    }

    ${media(breakpoints.lg)} {
        grid-template-columns: repeat(3, 1fr);
    }
`;

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const StyledCountUp = styled(CountUp)`
    font-size: 40px;
    font-weight: 700;
    color: #fff;

    ${media(breakpoints.sm)} {
        font-size: 48px;
    }

    ${media(breakpoints.md)} {
        font-size: 56px;
    }
`;

export const Text = styled.span`
    font-size: 18px;
    font-weight: 500;
    color: ${slate[400]};
    letter-spacing: -0.8px;

    ${media(breakpoints.sm)} {
        font-size: 20px;
    }

    ${media(breakpoints.md)} {
        font-size: 22px;
    }
`;
