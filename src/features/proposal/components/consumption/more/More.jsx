import { useState, useRef } from "react";
import Select from "react-select";
import ArrowDown from "@shared/icons/ArrowDown";
import {
    MoreStyled,
    Button,
    Collapse,
    Container,
    Grid,
    Field,
    Label,
    Input,
    Error,
    selectStyles,
} from "./styles";
import useForm from "@hooks/useForm";
import useProposal from "@hooks/useProposal";
import useCalculator from "@hooks/useCalculator";

const singleFase = [
    { value: 1.15, label: "Monofásica - 1.15 kW" },
    { value: 2.3, label: "Monofásica - 2.3 kW" },
    { value: 3.45, label: "Monofásica - 3.45 kW" },
    { value: 4.6, label: "Monofásica - 4.6 kW" },
    { value: 5.75, label: "Monofásica - 5.75 kW" },
    { value: 6.9, label: "Monofásica - 6.9 kW" },
    { value: 8.05, label: "Monofásica - 8.05 kW" },
    { value: 9.2, label: "Monofásica - 9.2 kW" },
    { value: 10.35, label: "Monofásica - 10.35 kW" },
    { value: 11.5, label: "Monofásica - 11.5 kW" },
    { value: 14.49, label: "Monofásica - 14.49 kW" },
];

const threeFase = [
    { value: 3.464, label: "Trifásica - 3.464 kW" },
    { value: 6.928, label: "Trifásica - 6.928 kW" },
    { value: 10.392, label: "Trifásica - 10.392 kW" },
    { value: 13.856, label: "Trifásica - 13.856 kW" },
    { value: 17.321, label: "Trifásica - 17.321 kW" },
    { value: 20.785, label: "Trifásica - 20.785 kW" },
    { value: 24.249, label: "Trifásica - 24.249 kW" },
    { value: 27.713, label: "Trifásica - 27.713 kW" },
    { value: 31.177, label: "Trifásica - 31.177 kW" },
    { value: 34.641, label: "Trifásica - 34.641 kW" },
    { value: 43.648, label: "Trifásica - 43.648 kW" },
];

const groupedOptions = [
    {
        label: "Monofásica",
        options: singleFase,
    },
    {
        label: "Trifásica",
        options: threeFase,
    },
];

const More = ({ title }) => {
    const [open, setOpen] = useState(false);
    const [transitioned, setTransitioned] = useState(false);
    const [height, setHeight] = useState(0);

    const ref = useRef(null);

    const { proposal, setProposal } = useProposal();
    const { change, setChange, setUpdate } = useCalculator();

    const { values, errors } = useForm({
        kWhConsumedLastBill: "",
        contractedPowerInKW: "",
    });

    const handleChangeInput = (e) => {
        const { value, name } = e.target;

        setChange(!change);
        setProposal({
            ...proposal,
            consumption: {
                ...proposal.consumption,
                [name]: parseFloat(value),
                monthlyEnergyConsumption:
                    name === "kWhConsumedLastBill"
                        ? parseFloat(value)
                        : proposal.consumption.monthlyEnergyConsumption,
            },
        });
        setUpdate(true);
    };

    const handleChangeSelect = ({ value }) => {
        setChange(!change);
        setProposal({
            ...proposal,
            consumption: {
                ...proposal.consumption,
                contractedPowerInKW: value,
            },
        });
        setUpdate(true);
    };

    const selectedOption = groupedOptions
        .flatMap((group) => group.options)
        .find((option) => option.value === proposal.consumption.contractedPowerInKW);

    return (
        <MoreStyled>
            <Button
                onClick={() => {
                    setOpen(!open);
                    setHeight(open ? 0 : ref.current.scrollHeight);
                }}
                onTransitionEnd={() => {
                    setTransitioned(!transitioned);
                }}
                open={open}
            >
                <span>{title}</span>

                <ArrowDown />
            </Button>
            <Collapse ref={ref} open={open} transitioned={transitioned} collapseHeight={height}>
                <Container>
                    <Grid>
                        <Field>
                            <Label>Kwh consumidos</Label>
                            <Input
                                type="number"
                                placeholder="kWh consumidos"
                                name="kWhConsumedLastBill"
                                value={proposal.consumption.kWhConsumedLastBill}
                                error={errors.kWhConsumedLastBill.length > 0}
                                onChange={handleChangeInput}
                            />
                            {errors.kWhConsumedLastBill && (
                                <Error>{errors.kWhConsumedLastBill}</Error>
                            )}
                        </Field>

                        <Field>
                            <Label>Potencia contratada kW</Label>
                            <Select
                                value={selectedOption}
                                onChange={handleChangeSelect}
                                options={groupedOptions}
                                name="contractedPowerInKW"
                                styles={selectStyles(errors.contractedPowerInKW)}
                            />
                            {errors.contractedPowerInKW && (
                                <Error>{errors.contractedPowerInKW}</Error>
                            )}
                        </Field>
                    </Grid>
                </Container>
            </Collapse>
        </MoreStyled>
    );
};

export default More;
