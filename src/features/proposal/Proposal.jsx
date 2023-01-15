import { ProposalStyled, Section, Container, Grid, Column } from "./styles";

import useProposal from "@hooks/useProposal";

import {
    Consumption,
    Faq,
    Footer,
    Panels,
    Payment,
    Progress,
    Subheader,
    Summary,
    Title,
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
                        </Column>
                        <Column>
                            <Summary />
                        </Column>
                    </Grid>
                </Container>
            </Section>
            <div>
                <Faq />
                <Footer />
            </div>
        </ProposalStyled>
    );
};

export default Proposal;
