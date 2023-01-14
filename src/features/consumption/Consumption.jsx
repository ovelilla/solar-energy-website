import { Main, Section, Container } from "./styles";
import { Footer, Range, Progress } from "@features/consumption/components";

const Consumption = () => {
    return (
        <Main>
            <Section>
                <Container>
                    <Progress />

                    <Range />
                </Container>
            </Section>

            <Footer />
        </Main>
    );
};

export default Consumption;
