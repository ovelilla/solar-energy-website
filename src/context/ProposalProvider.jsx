import { createContext, useState } from "react";
import usePredictions from "@hooks/usePredictions";
import loadGoogleMaps from "@/shared/utils/loadGoogleMaps";

const ProposalContext = createContext();

const initialState = {
    id: "",
    placeId: "",
    address: "",
    latitude: "",
    longitude: "",
    consumption: 140,
};

export const ProposalProvider = ({ children }) => {
    const [scriptLoaded, setScriptLoaded] = useState(false);
    const [isRoofLoading, setIsRoofLoading] = useState(true);
    const [isProposalLoading, setIsProposalLoading] = useState(true);
    const [proposal, setProposal] = useState(initialState);
    const [step, setStep] = useState(1);

    const { predictions, setPredictions, fetchPredictions } = usePredictions(
        scriptLoaded,
        setScriptLoaded
    );
    
    loadGoogleMaps(scriptLoaded, setScriptLoaded);

    const resetProposal = () => {
        setProposal(initialState);
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