import { Main, Section, Container } from "./styles";
import Footer from "@features/roof/footer";
import Picker from "@features/roof/picker";
import Progress from "@features/roof/progress";

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
