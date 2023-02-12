import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useProposal from "@hooks/useProposal";
import { FooterStyled, Container } from "./styles";
import Pulse from "@features/ui/button/pulse";
import RightArrow from "@shared/icons/RightArrow";

const Footer = () => {
    const [loading, setLoading] = useState(false);
    const [read, setRead] = useState(false);

    const { proposal, readPvgis, updateProposal } = useProposal();

    const navigate = useNavigate();

    const handleClick = async () => {
        setLoading(true);
        await readPvgis();
        setRead(true);
    };

    const handleUpdate = async () => {
        await updateProposal();
        setLoading(false);
        navigate("/propuesta/" + proposal.uuid);
    };

    useEffect(() => {
        if (read) {
            handleUpdate();
        }
    }, [proposal]);

    return (
        <FooterStyled>
            <Container>
                <Pulse onClick={handleClick} loading={loading}>
                    <span>Continuar</span>
                    <RightArrow />
                </Pulse>
            </Container>
        </FooterStyled>
    );
};

export default Footer;
