import { RangeStyled, Grid, LeftColumn, RightColumn, Box, Title, Description } from "./styles";

import useProposal from "@hooks/useProposal";
import useWindowSize from "@hooks/useWindowSize";

import { breakpoints } from "@shared/styles/sizes";

import Consumption from "./Consumption";
import Inputs from "./Inputs";

const Range = () => {
    const { proposal, setProposal } = useProposal();
    const { width } = useWindowSize();

    const handleConsumptionChange = (e) => {
        setProposal({ ...proposal, consumption: e.target.value });
    };

    return (
        <RangeStyled>
            <Grid>
                <LeftColumn>
                    <Title>Define tu consumo</Title>

                    <Description>
                        Para poder calcular el precio de tu instalación, necesitamos que nos
                        indiques tu consumo electrico mensual aproximado.
                    </Description>

                    {width < breakpoints.md ? (
                        <Box>
                            <Consumption proposal={proposal} />
                        </Box>
                    ) : (
                        <Inputs proposal={proposal} onChange={handleConsumptionChange} />
                    )}
                </LeftColumn>

                <RightColumn>
                    {width < breakpoints.md ? (
                        <Inputs proposal={proposal} onChange={handleConsumptionChange} />
                    ) : (
                        <Box>
                            <Consumption proposal={proposal} />
                        </Box>
                    )}
                </RightColumn>
            </Grid>
        </RangeStyled>
    );
};

export default Range;
