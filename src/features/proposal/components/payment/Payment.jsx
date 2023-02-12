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
import useProposal from "@hooks/useProposal";
import useCalculator from "@hooks/useCalculator";

const Payment = () => {
    
    const { proposal, setProposal } = useProposal();
    const { change, setChange, setUpdate } = useCalculator();

    const selected = proposal.payment.method === "cash" || proposal.payment.method === "financing" || !proposal.payment.method ? 0 : 1;

    const [selectedOption, setSelectedOption] = useState(selected);

    const handleClickOption = (index) => {
        setSelectedOption(index);

        setChange(!change);
        setProposal({
            ...proposal,
            payment: {
                ...proposal.payment,
                method: index === 0 ? "cash" : "rental",
            },
        });
        setUpdate(true);
    };

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
                            <Option onClick={() => handleClickOption(0)}>
                                <p>Pago al contado</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Option>

                            <Option onClick={() => handleClickOption(1)}>
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
