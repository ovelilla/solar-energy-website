import { useState } from "react";
import {
    PaymentStyled,
    Grid,
    Column,
    Text,
    Title,
    Subtitle,
    OptionsContainer,
    Bar,
    Pointer,
    Options,
    Option,
    OptionBackground,
    Summary,
    Header,
    Body,
    Item,
    ColumnLeft,
    ColumnRight,
    Icon,
} from "./styles";

const Payment = () => {
    const [selectedOption, setSelectedOption] = useState(0);

    return (
        <PaymentStyled>
            <Grid>
                <Column>
                    <Text>
                        <Title>Elige tipo de pago</Title>
                        <Subtitle>
                            Ofrecemos dos modalidades de pago para que puedas elegir la que más se
                            adapte a tus necesidades.
                        </Subtitle>
                    </Text>

                    <OptionsContainer>
                        <Bar>
                            <Pointer selectedOption={selectedOption} />
                        </Bar>

                        <Options>
                            <Option onClick={() => setSelectedOption(0)}>
                                <p>Pago al contado</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Option>

                            <Option onClick={() => setSelectedOption(1)}>
                                <p>Alquiler</p>
                                <p>Nam sed odio vehicula, interdum tellus nec, tristique sapien.</p>
                            </Option>

                            <OptionBackground selectedOption={selectedOption} />
                        </Options>
                    </OptionsContainer>
                </Column>

                <Column>
                    <Summary>
                        <Header>
                            <p>Estimación precio de instalación</p>
                            <p>6.430 €</p>
                        </Header>

                        <Body>
                            <Item>
                                <ColumnLeft>
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
                                </ColumnLeft>

                                <ColumnRight>
                                    <h3>Rápido retorno de la inversión</h3>
                                    <p>
                                        Comprando el sistema, no tendrás que abonar ningún coste
                                        más.
                                    </p>
                                </ColumnRight>
                            </Item>

                            <Item>
                                <ColumnLeft>
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
                                </ColumnLeft>

                                <ColumnRight>
                                    <h3>Control de tu instalación</h3>
                                    <p>Es tu instalación, disfrútala como quieras.</p>
                                </ColumnRight>
                            </Item>

                            <Item>
                                <ColumnLeft>
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
                                </ColumnLeft>

                                <ColumnRight>
                                    <h3>Hasta 25 años de garatía</h3>
                                    <p>
                                        Comprando el sistema, no tendrás que abonar ningún coste
                                        más.
                                    </p>
                                </ColumnRight>
                            </Item>
                        </Body>
                    </Summary>
                </Column>
            </Grid>
        </PaymentStyled>
    );
};

export default Payment;
