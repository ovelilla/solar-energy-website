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
} from "./styles";

import Cash from "@features/proposal/components/payment/cash";
import Rental from "@features/proposal/components/payment/rental";

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
                                <p>Nam sed odio vehicula, interdum tellus nec.</p>
                            </Option>

                            <OptionBackground selectedOption={selectedOption} />
                        </Options>
                    </OptionsContainer>
                </Column>

                <Column>{selectedOption === 0 ? <Cash /> : <Rental />}</Column>
            </Grid>
        </PaymentStyled>
    );
};

export default Payment;
