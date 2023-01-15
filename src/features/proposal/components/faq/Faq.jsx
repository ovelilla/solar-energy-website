import { useState } from "react";
import { FaqStyled, Container, Questions, QuestionContainer } from "./styles";
import Question from "./Question";

const Faq = () => {
    const [activeIndex, setActiveIndex] = useState(-1);

    const handleClick = (index) => {
        if (activeIndex === index) {
            setActiveIndex(-1);
        } else {
            setActiveIndex(index);
        }
    };

    return (
        <FaqStyled>
            <Container>
                <h2>Preguntas frecuentes</h2>

                <Questions>
                    <Question
                        title="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
                        onClick={() => handleClick(0)}
                        open={activeIndex === 0}
                    >
                        <QuestionContainer>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                bibendum ut erat eu sollicitudin. Maecenas tristique quam et
                                elementum maximus. Aliquam sem erat, imperdiet porttitor turpis ac,
                                convallis interdum quam.
                            </p>
                            <p>
                                Nam ullamcorper dui ac risus molestie faucibus. Proin scelerisque
                                volutpat urna, ut gravida arcu semper sed. Phasellus dapibus
                                vulputate ligula, quis pellentesque erat. Nunc pharetra massa id
                                eros consequat, ultrices viverra ex facilisis. Praesent bibendum
                                condimentum luctus.
                            </p>
                        </QuestionContainer>
                    </Question>

                    <Question
                        title="Nam ullamcorper dui ac risus molestie faucibus"
                        onClick={() => handleClick(1)}
                        open={activeIndex === 1}
                    >
                        <QuestionContainer>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                bibendum ut erat eu sollicitudin. Maecenas tristique quam et
                                elementum maximus. Aliquam sem erat, imperdiet porttitor turpis ac,
                                convallis interdum quam.
                            </p>
                            <p>
                                Nam ullamcorper dui ac risus molestie faucibus. Proin scelerisque
                                volutpat urna, ut gravida arcu semper sed. Phasellus dapibus
                                vulputate ligula, quis pellentesque erat. Nunc pharetra massa id
                                eros consequat, ultrices viverra ex facilisis. Praesent bibendum
                                condimentum luctus.
                            </p>
                            <p>
                                Nam rhoncus consequat magna eu varius. Suspendisse tempus posuere
                                dignissim. Praesent cursus pellentesque sapien et dictum. Donec
                                lorem ipsum, posuere at rutrum eu, tristique et elit. Maecenas eu
                                arcu volutpat, tempor quam in, laoreet velit. Duis tempor nisi ut
                                facilisis lobortis. Nam at eros a ex consectetur dictum. Etiam
                                vestibulum viverra condimentum. Donec et aliquet massa. Integer non
                                ullamcorper velit. Vivamus scelerisque sodales mattis.
                            </p>
                        </QuestionContainer>
                    </Question>

                    <Question
                        title="Aliquam sem erat, imperdiet porttitor turpis ac"
                        onClick={() => handleClick(2)}
                        open={activeIndex === 2}
                    >
                        <QuestionContainer>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                bibendum ut erat eu sollicitudin. Maecenas tristique quam et
                                elementum maximus. Aliquam sem erat, imperdiet porttitor turpis ac,
                                convallis interdum quam.
                            </p>
                            <p>
                                Nam ullamcorper dui ac risus molestie faucibus. Proin scelerisque
                                volutpat urna, ut gravida arcu semper sed. Phasellus dapibus
                                vulputate ligula, quis pellentesque erat. Nunc pharetra massa id
                                eros consequat, ultrices viverra ex facilisis. Praesent bibendum
                                condimentum luctus.
                            </p>
                        </QuestionContainer>
                    </Question>

                    <Question
                        title="Phasellus dapibus vulputate ligula, quis pellentesque erat"
                        onClick={() => handleClick(3)}
                        open={activeIndex === 3}
                    >
                        <QuestionContainer>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                bibendum ut erat eu sollicitudin. Maecenas tristique quam et
                                elementum maximus. Aliquam sem erat, imperdiet porttitor turpis ac,
                                convallis interdum quam.
                            </p>
                            <p>
                                Nam ullamcorper dui ac risus molestie faucibus. Proin scelerisque
                                volutpat urna, ut gravida arcu semper sed. Phasellus dapibus
                                vulputate ligula, quis pellentesque erat. Nunc pharetra massa id
                                eros consequat, ultrices viverra ex facilisis. Praesent bibendum
                                condimentum luctus.
                            </p>

                            <p>
                                Nam rhoncus consequat magna eu varius. Suspendisse tempus posuere
                                dignissim. Praesent cursus pellentesque sapien et dictum. Donec
                                lorem ipsum, posuere at rutrum eu, tristique et elit. Maecenas eu
                                arcu volutpat, tempor quam in, laoreet velit. Duis tempor nisi ut
                                facilisis lobortis. Nam at eros a ex consectetur dictum. Etiam
                                vestibulum viverra condimentum. Donec et aliquet massa. Integer non
                                ullamcorper velit. Vivamus scelerisque sodales mattis.
                            </p>
                        </QuestionContainer>
                    </Question>

                    <Question
                        title="Maecenas tristique quam et elementum maximus"
                        onClick={() => handleClick(4)}
                        open={activeIndex === 4}
                    >
                        <QuestionContainer>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                bibendum ut erat eu sollicitudin. Maecenas tristique quam et
                                elementum maximus. Aliquam sem erat, imperdiet porttitor turpis ac,
                                convallis interdum quam.
                            </p>
                            <p>
                                Nam ullamcorper dui ac risus molestie faucibus. Proin scelerisque
                                volutpat urna, ut gravida arcu semper sed. Phasellus dapibus
                                vulputate ligula, quis pellentesque erat. Nunc pharetra massa id
                                eros consequat, ultrices viverra ex facilisis. Praesent bibendum
                                condimentum luctus.
                            </p>
                        </QuestionContainer>
                    </Question>
                </Questions>
            </Container>
        </FaqStyled>
    );
};

export default Faq;
