import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import styled from "@emotion/styled";

import Map from "@features/roof/map";
import Footer from "@features/roof/footer";
import Spinner from "@features/ui/spinner";

import useProposal from "@hooks/useProposal";

export const Main = styled.main`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    width: 100%;
    background-color: #fafaff;
`;

export const Loading = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 48px;

    p {
        font-size: 24px;
        font-weight: 500;
        color: #28365e;
    }
`;

export const Icon = styled.div`
    width: 200px;
    height: 200px;
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
                <Main>
                    <Map />
                </Main>

                <Footer />
            </>
        );
    } else if (proposal.placeId && isLoading) {
        return (
            <Loading>
                <Container>
                    <Icon>
                        <Spinner color="#28365e" width="2" />
                    </Icon>

                    <p>Buscando tu dirección...</p>
                </Container>
            </Loading>
        );
    } else {
        return <Navigate to="/" />;
    }
};

export default Roof;
