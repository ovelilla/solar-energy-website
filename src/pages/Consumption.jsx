import { Navigate } from "react-router-dom";
import styled from "@emotion/styled";

import Header from "@features/consumption/header";
import { default as ConsumptionComponent } from "@features/consumption";
import Footer from "@features/consumption/footer";

import useProposal from "@hooks/useProposal";

export const Main = styled.main`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
`;

const Consumption = () => {
    const { proposal } = useProposal();

    if (proposal.placeId) {
        return (
            <>
                <Header />
                <Main>
                    <ConsumptionComponent />
                </Main>
                <Footer />
            </>
        );
    } else {
        return <Navigate to="/" />;
    }
};

export default Consumption;
