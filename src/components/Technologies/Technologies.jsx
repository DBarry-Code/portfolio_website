import React from "react";
import { DiFirebase, DiReact } from "react-icons/di";
import { SiAdobexd } from "react-icons/si";
import {
    Section,
    SectionDivider,
    SectionText,
    SectionTitle,
} from "../../styles/GlobalComponents";
import {
    List,
    ListContainer,
    ListItem,
    ListParagraph,
    ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
    <Section id='tech'>
        <SectionDivider />
        <br />
        <SectionTitle>Technologies</SectionTitle>
        <SectionText>
            I've worked with a rage a technologies in the web developoment
            world. From Back-end to Design
        </SectionText>
        <List>
            <ListItem>
                <DiReact size='3rem' />
                <ListContainer>
                    <ListTitle>Front-End</ListTitle>
                    <ListParagraph>
                        Experience with <br />
                        React <br />
                        Next.js <br />
                        Vue <br />
                        jQuery <br />
                        javaScript <br />
                        Handelbars
                    </ListParagraph>
                </ListContainer>
            </ListItem>
            <ListItem>
                <DiFirebase size='3rem' />
                <ListContainer>
                    <ListTitle>Back-End</ListTitle>
                    <ListParagraph>
                        Experience with <br />
                        Node <br />
                        Express <br />
                        Firebase <br />
                        Postsql <br />
                        MongoDB <br />
                    </ListParagraph>
                </ListContainer>
            </ListItem>
            <ListItem>
                <SiAdobexd size='3rem' />
                <ListContainer>
                    <ListTitle>UI/UX</ListTitle>
                    <ListParagraph>
                        Experience with <br />
                        ADOBE XD / Figma
                    </ListParagraph>
                </ListContainer>
            </ListItem>
        </List>
    </Section>
);

export default Technologies;
