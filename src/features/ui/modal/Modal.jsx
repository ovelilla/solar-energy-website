import { useRef } from "react";
import { CSSTransition } from "react-transition-group";
import { Overlay, Container, Close } from "./styles";

import IconButton from "@features/ui/iconbutton";
import XLg from "@shared/icons/XLg";

const Modal = ({ children, open, onClose }) => {
    const overlayRef = useRef(null);
    const containerRef = useRef(null);

    const handleEnter = () => {
        document.body.style.overflow = "hidden";
        document.body.style.paddingRight = "17px";
    };

    const handleExited = () => {
        document.body.removeAttribute("style");
    };

    return (
        <CSSTransition
            nodeRef={overlayRef}
            in={open}
            timeout={300}
            classNames={"dialog"}
            mountOnEnter={true}
            unmountOnExit={true}
            onEnter={handleEnter}
            onExited={handleExited}
        >
            <Overlay ref={overlayRef} onClick={onClose}>
                <CSSTransition
                    nodeRef={containerRef}
                    in={open}
                    timeout={300}
                    classNames={"dialog"}
                    appear={true}
                >
                    <Container ref={containerRef} onClick={(e) => e.stopPropagation()}>
                        <Close>
                            <IconButton onClick={onClose}>
                                <XLg />
                            </IconButton>
                        </Close>

                        {children}
                    </Container>
                </CSSTransition>
            </Overlay>
        </CSSTransition>
    );
};

export default Modal;
