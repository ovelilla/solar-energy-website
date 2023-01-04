import { createContext, useState } from "react";

import usePredictions from "@hooks/usePredictions";

const ProposalContext = createContext();

export const ProposalProvider = ({ children }) => {
    const { predictions, setPredictions, fetchPredictions } = usePredictions();

    const [proposal, setProposal] = useState({
        placeId: "",
        address: "",
        latitude: "",
        longitude: "",
    });
    const [step, setStep] = useState(1);

    const resetProposal = () => {
        setProposal({
            placeId: "",
            address: "",
            latitude: "",
            longitude: "",
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
                step,
                setStep,
            }}
        >
            {children}
        </ProposalContext.Provider>
    );
};

export default ProposalContext;
