import {
    ConsumptionStyled,
    Container,
    Text,
    Inputs,
    NumberContainer,
    InputNumber,
    Number,
    Range,
    InputRange,
    AxisTitle,
} from "./styles";
import More from "@features/proposal/components/consumption/more";
import useProposal from "@hooks/useProposal";
import useCalculator from "@hooks/useCalculator";

const Consumption = () => {
    const { proposal, setProposal } = useProposal();
    const { change, setChange, setUpdate } = useCalculator();

    const handleChange = (e) => {
        if (e.target.value < 30 || e.target.value > 240) {
            return;
        }
        setChange(!change);
        setProposal({
            ...proposal,
            consumption: {
                ...proposal.consumption,
                lastInvoiceEnergyCost: parseFloat(e.target.value),
            },
        });
        
    };

    return (
        <ConsumptionStyled id="consumption">
            <Container>
                <Text>
                    <h2>¿Cuál es tu factura mensual?</h2>
                    <p>
                        Tu factura mensual se utiliza para calcular los ahorros de manera más
                        precisa
                    </p>
                </Text>

                <Inputs>
                    <NumberContainer>
                        <InputNumber
                            type="number"
                            min={30}
                            max={240}
                            step={10}
                            value={proposal.consumption.lastInvoiceEnergyCost}
                            onChange={(e) =>{
                                handleChange(e);
                                setUpdate(true);
                            }}
                        />

                        <Number>
                            {proposal.consumption.lastInvoiceEnergyCost} <span>€/mes</span>
                        </Number>
                    </NumberContainer>

                    <Range>
                        <InputRange
                            type="range"
                            min={30}
                            max={240}
                            step={10}
                            value={proposal.consumption.lastInvoiceEnergyCost}
                            onChange={handleChange}
                            onMouseUp={() => setUpdate(true)}
                            onTouchEnd={() => setUpdate(true)}
                        />
                        <AxisTitle>
                            <span>30 €</span>
                            <span>240 €</span>
                        </AxisTitle>
                    </Range>
                </Inputs>
            </Container>

            <More title="Mejorar tu propuesta aportando información adicional" />
        </ConsumptionStyled>
    );
};

export default Consumption;
