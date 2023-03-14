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
import useProposal from "@hooks/useProposal";
import currencyFormat from "@utils/currencyFormat";

const Summary = () => {
    const [openModalSendProposal, setOpenModalSendProposal] = useState(false);

    const { proposal } = useProposal();

    return (
        <>
            <SendProposal
                open={openModalSendProposal}
                onClose={() => {
                    console.log("close");
                    setOpenModalSendProposal(false);
                }}
            />

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
                                    <Value>
                                        {currencyFormat(proposal.summary.savings.monthly, 0)}
                                    </Value>
                                </Row>
                                <Row>
                                    <Label>Ahorro anual</Label>
                                    <Value>
                                        {currencyFormat(proposal.summary.savings.yearly, 0)}
                                    </Value>
                                </Row>
                                <Row>
                                    <LabelBold>Ahorro 25 años</LabelBold>
                                    <ValueBold>
                                        {currencyFormat(proposal.summary.savings.yearly25, 0)}
                                    </ValueBold>
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
                                    <ValueBold>{proposal.installation.numberPanels}</ValueBold>
                                </Row>
                                <Row>
                                    <Label>Potencia instalada</Label>
                                    <Value>{proposal.installation.installationPowerKw}kW</Value>
                                </Row>
                                <Row>
                                    <Label>Baterías</Label>
                                    <Value>
                                        {proposal.installation.hasBattery
                                            ? proposal.installation.battery.capacity + " kW"
                                            : "-"}
                                    </Value>
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
                                    <Value>
                                        {proposal.summary.economic.investmentReturn.toFixed(2)} años
                                    </Value>
                                </Row>
                                <Row>
                                    <Label>IVA (21%)</Label>
                                    <Value>{currencyFormat(proposal.summary.economic.iva)}</Value>
                                </Row>
                                <Row>
                                    <LabelPrice>Total</LabelPrice>
                                    <ValuePrice>
                                        {currencyFormat(proposal.summary.economic.total)}
                                    </ValuePrice>
                                </Row>
                                <Row>
                                    <Label>Ayudas</Label>
                                    <Value>{currencyFormat(proposal.summary.economic.helps)}</Value>
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
