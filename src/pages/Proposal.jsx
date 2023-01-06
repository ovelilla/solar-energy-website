import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import styled from "@emotion/styled";

import Loading from "@features/proposal/loading";
import Header from "@features/proposal/header";
import { default as ProposalComponent } from "@features/proposal";

import useProposal from "@hooks/useProposal";

export const Main = styled.main`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
`;

const Roof = () => {
    const { isProposalLoading, setIsProposalLoading, proposal } = useProposal();

    useEffect(() => {
        setTimeout(() => {
            setIsProposalLoading(false);
        }, 3000);
    }, []);

    // if (proposal.placeId && !isProposalLoading) {
        return (
            <>
                <Header />
                <Main>
                    <ProposalComponent />
                </Main>
            </>
        );
    // } else if (proposal.placeId && isProposalLoading) {
    //     return (
    //         <>
    //             <Header />
    //             <Loading />;
    //         </>
    //     );
    // } else {
    //     return <Navigate to="/" />;
    // }
};

export default Roof;
