import { createContext, useState } from "react";

import usePredictions from "@hooks/usePredictions";

const ProposalContext = createContext();

export const ProposalProvider = ({ children }) => {
    const { predictions, setPredictions, fetchPredictions } = usePredictions();
    const [proposal, setProposal] = useState({
        placeId: "",
        address: "",
    });

    const resetProposal = () => {
        setProposal({
            placeId: "",
            address: "",
        });
    };

    return (
        <ProposalContext.Provider
            value={{
                predictions,
                setPredictions,
                fetchPredictions,
                proposal,
                setProposal,
                resetProposal,
            }}
        >
            {children}
        </ProposalContext.Provider>
    );
};

export default ProposalContext;
