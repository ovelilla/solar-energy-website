import { useEffect } from "react";

import { Loading, Header } from "@features/proposal/components";
import { default as ProposalComponent } from "@features/proposal";

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
