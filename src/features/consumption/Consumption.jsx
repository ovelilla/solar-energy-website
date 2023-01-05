import {
    ConsumptionStyled,
    Container,
    Grid,
    RightColumn,
    Box,
    LeftColumn,
    Range,
    InputNumber,
    InputRange,
    Line,
} from "./styles";

import Progress from "@features/consumption/progress";

import useProposal from "@hooks/useProposal";

const Consumption = () => {
    const { proposal, setProposal } = useProposal();

    const handleConsumptionChange = (e) => {
        setProposal({ ...proposal, consumption: e.target.value });
    };

    return (
        <ConsumptionStyled>
            <Container>
                <Progress />

                <Grid>
                    <RightColumn>
                        <h1>Define tu consumo</h1>

                        <p>
                            Para poder calcular el precio de tu instalación, necesitamos que nos
                            indiques tu consumo electrico mensual aproximado.
                        </p>

                        <Box>
                            <svg
                                viewBox="0 0 39 39"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                width="44"
                                height="44"
                                color="#28365e"
                            >
                                <path
                                    d="M4.875 14.625L19.5 3.25l14.625 11.375V32.5a3.25 3.25 0 01-3.25 3.25H8.125a3.25 3.25 0 01-3.25-3.25V14.625z"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                ></path>
                                <path
                                    d="M20.313 13.813l-8.125 9.75H19.5l-.813 6.5 8.125-9.75H19.5l.813-6.5z"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                ></path>
                            </svg>

                            <div>
                                <span>{proposal.consumption} €/mes</span>
                                <span>Consumo mensual</span>
                            </div>
                        </Box>
                    </RightColumn>

                    <LeftColumn>
                        <InputNumber
                            type="number"
                            min={30}
                            max={240}
                            step={10}
                            value={proposal.consumption}
                            onChange={handleConsumptionChange}
                        />
                        <Range>
                            <InputRange
                                type="range"
                                min={30}
                                max={240}
                                step={10}
                                value={proposal.consumption}
                                onChange={handleConsumptionChange}
                            />
                            <Line>
                                <span>30 €</span>
                                <span>240 €</span>
                            </Line>
                        </Range>
                    </LeftColumn>
                </Grid>
            </Container>
        </ConsumptionStyled>
    );
};

export default Consumption;
