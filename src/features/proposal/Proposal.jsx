import { ProposalStyled, Section, Container, Grid, Column } from "./styles";

import ComparisonBill from "@features/proposal/components/comparison-bill";
import Consumption from "@features/proposal/components/consumption";
import Faq from "@features/proposal/components/faq";
import Footer from "@features/proposal/components/footer";
import Helps from "@features/proposal/components/helps";
import Panels from "@features/proposal/components/panels";
import Payment from "@features/proposal/components/payment";
import Progress from "@features/proposal/components/progress";
import Steps from "@features/proposal/components/steps";
import Subheader from "@features/proposal/components/subheader";
import Summary from "@features/proposal/components/summary";
import Title from "@features/proposal/components/title";

const Proposal = () => {
    return (
        <ProposalStyled>
            <Subheader />
            <Title />
            <Progress />
            <Section>
                <Container>
                    <Grid>
                        <Column>
                            <Consumption />
                            <ComparisonBill />
                            <Panels />
                            <Payment />
                            <Helps />
                        </Column>
                        <Column>
                            <Summary />
                        </Column>
                    </Grid>
                </Container>
            </Section>
            <div>
                <Steps />
                <Faq />
                <Footer />
            </div>
        </ProposalStyled>
    );
};

export default Proposal;
