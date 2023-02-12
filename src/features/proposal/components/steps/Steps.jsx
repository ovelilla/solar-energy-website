import { useState } from "react";
import { Navigation, Controller } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { StepsStyled, Container, Info, SlideContainer, Step, Circle } from "./styles";

const Steps = () => {
    const [infoSwiper, setInfoSwiper] = useState(null);
    const [stepsSwiper, setStepsSwiper] = useState(null);

    return (
        <StepsStyled>
            <Container>
                <h2>Proceso de instalación</h2>

                <div>
                    <Swiper
                        modules={[Controller]}
                        spaceBetween={48}
                        slidesPerView={1}
                        breakpoints={{
                            768: {
                                slidesPerView: 2,
                            },
                            1200: {
                                slidesPerView: 3,
                            },
                        }}
                        controller={{ control: stepsSwiper }}
                        onSwiper={setInfoSwiper}
                    >
                        <Info>
                            <SlideContainer>
                                <h3>Diseñamos tu instalación</h3>
                                <p>
                                    Con nuestro planificador podrá visualizar diseño en 3D de su
                                    futura instalación fotovoltaica antes de su aceptación de la
                                    propuesta.
                                </p>
                            </SlideContainer>
                        </Info>
                        <Info>
                            <SlideContainer>
                                <h3>Conformidad propuesta</h3>
                                <p>
                                    Una vez validado el diseño puede dar su conformidad y proceder a
                                    la firma del contrato. En este momento se efectúa para cubrir
                                    costes de visita (se descuenta del importe total de la propuesta
                                    en caso de ejecución).
                                </p>
                            </SlideContainer>
                        </Info>
                        <Info>
                            <SlideContainer>
                                <h3>Asignamos responsable de su instalación</h3>
                                <p>
                                    Asignamos responsable de su instalación que acudirá a su
                                    domicilio a realizar diseño y garantizar su viabilidad, que
                                    además le acompañara en todo el proceso de la instalación hasta
                                    su puesta en marcha.
                                </p>
                            </SlideContainer>
                        </Info>
                        <Info>
                            <SlideContainer>
                                <h3>Programación visita técnica</h3>
                                <p>
                                    En la visita técnica podrá resolver cualquier duda sobre la
                                    instalación.
                                </p>
                            </SlideContainer>
                        </Info>
                        <Info>
                            <SlideContainer>
                                <h3>Activación contrato</h3>
                                <p>
                                    Una vez confirmada la viabilidad de la instalación procedemos a
                                    activar el contrato. En este momento se procede a pago a cuenta
                                    de la instalación.
                                </p>
                            </SlideContainer>
                        </Info>
                        <Info>
                            <SlideContainer>
                                <h3>Redacción memoria técnica de su instalación</h3>
                                <p>
                                    En base a la visita realizada se procede al diseño y memoria
                                    técnica en base a la que se ejecutará la instalación.
                                </p>
                            </SlideContainer>
                        </Info>
                        <Info>
                            <SlideContainer>
                                <h3>Tramitamos permisos de obra</h3>
                                <p>
                                    Presentamos en el ayuntamiento de su localidad toda la
                                    documentación necesaria para la obtención de la autorización por
                                    parte del ayuntamiento a ejecutar la instalación. Las tasas no
                                    están incluidas.
                                </p>
                            </SlideContainer>
                        </Info>
                        <Info>
                            <SlideContainer>
                                <h3>Tramitamos su solicitud de ayudas</h3>
                                <p>
                                    Iniciamos el expediente para reserva de fondos de ayudas. Dicho
                                    expediente se cierra con la justificación de la inversión, tras
                                    su puesta en marcha.
                                </p>
                            </SlideContainer>
                        </Info>
                        <Info>
                            <SlideContainer>
                                <h3>Recepción de los materiales</h3>
                                <p>
                                    Recibe los materiales en su domicilio mediante transporte
                                    especial.
                                </p>
                            </SlideContainer>
                        </Info>
                        <Info>
                            <SlideContainer>
                                <h3>Planificamos su instalación</h3>
                                <p>
                                    Una vez dispone del material en su vivienda planificamos la
                                    instalación acorde a su disponibilidad.
                                </p>
                            </SlideContainer>
                        </Info>
                        <Info>
                            <SlideContainer>
                                <h3>Ejecución de la instalación</h3>
                                <p>
                                    Su responsable de instalación acudirá a su vivienda para
                                    encargarse de la ejecución de acuerdo a las condiciones
                                    acordadas en visita. Este proceso dura entre 1 y dos días
                                    aproximadamente.
                                </p>
                            </SlideContainer>
                        </Info>
                        <Info>
                            <SlideContainer>
                                <h3>Puesta en marcha</h3>
                                <p>
                                    El responsable de su instalación realza la puesta en marcha
                                    oficial y le explica el uso de la aplicación de monitorización.
                                </p>
                            </SlideContainer>
                        </Info>
                        <Info>
                            <SlideContainer>
                                <h3>Legalización</h3>
                                <p>
                                    Una vez operativa su instalación procedemos a su legalización y
                                    tramitamos su alta para poder compensar excedentes de energía.
                                </p>
                            </SlideContainer>
                        </Info>
                        <Info>
                            <SlideContainer>
                                <h3>Finalizamos tramitación de sus ayudas</h3>
                                <p>
                                    Finalizamos expediente de ayudas aportando la documentación
                                    necesaria conforme se justifica la inversión.
                                </p>
                            </SlideContainer>
                        </Info>
                    </Swiper>
                </div>

                <div>
                    <Swiper
                        modules={[Controller, Navigation]}
                        navigation
                        slidesPerView={1}
                        breakpoints={{
                            768: {
                                slidesPerView: 2,
                            },
                            1200: {
                                slidesPerView: 3,
                            },
                        }}
                        controller={{ control: infoSwiper }}
                        onSwiper={setStepsSwiper}
                    >
                        <Step>
                            <Circle>1</Circle>
                        </Step>
                        <Step>
                            <Circle>2</Circle>
                        </Step>
                        <Step>
                            <Circle>3</Circle>
                        </Step>
                        <Step>
                            <Circle>4</Circle>
                        </Step>
                        <Step>
                            <Circle>5</Circle>
                        </Step>
                        <Step>
                            <Circle>6</Circle>
                        </Step>
                        <Step>
                            <Circle>7</Circle>
                        </Step>
                        <Step>
                            <Circle>8</Circle>
                        </Step>
                        <Step>
                            <Circle>9</Circle>
                        </Step>
                        <Step>
                            <Circle>10</Circle>
                        </Step>
                        <Step>
                            <Circle>11</Circle>
                        </Step>
                        <Step>
                            <Circle>12</Circle>
                        </Step>
                        <Step>
                            <Circle>13</Circle>
                        </Step>
                        <Step>
                            <Circle>14</Circle>
                        </Step>
                    </Swiper>
                </div>
            </Container>
        </StepsStyled>
    );
};

export default Steps;
