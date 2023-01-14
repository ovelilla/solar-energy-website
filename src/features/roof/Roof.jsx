import { Main, Section, Container } from "./styles";
import { Footer, Picker, Progress } from "@features/roof/components";

const Roof = () => {
    return (
        <Main>
            <Section>
                <Container>
                    <Progress />

                    <Picker />
                </Container>
            </Section>

            <Footer />
        </Main>
    );
};

export default Roof;
