import { useState } from "react";
import { Slide, Step, Title, Text, Form, Field, Label, Input, Error, Notice, Back } from "./styles";
import Modal from "@features/ui/modal";
import { Primary } from "@features/ui/button";
import IconButton from "@features/ui/iconbutton";
import ArrowLeft from "@shared/icons/ArrowLeft";
import useForm from "@hooks/useForm";
import { ThemeProvider } from "@mui/material/styles";
import { LocalizationProvider, esES } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import "dayjs/locale/es";
import { StaticDateTimePicker } from "@mui/x-date-pickers/StaticDateTimePicker";
import Theme from "./Theme";
import dayjs from "dayjs";
import axios from "@config/axios";
import useProposal from "@hooks/useProposal";

dayjs.locale("es");

const SendProposal = ({ open, onClose }) => {
    const [step, setStep] = useState(1);

    const { proposal } = useProposal();
    const { values, errors, setValue, setError, setFormErrors, handleChange } = useForm({
        name: "",
        surname: "",
        email: "",
        phone: "",
        date: null,
    });

    const validDate = () => {
        const today = new Date();

        const newDate = new Date(today);
        newDate.setDate(today.getDate() + 15);

        const options = {
            dateStyle: "long",
        };

        return new Intl.DateTimeFormat("es-ES", options).format(newDate);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const handleNext = (e) => {
        const errors = {};

        if (!values.name) {
            errors.name = "El nombre es obligatorio";
        }

        if (!values.surname) {
            errors.surname = "Los apellidos son obligatorios";
        }

        if (!values.email) {
            errors.email = "El email es obligatorio";
        }

        if (!values.phone) {
            errors.phone = "El teléfono es obligatorio";
        }

        if (Object.keys(errors).length > 0) {
            setFormErrors(errors);
            return;
        }

        setStep(2);
    };

    const handleSend = async (e) => {
        const errors = {};

        if (!values.date) {
            errors.date = "La fecha es obligatoria";
        }

        if (Object.keys(errors).length > 0) {
            setFormErrors(errors);
            return;
        }

        try {
            const response = await axios.put(`/proposal/${proposal._id}/request`, values);

            console.log(response);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <Modal open={open} onClose={onClose}>
            <Slide>
                <Step active={step === 1}>
                    <Title>Mándadme la propuesta</Title>

                    <Text>
                        Rellene sus datos a continuación. Precios válidos hasta el {validDate()}.
                    </Text>

                    <Form onSubmit={handleSubmit}>
                        <Field>
                            <Label>Nombre</Label>
                            <Input
                                type="text"
                                placeholder="Nombre"
                                name="name"
                                value={values.name}
                                error={errors.name.length > 0}
                                onChange={handleChange}
                            />
                            {errors.name && <Error>{errors.name}</Error>}
                        </Field>

                        <Field>
                            <Label>Apellidos</Label>
                            <Input
                                type="text"
                                placeholder="Apellidos"
                                name="surname"
                                value={values.surname}
                                error={errors.surname.length > 0}
                                onChange={handleChange}
                            />
                            {errors.surname && <Error>{errors.surname}</Error>}
                        </Field>

                        <Field>
                            <Label>Correo electrónico</Label>
                            <Input
                                type="email"
                                placeholder="Correo electrónico"
                                name="email"
                                value={values.email}
                                error={errors.email.length > 0}
                                onChange={handleChange}
                            />
                            {errors.email && <Error>{errors.email}</Error>}
                        </Field>

                        <Field>
                            <Label>Teléfono</Label>
                            <Input
                                type="tel"
                                placeholder="Teléfono"
                                name="phone"
                                value={values.phone}
                                error={errors.phone.length > 0}
                                onChange={handleChange}
                            />
                            {errors.phone && <Error>{errors.phone}</Error>}
                        </Field>

                        <Primary type="button" onClick={handleNext}>
                            Agendar llamada
                        </Primary>

                        <Notice>
                            Al enviar sus datos, acepta nuestra política de privacidad y cookies.
                            Las llamadas pueden ser grabadas para formación y/o control de calidad.
                            Para más información visita nuestra Política de Privacidad en esta
                            página.
                        </Notice>
                    </Form>
                </Step>

                <Step active={step === 1}>
                    <Title>
                        <Back>
                            <IconButton onClick={() => setStep(1)}>
                                <ArrowLeft />
                            </IconButton>
                        </Back>
                        Agendar llamada
                    </Title>

                    <Text>Seleccione la fecha y hora en la que desea que le llamemos.</Text>

                    <ThemeProvider theme={Theme}>
                        <LocalizationProvider
                            dateAdapter={AdapterDayjs}
                            adapterLocale={"es"}
                            localeText={
                                esES.components.MuiLocalizationProvider.defaultProps.localeText
                            }
                        >
                            <StaticDateTimePicker
                                slotProps={{
                                    actionBar: {
                                        actions: [],
                                    },
                                }}
                                localeText={{ toolbarTitle: "" }}
                                slots={{
                                    toolbar: CustomToolbarComponent,
                                }}
                                value={dayjs(values.date)}
                                onChange={(date) => {
                                    setValue("date", date.format());
                                    setError("date", "");
                                }}
                            />
                        </LocalizationProvider>
                    </ThemeProvider>

                    {errors.date && <Error>{errors.date}</Error>}

                    <Primary type="button" onClick={handleSend}>
                        Enviar
                    </Primary>

                    <Notice>
                        Al enviar sus datos, acepta nuestra política de privacidad y cookies. Las
                        llamadas pueden ser grabadas para formación y/o control de calidad. Para más
                        información visita nuestra Política de Privacidad en esta página.
                    </Notice>
                </Step>
            </Slide>
        </Modal>
    );
};

export default SendProposal;

import styled from "@emotion/styled";
import { gray } from "@shared/styles/colors";

const CustomToolbarComponent = (props) => {
    const Container = styled.div`
        grid-column: 2/4;
        grid-row: 1;
        display: flex;
        justify-content: space-between;
    `;

    const Text = styled.div`
        font-size: 24px;
        font-weight: 500;
        color: ${gray[900]};
    `;

    return (
        <Container>
            <Text>{props.value ? props.value.format("DD [de] MMMM") : "--"}</Text>
            <Text>{props.value ? props.value.format("HH:mm") : "--:--"}</Text>
        </Container>
    );
};
