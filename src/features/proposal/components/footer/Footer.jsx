import { Link } from "react-router-dom";
import { FooterStyled, Container, Logo } from "./styles";

const Footer = () => {
    return (
        <FooterStyled>
            <Container>
                <div>
                    <Link to="/">
                        <Logo src="/img/libergy-logo-white.svg" alt="Logo Libergy" />
                    </Link>
                </div>
                <div>
                    <Link to="/">Política de privacidad</Link>
                    <Link to="/">Términos y condiciones</Link>
                    <Link to="/">© 2023 Libergy todos los derechos reservados</Link>
                </div>
            </Container>
        </FooterStyled>
    );
};

export default Footer;
