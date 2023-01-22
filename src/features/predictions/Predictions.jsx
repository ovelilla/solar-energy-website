import { useState, useEffect, useRef } from "react";

import useProposal from "@hooks/useProposal";

import Form from "@features/predictions/form";
import List from "@features/predictions/list";

import { PredictionsStyled } from "./styles";

const Predictions = () => {
    const [inputValue, setInputValue] = useState("");
    const [selectedIndex, setSelectedIndex] = useState(-1);

    const { predictions, setPredictions } = useProposal();
    const formRef = useRef(null);

    const handleClickOutside = (e) => {
        if (formRef.current && !formRef.current.contains(e.target)) {
            setSelectedIndex(-1);
            setInputValue("");
            setPredictions([]);
        }
    };

    useEffect(() => {
        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);

    return (
        <PredictionsStyled ref={formRef}>
            <Form
                inputValue={inputValue}
                setInputValue={setInputValue}
                selectedIndex={selectedIndex}
                setSelectedIndex={setSelectedIndex}
            />

            {predictions.length > 0 && (
                <List
                    inputValue={inputValue}
                    setInputValue={setInputValue}
                    selectedIndex={selectedIndex}
                    setSelectedIndex={setSelectedIndex}
                />
            )}
        </PredictionsStyled>
    );
};

export default Predictions;
