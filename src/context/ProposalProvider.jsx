import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import usePredictions from "@hooks/usePredictions";
import loadGoogleMaps from "@/shared/utils/loadGoogleMaps";

import axios from "@config/axios";

const ProposalContext = createContext();

const initialState = {
    uuid: "",
    placeId: "",
    address: "",
    latitude: 0,
    longitude: 0,
    consumption: 140,
    kWhConsumed: 500,
    contractedPower: 3.45,
    panelsNumber: 10,
    installationType: "premium",
    hasBattery: false,
    batteryBrand: "",
    paymenMethod: "cash",
};

export const ProposalProvider = ({ children }) => {
    const [scriptLoaded, setScriptLoaded] = useState(false);

    const [isPredictionLoading, setIsPredictionLoading] = useState(false);
    const [isRoofLoading, setIsRoofLoading] = useState(true);
    const [isProposalLoading, setIsProposalLoading] = useState(true);

    const [proposal, setProposal] = useState(initialState);
    const [step, setStep] = useState(1);

    const navigate = useNavigate();

    const { predictions, setPredictions, fetchPredictions } = usePredictions(
        scriptLoaded,
        setScriptLoaded
    );

    loadGoogleMaps(scriptLoaded, setScriptLoaded);

    const createProposal = async () => {
        setIsPredictionLoading(true);

        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization:
                    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzY2RjMzM3NWE4MTI1NDkyMDk3MTZiZCIsImlhdCI6MTY3NDQzMDE0MiwiZXhwIjoxNjc3MDIyMTQyfQ.11EcHxUJXedVbjv_CZouAqFNkaliksh6w87OXInd_BQ",
            },
        };

        try {
            const { data } = await axios.post("/proposal", proposal, config);

            setProposal(data.proposal);

            setTimeout(() => {
                setIsPredictionLoading(false);
                navigate("/tejado/" + data.proposal.uuid);
            }, 1000);
        } catch (error) {
            console.log(error);
        }
    };

    const resetProposal = () => {
        setProposal(initialState);
    };

    return (
        <ProposalContext.Provider
            value={{
                isPredictionLoading,
                setIsPredictionLoading,
                isRoofLoading,
                setIsRoofLoading,
                isProposalLoading,
                setIsProposalLoading,
                proposal,
                setProposal,
                createProposal,
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
