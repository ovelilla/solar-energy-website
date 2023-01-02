import { Link } from "react-router-dom";

import { SidebarStyled, Container } from "./styles";

const Sidebar = ({ sidebar, setSidebar }) => {
    const handleAnimationEnd = () => {
        if (sidebar.isClosing) {
            setSidebar({
                ...sidebar,
                isOpen: false,
                isClosing: false,
                isAnimated: false,
            });
        } else {
            setSidebar({
                ...sidebar,
                isAnimated: false,
            });
        }
    };

    const handleClick = () => {
        if (sidebar.isAnimated) {
            return;
        }

        setSidebar({
            ...sidebar,
            isClosing: true,
            isAnimated: true,
        });
    };

    return (
        <SidebarStyled
            isClosing={sidebar.isClosing}
            onAnimationEnd={handleAnimationEnd}
            onClick={handleClick}
        >
            <Container
                isClosing={sidebar.isClosing}
                onClick={(e) => e.stopPropagation()}
            >
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
            </Container>
        </SidebarStyled>
    );
};

export default Sidebar;
