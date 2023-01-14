import { Container, InputNumber, RangeContainer, InputRange, Line } from "./styles";

const Inputs = ({ proposal, onChange }) => {
    return (
        <Container>
            <InputNumber
                type="number"
                min={30}
                max={240}
                step={10}
                value={proposal.consumption}
                onChange={onChange}
            />

            <RangeContainer>
                <InputRange
                    type="range"
                    min={30}
                    max={240}
                    step={10}
                    value={proposal.consumption}
                    onChange={onChange}
                />
                <Line>
                    <span>30 €</span>
                    <span>240 €</span>
                </Line>
            </RangeContainer>
        </Container>
    );
};

export default Inputs;
