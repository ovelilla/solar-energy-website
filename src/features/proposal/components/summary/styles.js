import styled from "@emotion/styled";
import { white, slate } from "@shared/styles/colors";
import { breakpoints, media, topHeader } from "@shared/styles/sizes";

export const SummaryStyled = styled.div`
    display: flex;
    flex-direction: column;

    position: sticky;
    ${topHeader}
    min-width: 300px;
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
    margin-top: 48px;
    padding: 32px;
    box-shadow: rgb(0 0 0 / 12%) 0px 6px 16px;
    border-radius: 16px;
`;

export const Header = styled.div`
    display: flex;
    padding-bottom: 24px;
    border-bottom: 1px solid ${slate[200]};

    h2 {
        font-size: 24px;
        font-weight: 600;
        letter-spacing: -0.4px;
        line-height: 1.2;
    }
`;

export const Body = styled.div`
    display: flex;
    flex-direction: column;
    gap: 32px;
    padding-bottom: 24px;
    border-bottom: 1px solid ${slate[200]};
`;

export const Section = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
`;

export const Title = styled.h3`
    font-size: 18px;
    font-weight: 600;
    text-transform: uppercase;
`;

export const Text = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`;

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

export const Label = styled.span`
    font-weight: 300;
`;

export const LabelBold = styled.span`
    font-weight: 600;
`;

export const LabelPrice = styled.span`
    font-weight: 600;
    font-size: 20px;
`;

export const Value = styled.span`
    font-weight: 300;
`;

export const ValueBold = styled.span`
    font-weight: 600;
`;

export const ValuePrice = styled.span`
    font-weight: 600;
    font-size: 20px;
`;

export const Footer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    height: 48px;
    padding: 0 16px 0 24px;
    background-color: #28365e;
    font-weight: 500;
    color: ${white};
    letter-spacing: -0.8px;
    border-radius: 8px;

    ${media(breakpoints.sm)} {
        flex-grow: 0;
    }
`;
