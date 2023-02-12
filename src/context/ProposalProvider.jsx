import { useEffect } from "react";
import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import axios from "@config/axios";

const ProposalContext = createContext();

export const ProposalProvider = ({ children }) => {
    const [loading, setLoading] = useState(false);
    const [disabled, setDisabled] = useState(false);
    const [predictions, setPredictions] = useState([]);
    const [create, setCreate] = useState(false);
    const [proposal, setProposal] = useState(null);
    const [step, setStep] = useState(1);

    const navigate = useNavigate();

    useEffect(() => {
        if (create) {
            createProposal();
        }
    }, [create]);

    const fetchPredictions = (inputValue) => {
        if (!inputValue) {
            setPredictions([]);
            return;
        }
        const options = {
            input: inputValue,
            types: ["address"],
            componentRestrictions: { country: "es" },
        };

        const autocompleteService = new google.maps.places.AutocompleteService();
        autocompleteService.getPlacePredictions(options, (predictions, status) => {
            if (status !== google.maps.places.PlacesServiceStatus.OK) {
                setPredictions([]);
                return;
            }
            setPredictions(predictions);
        });
    };

    const handlePrediction = async (prediction) => {
        setLoading(true);
        setDisabled(true);

        try {
            const { data } = await axios.get("/maps/place/" + prediction.place_id);

            setProposal({
                ...proposal,
                address: {
                    placeId: data.placeId,
                    formattedAddress: data.formattedAddress,
                    latitude: data.latitude,
                    longitude: data.longitude,
                    components: data.components,
                },
            });
            setCreate(true);
        } catch (error) {
            console.log(error);
        }
    };

    const readPredefined = async () => {
        try {
            const { data } = await axios.get("/predefined");
            console.log(data);

            setProposal({
                ...proposal,
                consumption: {
                    lastInvoiceEnergyCost: data.lastInvoiceEnergyCost,
                    kWhConsumedLastBill: data.kWhConsumedLastBill,
                    monthlyEnergyConsumption: data.monthlyEnergyConsumption,
                    contractedPowerInKW: data.contractedPowerInKW,
                    avgPriceKWContractedPowerAnnual: data.avgPriceKWContractedPowerAnnual,
                    ivaRate: data.ivaRate,
                },
                installation: {
                    roofOrientation: data.roofOrientation,
                    panelSlope: data.panelSlope,
                    structureType: data.structureType,
                    installationType: data.installationType,
                    current: data.current,
                    numberPanels: data.numberPanels,
                    potentialRadiationPerkWYear: data.potentialRadiationPerkWYear,
                    systemLoss: data.systemLoss,
                    consumptionHabit: data.consumptionHabit,
                    hasBattery: data.hasBattery,
                    estimatedCoverage: data.estimatedCoverage,
                },
            });
        } catch (error) {
            console.log(error);
        }
    };

    const readPvgis = async () => {
        const data = {
            lat: proposal.address.latitude,
            lon: proposal.address.longitude,
            raddatabase: "PVGIS-SARAH",
            pvtechchoice: "crystSi",
            peakpower: 1,
            loss: proposal.installation.systemLoss,
            mountingplace: "building",
            angle: proposal.installation.panelSlope,
            aspect: proposal.installation.roofOrientation,
            outputformat: "json",
        };

        try {
            const { data: pvgis } = await axios.post("/pvgis", data);

            setProposal({
                ...proposal,
                pvgis: {
                    monthly: pvgis.monthly,
                    totals: pvgis.totals,
                },
            });
        } catch (error) {
            console.log(error);
        }
    };

    const readProposal = async (uuid) => {
        try {
            const { data } = await axios.get("/proposal/" + uuid);
            setProposal(data);
        } catch (error) {
            console.log(error);
        }
    };

    const createProposal = async () => {
        try {
            const { data } = await axios.post("/proposal", proposal);
            setProposal(data);
            setTimeout(() => {
                setLoading(false);
                setDisabled(false);
                setCreate(false);
                navigate("/tejado/" + data.uuid);
            }, 1000);
        } catch (error) {
            console.log(error);
        }
    };

    const updateProposal = async () => {
        try {
            const { data } = await axios.put("/proposal/" + proposal._id, { proposal });
        } catch (error) {
            console.log(error);
        }
    };

    const resetProposal = () => {
        setProposal(null);
    };

    return (
        <ProposalContext.Provider
            value={{
                loading,
                setLoading,
                disabled,
                setDisabled,
                predictions,
                setPredictions,
                fetchPredictions,
                handlePrediction,
                step,
                setStep,
                readPredefined,
                readPvgis,
                proposal,
                setProposal,
                readProposal,
                createProposal,
                updateProposal,
                resetProposal,
            }}
        >
            {children}
        </ProposalContext.Provider>
    );
};

export default ProposalContext;
