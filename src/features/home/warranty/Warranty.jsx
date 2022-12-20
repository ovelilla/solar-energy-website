import { WarrantyStyled, Container, Grid, Column, StyledLink, Chart, Bar, Timeline } from "./styles";

const Warranty = () => {
    return (
        <WarrantyStyled>
            <Container>
                <Grid>
                    <Column>
                        <h2>Garantía Libergy: cuenta con nosotros</h2>

                        <h3>Hasta 20 años para paneles</h3>

                        <p>
                            Nuestra garantía extendida asegura el perfecto funcionamiento de cada instalación. Además de
                            energía limpia, ofrecemos tranquilidad.
                        </p>

                        <ul>
                            <li>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>
                                <span>Hasta 20 años para paneles. 10 años para baterías en alquiler.</span>
                            </li>

                            <li>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>
                                <span>25 años de garantía de producción del fabricante en los paneles.</span>
                            </li>
                        </ul>

                        <StyledLink to="/contacto">Solicitar presupuesto</StyledLink>
                    </Column>

                    <Column>
                        <Chart>
                            <Bar>
                                <p>Estándar por ley del sector (3 años)</p>
                                <div></div>
                            </Bar>

                            <Bar>
                                <p>Con compra directa: 5 años</p>
                                <div></div>
                            </Bar>

                            <Bar>
                                <p>Para clientes de alquiler: 20 años</p>
                                <div></div>
                            </Bar>

                            <Timeline>
                                <span>0 años</span>
                                <span>10 años</span>
                                <span>20 años</span>
                            </Timeline>
                        </Chart>
                    </Column>
                </Grid>
            </Container>
        </WarrantyStyled>
    );
};

export default Warranty;
