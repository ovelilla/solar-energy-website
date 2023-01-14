import { ProposalStyled, Section, Container, Grid, Column } from "./styles";

import useProposal from "@hooks/useProposal";

import {
    Consumption,
    Subheader,
    Title,
    Progress,
    Panels,
    Payment,
    Summary,
} from "@features/proposal/components";

const Proposal = () => {
    const { proposal } = useProposal();

    return (
        <ProposalStyled>
            <Subheader />
            <Title />
            <Progress />
            <Section>
                <Container>
                    <Grid>
                        <Column>
                            <Panels />
                            <Payment />
                            <Consumption />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                        </Column>
                        <Column>
                            <Summary />
                        </Column>
                    </Grid>
                </Container>
            </Section>

            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
        </ProposalStyled>
    );
};

export default Proposal;
