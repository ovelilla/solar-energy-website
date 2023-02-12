import { useState, useRef, useEffect } from "react";
import ArrowDown from "@shared/icons/ArrowDown";
import {
    FinancingStyled,
    Button,
    ButtonContainer,
    Collapse,
    Container,
    FeeContainer,
    FeeButton,
    Fee,
    Time,
    Line,
    InfoButton,
} from "./styles";
import FinancingModal from "@features/proposal/components/payment/financing-modal";
import Switch from "@features/proposal/components/panels/switch";
import useProposal from "@hooks/useProposal";
import useCalculator from "@hooks/useCalculator";

const Financing = ({ title }) => {
    const { proposal, setProposal } = useProposal();
    const { change, setChange, setUpdate } = useCalculator();

    const open = proposal.payment.method === "financing";
    const selectedFee = proposal.payment.financing.months === 60 || !proposal.payment.financing.months ? 0 : 1;

    const [openFinancing, setOpenFinancing] = useState(open);
    const [openModalFinancing, setOpenModalFinancing] = useState(false);
    const [height, setHeight] = useState(0);
    const [selected, setSelected] = useState(selectedFee);

    const ref = useRef(null);

    useEffect(() => {
        setHeight(proposal.payment.method === "financing" ? ref.current.scrollHeight : 0);
    }, []);

    const handleClickButton = () => {
        setOpenFinancing(!openFinancing);
        setHeight(openFinancing ? 0 : ref.current.scrollHeight);

        setChange(!change);
        setProposal({
            ...proposal,
            payment: {
                ...proposal.payment,
                method: openFinancing ? "cash" : "financing",
            },
        });
        setUpdate(true);
    };

    const handleClickFee = (index) => {
        setSelected(index);

        setChange(!change);
        setProposal({
            ...proposal,
            payment: {
                ...proposal.payment,
                financing: {
                    ...proposal.payment.financing,
                    months: index === 0 ? 60 : 120,
                },
            },
        });
        setUpdate(true);
    };

    return (
        <>
            {openModalFinancing && (
                <FinancingModal
                    open={openModalFinancing}
                    onClose={() => setOpenModalFinancing(false)}
                />
            )}

            <FinancingStyled>
                <Button onClick={handleClickButton} open={openFinancing}>
                    <ButtonContainer>
                        <Switch checked={openFinancing} />
                        <span>{title}</span>
                    </ButtonContainer>

                    <ArrowDown />
                </Button>

                <Collapse ref={ref} collapseHeight={height}>
                    <Container>
                        <FeeContainer>
                            <FeeButton onClick={() => handleClickFee(0)}>
                                <Fee active={selected === 0}>
                                    {proposal.payment.financing.monthlyFee60.toFixed(2)}
                                    <span>
                                        €<span>/mes</span>
                                    </span>
                                </Fee>
                                <Time active={selected === 0}>60 meses</Time>
                                <Line active={selected === 0} />
                            </FeeButton>
                            <FeeButton onClick={() => handleClickFee(1)}>
                                <Fee active={selected === 1}>
                                    {proposal.payment.financing.monthlyFee120.toFixed(2)}
                                    <span>
                                        €<span>/mes</span>
                                    </span>
                                </Fee>
                                <Time active={selected === 1}>120 meses</Time>
                                <Line active={selected === 1} />
                            </FeeButton>
                        </FeeContainer>

                        <InfoButton onClick={() => setOpenModalFinancing(true)}>
                            <span>Condiciones de financiación</span>
                        </InfoButton>
                    </Container>
                </Collapse>
            </FinancingStyled>
        </>
    );
};

export default Financing;
