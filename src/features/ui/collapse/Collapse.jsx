import { useState, useRef, useEffect } from "react";
import styled from "@emotion/styled";

const CollapseStyled = styled.div`
    overflow: hidden;
    height: ${(p) => p.height};
    transition: height 0.3s ease-in-out;
`;

const Collapse = ({ children, open }) => {
    const [height, setHeight] = useState(0);
    const ref = useRef(null);

    useEffect(() => {
        if (ref.current) {
            setHeight(open ? bodyRef.current.scrollHeight : 0);
        }
    }, [ref, open]);

    const handleTransitionEnd = () => {
        if (open) {
            setHeight(-1);
        }
    };

    return (
        <CollapseStyled ref={ref} height={height} onTransitionEnd={handleTransitionEnd}>
            {children}
        </CollapseStyled>
    );
};

export default Collapse;
