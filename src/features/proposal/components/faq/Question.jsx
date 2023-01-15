import { useState, useRef, useEffect } from "react";
import styled from "@emotion/styled";
import { media, breakpoints } from "@shared/styles/sizes";

export const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-shrink: 0;
    gap: 16px;
    padding: 16px 0;

    h3 {
        font-size: 16px;
        font-weight: 600;
        text-align: left;

        ${media(breakpoints.md)} {
            font-size: 18px;
        }
    }

    svg {
        transform: ${(p) => (p.open ? "rotate(90deg)" : "rotate(0deg)")};
        transition: transform 0.3s ease-in-out;
    }
`;

const Collapse = styled.div`
    overflow: hidden;
    height: ${(p) => (p.collapseHeight === -1 ? "auto" : `${p.collapseHeight}px`)};
    transition: height 0.2s ease-in-out;
`;

const Question = ({ children, title, open, onClick }) => {
    const [height, setHeight] = useState(0);
    const ref = useRef(null);

    useEffect(() => {
        if (ref.current) {
            setHeight(open ? ref.current.scrollHeight : 0);
        }
    }, [ref, open]);

    return (
        <>
            <Button onClick={onClick} open={open}>
                <h3> {title} </h3>

                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeWidth="2.8"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    />
                </svg>
            </Button>
            <Collapse ref={ref} collapseHeight={height}>
                {children}
            </Collapse>
        </>
    );
};

export default Question;
