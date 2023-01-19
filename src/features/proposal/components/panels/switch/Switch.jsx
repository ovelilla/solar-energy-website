import { useState } from "react";
import { SwitchContainer, SwitchInput, SwitchLabel } from "./styles";

const Switch = ({ checked, onChange }) => {
    const [isChecked, setIsChecked] = useState(checked);

    return (
        <SwitchContainer>
            <SwitchInput
                type="checkbox"
                checked={checked}
                onChange={(e) => {
                    setIsChecked(e.target.checked);
                    onChange(e.target.checked);
                }}
            />
            <SwitchLabel htmlFor="toggle"></SwitchLabel>
        </SwitchContainer>
    );
};

export default Switch;
