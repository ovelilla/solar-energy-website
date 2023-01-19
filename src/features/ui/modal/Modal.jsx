import { useEffect } from "react";
import { ModalStyled, Container, Close } from "./styles";

import IconButton from "@features/ui/iconbutton";
import XLg from "@shared/icons/XLg";

const Modal = ({ children, open, onClose }) => {
    useEffect(() => {
        document.body.style.overflow = "hidden";

        return () => {
            document.body.style.overflow = "auto";
        };
    }, []);

    return (
        <ModalStyled onClick={onClose}>
            <Container onClick={(e) => e.stopPropagation()}>
                <Close>
                    <IconButton onClick={onClose}>
                        <XLg />
                    </IconButton>
                </Close>

                {children}
            </Container>
        </ModalStyled>
    );
};

export default Modal;
