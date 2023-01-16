import { SelfConsumptionStyled, Container, Grid, Column, StyledLink } from "./styles";

const SelfConsumption = () => {
    return (
        <SelfConsumptionStyled>
            <Container>
                <Grid>
                    <Column>
                        <img src="/img/profesional-instalando-placas-solares.jpg" alt="Mano tocando panel solar" />
                    </Column>

                    <Column>
                        <h2>Especialistas en instalaciones solares</h2>

                        <h3>Pásate al autoconsumo</h3>

                        <p>
                            Realizamos de toda la instalación de principio a fin. Hacemos que pasarte a la energía solar
                            sea muy sencillo. Ahorra hasta un 70% en tu factura de la luz. No esperes más y pide tu
                            presupuesto.
                        </p>

                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nec mi augue. Curabitur nec
                            mauris porttitor, porta augue eu, ultrices eros. Nunc a facilisis nibh, et efficitur nibh.
                        </p>

                        <StyledLink to="/contacto">Solicitar presupuesto</StyledLink>
                    </Column>
                </Grid>
            </Container>
        </SelfConsumptionStyled>
    );
};

export default SelfConsumption;
