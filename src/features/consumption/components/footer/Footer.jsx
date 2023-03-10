import { useNavigate } from "react-router-dom";
import useProposal from "@hooks/useProposal";
import { FooterStyled, Container, NextButton, PrevButton } from "./styles";

const Footer = () => {
    const navigate = useNavigate();
    const { proposal } = useProposal();

    const handlePrev = () => {
        navigate("/tejado/" + proposal.id);
    };

    const handleNext = () => {
        navigate("/propuesta/" + proposal.id);
    };

    return (
        <FooterStyled>
            <Container>
                <PrevButton type="button" onClick={handlePrev}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                    >
                        <path
                            fillRule="evenodd"
                            d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"
                        />
                    </svg>
                    <span>Volver</span>
                </PrevButton>
                
                <NextButton type="button" onClick={handleNext}>
                    <span>Continuar</span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                    >
                        <path
                            fillRule="evenodd"
                            d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
                        />
                    </svg>
                </NextButton>
            </Container>
        </FooterStyled>
    );
};

export default Footer;
