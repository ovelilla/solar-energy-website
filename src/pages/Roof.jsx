import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import styled from "@emotion/styled";

import Loading from "@features/roof/loading";
import Header from "@features/roof/header";
import { default as RoofComponent } from "@features/roof";
import Footer from "@features/roof/footer";

import useProposal from "@hooks/useProposal";

export const Main = styled.main`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
`;

const Roof = () => {
    const { isRoofLoading, setIsRoofLoading, proposal } = useProposal();

    useEffect(() => {
        setTimeout(() => {
            setIsRoofLoading(false);
        }, 3000);
    }, []);

    if (proposal.placeId && !isRoofLoading) {
        return (
            <>
                <Header />
                <Main>
                    <RoofComponent />
                </Main>
                <Footer />
            </>
        );
    } else if (proposal.placeId && isRoofLoading) {
        return (
            <>
                <Header />
                <Loading />;
            </>
        );
    } else {
        return <Navigate to="/" />;
    }
};

export default Roof;
