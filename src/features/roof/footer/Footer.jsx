import { FooterStyled, Container } from "./styles";
import Pulse from "@features/ui/button/pulse";
import RightArrow from "@shared/icons/RightArrow";

const Footer = ({ onNext }) => {
    return (
        <FooterStyled>
            <Container>
                <Pulse onClick={onNext}>
                    <span>Continuar</span>
                    <RightArrow />
                </Pulse>
            </Container>
        </FooterStyled>
    );
};

export default Footer;
