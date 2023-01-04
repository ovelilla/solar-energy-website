import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import styled from "@emotion/styled";

import Header from "@features/roof/header";
import Loading from "@features/roof/loading";
import Map from "@features/roof/map";
import Footer from "@features/roof/footer";

import useProposal from "@hooks/useProposal";

export const Main = styled.main`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    
`;

const Roof = () => {
    const { proposal } = useProposal();

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
    }, []);

    if (proposal.placeId && !isLoading) {
        return (
            <>
                <Header />
                <Main>
                    <Map />
                </Main>
                <Footer />
            </>
        );
    } else if (proposal.placeId && isLoading) {
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
