import { useNavigate } from "react-router-dom";
import useProposal from "@hooks/useProposal";
import { Main, Section, Container } from "./styles";
import Footer from "@features/roof/footer";
import Picker from "@features/roof/picker";
import Progress from "@features/roof/progress";

const Roof = () => {
    const navigate = useNavigate();
    const { proposal } = useProposal();

    const handleNext = () => {
        navigate("/propuesta/" + proposal.id);
    };

    return (
        <Main>
            <Section>
                <Container>
                    <Progress />

                    <Picker />
                </Container>
            </Section>

            <Footer onNext={handleNext} />
        </Main>
    );
};

export default Roof;
