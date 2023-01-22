import { useState, useRef } from "react";
import ArrowDown from "@shared/icons/ArrowDown";
import {
    FinancingStyled,
    Button,
    ButtonContainer,
    Collapse,
    Container,
    Item,
    InfoButton,
} from "./styles";
import FinancingModal from "@features/proposal/components/payment/financing-modal";
import Checkbox from "@features/proposal/components/payment/checkbox";
import Switch from "@features/proposal/components/panels/switch";
import InfoIcon from "@shared/icons/Info";

const Financing = ({ title }) => {
    const [openFinancing, setOpenFinancing] = useState(false);
    const [openModalFinancing, setOpenModalFinancing] = useState(false);
    const [height, setHeight] = useState(0);
    const [selected, setSelected] = useState(1);

    const ref = useRef(null);

    return (
        <>
            {openModalFinancing && (
                <FinancingModal
                    open={openModalFinancing}
                    onClose={() => setOpenModalFinancing(false)}
                />
            )}

            <FinancingStyled>
                <Button
                    onClick={() => {
                        setOpenFinancing(!openFinancing);
                        setHeight(openFinancing ? 0 : ref.current.scrollHeight);
                        setSelected(1);
                    }}
                    open={openFinancing}
                >
                    <ButtonContainer>
                        <Switch checked={openFinancing} />
                        <span>{title}</span>
                    </ButtonContainer>

                    <ArrowDown />
                </Button>

                <Collapse ref={ref} collapseHeight={height}>
                    <Container>
                        <Item>
                            <Checkbox
                                label="Fianciación a 10 años"
                                checked={selected === 1}
                                onChange={() => setSelected(selected === 1 ? 0 : 1)}
                            />
                            <InfoButton onClick={() => setOpenModalFinancing(true)}>
                                <InfoIcon />
                            </InfoButton>
                        </Item>
                        <Item>
                            <Checkbox
                                label="Fianciación a 15 años"
                                checked={selected === 2}
                                onChange={() => setSelected(selected === 2 ? 0 : 2)}
                            />
                            <InfoButton onClick={() => setOpenModalFinancing(true)}>
                                <InfoIcon />
                            </InfoButton>
                        </Item>
                    </Container>
                </Collapse>
            </FinancingStyled>
        </>
    );
};

export default Financing;
