import {
    SolutionsStyled,
    Container,
    Grid,
    Card,
    Title,
    Price,
    Description,
    Dl,
    Dt,
    Dd,
    Icon,
    StyledLink,
} from "./styles";

const Solutions = () => {
    return (
        <SolutionsStyled>
            <Container>
                <Grid>
                    <Card>
                        <Title>Pago al contado</Title>

                        <Price>
                            <span>desde</span>
                            <span>2900€</span>
                        </Price>

                        <Description>
                            Abona el coste íntegro de la instalación para ser el propietario desde el primer momento.
                        </Description>

                        <Dl>
                            <div>
                                <Dt>
                                    <Icon>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            width="24"
                                            height="25"
                                            viewBox="0 0 24 25"
                                        >
                                            <path d="M9 19.754v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0v-10a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0v-14a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                                        </svg>
                                    </Icon>
                                    <h3>Rápido retorno de la inversión</h3>
                                </Dt>
                                <Dd>Comprando el sistema, no tendrás que abonar ningún coste más.</Dd>
                            </div>

                            <div>
                                <Dt>
                                    <Icon>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M3.322 21.333L2 8.703l6.488 2.578 3.725-8.614 4.446 8.614 6.008-2.578-1.442 12.63c-2.083-.558-4.566-1.675-9.012-1.675-4.566 0-6.849 1.117-8.891 1.675z"></path>
                                        </svg>
                                    </Icon>
                                    <h3>Control de tu instalación</h3>
                                </Dt>
                                <Dd>Es tu instalación, disfrútala como quieras.</Dd>
                            </div>
                            <div>
                                <Dt>
                                    <Icon>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            width="24"
                                            height="25"
                                            viewBox="0 0 24 25"
                                        >
                                            <path d="M9 12.754l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 3.698a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9.754c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                                        </svg>
                                    </Icon>
                                    <h3>Rápido retorno de la inversión</h3>
                                </Dt>
                                <Dd>Comprando el sistema, no tendrás que abonar ningún coste más.</Dd>
                            </div>
                        </Dl>

                        <StyledLink to="/">Solicitar propuesta</StyledLink>
                    </Card>

                    <Card>
                        <Title>Alquiler</Title>

                        <Price>
                            <span>desde</span>
                            <span>25€</span>
                            <span>/mes</span>
                        </Price>

                        <Description>
                            Paga una cómoda cuota mensual sin inversión inicial. Puedes comprarlo en cualquier momento.
                        </Description>

                        <Dl>
                            <div>
                                <Dt>
                                    <Icon>
                                        <svg
                                            height="32px"
                                            width="32px"
                                            fill="currentColor"
                                            stroke="currentColor"
                                            strokeWidth=".3"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 32 32"
                                        >
                                            <path d="M29 15h-1.22a9.93 9.93 0 00-4.24-6.32l-1.11 1.66a8 8 0 012.36 10.87 1 1 0 000 1L26.36 25l-1.7 1-1.06-1.85a1 1 0 00-.63-.47 1 1 0 00-.77.12A8 8 0 0118 25h-4a7.92 7.92 0 01-3.53-.83 1 1 0 00-1.31.4L8.34 26l-1.7-1 1.13-2a1 1 0 00-.07-1.11 7.87 7.87 0 01-1.29-2.4 1 1 0 00-.64-.64L4 18.28v-2.43l1.49-.25a1 1 0 00.8-.72 7.83 7.83 0 011.52-3A1 1 0 008 11.2a10.58 10.58 0 01.25-2.95 11.48 11.48 0 012.42 1.05l1.05-1.7A14.73 14.73 0 007.79 6a1 1 0 00-1.18.68A14.89 14.89 0 006 11a9.86 9.86 0 00-1.45 2.74L2.84 14A1 1 0 002 15v4a1 1 0 00.68.95l2 .66a9.84 9.84 0 001 2L4.9 24a2 2 0 00.73 2.72l1.7 1a2 2 0 001 .27 1.86 1.86 0 00.52-.07 2 2 0 001.23-.92l.37-.65A9.8 9.8 0 0014 27h4a9.94 9.94 0 004.35-1l.57 1a2 2 0 002.75.74l1.7-1A2 2 0 0028.1 24l-1.3-2.27A10.08 10.08 0 0028 17h1a1 1 0 000-2z"></path>
                                            <circle cx="10" cy="14" r="1"></circle>
                                            <path d="M17 12a4 4 0 10-4-4 4 4 0 004 4zm0-6a2 2 0 11-2 2 2 2 0 012-2z"></path>
                                        </svg>
                                    </Icon>
                                    <h3>Ahorro desde el primer día</h3>
                                </Dt>
                                <Dd>
                                    Baja tu factura de la luz y recibe una compensación por la energía que no consumas.
                                </Dd>
                            </div>

                            <div>
                                <Dt>
                                    <Icon>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            width="24"
                                            height="25"
                                            viewBox="0 0 24 25"
                                        >
                                            <path d="M9 12.754l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 3.698a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9.754c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                                        </svg>
                                    </Icon>
                                    <h3>20 años de tranquilidad</h3>
                                </Dt>
                                <Dd>Monitorizamos tu sistema y su mantenimiento para que no tengas que preocuparte.</Dd>
                            </div>
                            <div>
                                <Dt>
                                    <Icon>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            width="24"
                                            height="25"
                                            viewBox="0 0 24 25"
                                        >
                                            <path d="M15.5 7.5L19 4m2-2l-2 2 2-2zm-9.61 9.61a5.5 5.5 0 11-7.778 7.778 5.5 5.5 0 017.777-7.777v-.001zm0 0L15.5 7.5l-4.11 4.11zM15.5 7.5l3 3L22 7l-3-3-3.5 3.5z"></path>
                                        </svg>
                                    </Icon>
                                    <h3>Coste de energía predecible</h3>
                                </Dt>
                                <Dd>
                                    No te preocupes por los incrementos en el precio de la luz. Tu factura no va a
                                    subir.
                                </Dd>
                            </div>
                        </Dl>

                        <StyledLink to="/">Solicitar propuesta</StyledLink>
                    </Card>
                </Grid>
            </Container>
        </SolutionsStyled>
    );
};

export default Solutions;
