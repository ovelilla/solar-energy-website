import { useEffect } from "react";

import { default as ProposalComponent } from "@features/proposal";
import Loading from "@features/proposal/components/loading";
import Header from "@features/proposal/components/header";

import useProposal from "@hooks/useProposal";

const Proposal = () => {
    const { isProposalLoading, setIsProposalLoading, proposal } = useProposal();

    useEffect(() => {
        setTimeout(() => {
            setIsProposalLoading(false);
        }, 4000);
    }, []);

    if (proposal.placeId && isProposalLoading) {
        return (
            <>
                <Header />
                <Loading />;
            </>
        );
    }

    return (
        <>
            <Header />
            <ProposalComponent />
        </>
    );
};

export default Proposal;
