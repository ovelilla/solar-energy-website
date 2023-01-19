import { useState } from "react";
import {
    SummaryStyled,
    Container,
    Header,
    Body,
    Section,
    Title,
    Text,
    Row,
    Label,
    LabelBold,
    LabelPrice,
    Value,
    ValueBold,
    ValuePrice,
    Footer,
    Button,
} from "./styles";
import SendProposal from "@features/proposal/components/send-proposal";
import IconButton from "@features/ui/iconbutton";
import Sliders from "@shared/icons/Sliders";

const Summary = () => {
    const [openModalSendProposal, setOpenModalSendProposal] = useState(false);

    return (
        <>
            {openModalSendProposal && (
                <SendProposal onClose={() => setOpenModalSendProposal(false)} />
            )}
            <SummaryStyled>
                <Container>
                    <Header>
                        <h2>Resumen propuesta</h2>
                    </Header>

                    <Body>
                        <Section>
                            <Title>Ahorro</Title>
                            <Text>
                                <Row>
                                    <Label>Ahorro mensual</Label>
                                    <Value>50 €</Value>
                                </Row>
                                <Row>
                                    <Label>Ahorro anual</Label>
                                    <Value>600 €</Value>
                                </Row>
                                <Row>
                                    <LabelBold>Ahorro 25 años</LabelBold>
                                    <ValueBold>15.000 €</ValueBold>
                                </Row>
                            </Text>
                        </Section>

                        <Section>
                            <Title>
                                <span>Instalación</span>
                                <IconButton
                                    onClick={() => {
                                        const panels = document.getElementById("panels");
                                        panels.scrollIntoView({ behavior: "smooth" });
                                    }}
                                >
                                    <Sliders />
                                </IconButton>
                            </Title>
                            <Text>
                                <Row>
                                    <LabelBold>Paneles solares</LabelBold>
                                    <ValueBold>10</ValueBold>
                                </Row>
                                <Row>
                                    <Label>Potencia instalada</Label>
                                    <Value>4,15 kW</Value>
                                </Row>
                                <Row>
                                    <Label>Baterías</Label>
                                    <Value>10 kW</Value>
                                </Row>
                            </Text>
                        </Section>

                        <Section>
                            <Title>
                                <span>Datos económicos</span>
                                <IconButton
                                    onClick={() => {
                                        const consumption = document.getElementById("consumption");
                                        consumption.scrollIntoView({ behavior: "smooth" });
                                    }}
                                >
                                    <Sliders />
                                </IconButton>
                            </Title>
                            <Text>
                                <Row>
                                    <Label>Retorno inversión</Label>
                                    <Value>6 años</Value>
                                </Row>
                                <Row>
                                    <Label>IVA (21%)</Label>
                                    <Value>1.116 €</Value>
                                </Row>
                                <Row>
                                    <LabelPrice>Total</LabelPrice>
                                    <ValuePrice>6.430 €</ValuePrice>
                                </Row>
                                <Row>
                                    <Label>Ayudas</Label>
                                    <Value>1.170 €</Value>
                                </Row>
                            </Text>
                        </Section>
                    </Body>

                    <Footer>
                        <Button onClick={() => setOpenModalSendProposal(true)}>
                            Obtener propuesta
                        </Button>
                    </Footer>
                </Container>
            </SummaryStyled>
        </>
    );
};

export default Summary;
