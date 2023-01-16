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

const Summary = () => {
    return (
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
                        <Title>Instalación</Title>
                        <Text>
                            <Row>
                                <LabelBold>Paneles solares</LabelBold>
                                <ValueBold>10</ValueBold>
                            </Row>
                            <Row>
                                <Label>Potencia instalada</Label>
                                <Value>4,6 kW</Value>
                            </Row>
                        </Text>
                    </Section>

                    <Section>
                        <Title>Datos económicos</Title>
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
                    <Button>Obtener propuesta</Button>
                </Footer>
            </Container>
        </SummaryStyled>
    );
};

export default Summary;
