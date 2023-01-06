import { createContext, useState } from "react";

import usePredictions from "@hooks/usePredictions";

const ProposalContext = createContext();

export const ProposalProvider = ({ children }) => {
    const [isRoofLoading, setIsRoofLoading] = useState(true);
    const [isProposalLoading, setIsProposalLoading] = useState(true);
    const [proposal, setProposal] = useState({
        placeId: "",
        address: "",
        latitude: "",
        longitude: "",
        consumption: 140,
    });
    const [step, setStep] = useState(1);

    const { predictions, setPredictions, fetchPredictions } = usePredictions();

    const resetProposal = () => {
        setProposal({
            placeId: "",
            address: "",
            latitude: "",
            longitude: "",
            consumption: 140,
        });
    };

    return (
        <ProposalContext.Provider
            value={{
                isRoofLoading,
                setIsRoofLoading,
                isProposalLoading,
                setIsProposalLoading,
                proposal,
                setProposal,
                resetProposal,
                step,
                setStep,
                predictions,
                setPredictions,
                fetchPredictions,
            }}
        >
            {children}
        </ProposalContext.Provider>
    );
};

export default ProposalContext;
