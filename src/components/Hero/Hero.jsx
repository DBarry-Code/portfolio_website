import React from "react";

import {
    Section,
    SectionText,
    SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = () => (
    <Section row nopadding>
        <LeftSection>
            <SectionTitle main center>
                Hi i am Barry... <br />
                Welcome to my Portfoilo
            </SectionTitle>
            <SectionText>
                Hier Text Rein schreiben wer man ist und was man so macht
            </SectionText>
            <Button onClick={() => (window.location = "https://google.com")}>
                My CV in German
            </Button>
        </LeftSection>
    </Section>
);

export default Hero;
