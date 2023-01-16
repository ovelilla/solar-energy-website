import { Link } from "react-router-dom";

import { HederStyled, Container, Logo } from "./styles";

const Header = () => {
    return (
        <HederStyled>
            <Container>
                <Link to="/">
                    <Logo src="/img/libergy-logo.svg" alt="Logo Libergy" />
                </Link>
            </Container>
        </HederStyled>
    );
};

export default Header;
