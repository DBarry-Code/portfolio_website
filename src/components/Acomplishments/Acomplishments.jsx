import React from "react";
import {
    Section,
    SectionDivider,
    SectionTitle,
} from "../../styles/GlobalComponents";
import { Box, Boxes, BoxNum, BoxText } from "./AcomplishmentsStyles";
import { data } from "../../constants/constants";

const Acomplishments = () => (
    <Section>
        <SectionTitle>Personal Acomplishments</SectionTitle>
        <Boxes>
            {data.map((item, index) => (
                <Box key={index}>
                    <BoxNum>{item.number}</BoxNum>
                    <BoxText>{item.text}</BoxText>
                </Box>
            ))}
        </Boxes>
    </Section>
);

export default Acomplishments;
