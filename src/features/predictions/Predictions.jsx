import { useState, useRef } from "react";

import useProposal from "@hooks/useProposal";

import Form from "@features/predictions/form";
import List from "@features/predictions/list";

import { PredictionsStyled } from "./styles";

const Predictions = () => {
    const [inputValue, setInputValue] = useState("");
    const [selectedIndex, setSelectedIndex] = useState(-1);

    const { predictions } = useProposal();
    const formRef = useRef(null);

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
                    formRef={formRef}
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
