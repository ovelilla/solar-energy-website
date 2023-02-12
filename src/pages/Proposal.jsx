import { default as ProposalComponent } from "@features/proposal";
import Loading from "@features/proposal/components/loading";
import Header from "@features/proposal/components/header";

import useCalculator from "@hooks/useCalculator";

const Proposal = () => {
    const { loading } = useCalculator();
    
    if (loading) {
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
