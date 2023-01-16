import { Link } from "react-router-dom";

import { NavbarStyled } from "./styles";

const HeaderNav = ({ isScroll }) => {
    return (
        <NavbarStyled isScroll={isScroll}>
            <ul>
                <li>
                    <Link to="/">Nosotros</Link>
                </li>
                <li>
                    <Link to="/">Blog</Link>
                </li>
                <li>
                    <Link to="/">Contacto</Link>
                </li>
            </ul>
        </NavbarStyled>
    );
};

export default HeaderNav;
