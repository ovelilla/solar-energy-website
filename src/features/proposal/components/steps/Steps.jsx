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
                        onSlideChange={() => console.log("slide change")}
                    >
                        <Info>
                            <SlideContainer>
                                <h3>Etapa 1</h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                                    euismod consectetur nisl, sit amet tincidunt nisl. Sed euismod
                                    consectetur nisl, sit amet tincidunt nisl.
                                </p>
                            </SlideContainer>
                        </Info>
                        <Info>
                            <SlideContainer>
                                <h3>Etapa 2</h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                                    euismod consectetur nisl, sit amet tincidunt nisl. Sed euismod
                                    consectetur nisl, sit amet tincidunt nisl.
                                </p>
                            </SlideContainer>
                        </Info>
                        <Info>
                            <SlideContainer>
                                <h3>Etapa 3</h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                                    euismod consectetur nisl, sit amet tincidunt nisl. Sed euismod
                                    consectetur nisl, sit amet tincidunt nisl.
                                </p>
                            </SlideContainer>
                        </Info>
                        <Info>
                            <SlideContainer>
                                <h3>Etapa 4</h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                                    euismod consectetur nisl, sit amet tincidunt nisl. Sed euismod
                                    consectetur nisl, sit amet tincidunt nisl.
                                </p>
                            </SlideContainer>
                        </Info>
                    </Swiper>
                </div>

                <div>
                    <Swiper
                        modules={[Controller]}
                        // spaceBetween={50}
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
                        onSlideChange={() => console.log("slide change")}
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
                    </Swiper>
                </div>
            </Container>
        </StepsStyled>
    );
};

export default Steps;
