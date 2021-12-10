import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";

import { SocialIcons } from "../Header/HeaderStyles";
import {
    CompanyContainer,
    FooterWrapper,
    LinkColumn,
    LinkItem,
    LinkList,
    LinkTitle,
    Slogan,
    SocialContainer,
    SocialIconsContainer,
} from "./FooterStyles";

const Footer = () => {
    return (
        <FooterWrapper>
            <LinkList>
                <LinkColumn>
                    <LinkTitle>Call</LinkTitle>
                    <LinkItem href='tel:+4915122383816'>
                        +4915122383816
                    </LinkItem>
                </LinkColumn>
                <LinkColumn>
                    <LinkTitle>Email</LinkTitle>
                    <LinkItem href='mailto:d.barry@gmx.de'>
                        d.bartek@gmx.de
                    </LinkItem>
                </LinkColumn>
            </LinkList>
            <SocialIconsContainer>
                <CompanyContainer>
                    <Slogan>Innovating one project at a time</Slogan>
                </CompanyContainer>
                <SocialContainer>
                    <SocialIcons
                        href='https://github.com/DBarry-Code'
                        target='_blank'
                    >
                        <AiFillGithub size='3rem' />
                    </SocialIcons>
                    <SocialIcons
                        href='https://www.linkedin.com/in/bartlomiej-dabrowski/'
                        target='_blank'
                    >
                        <AiFillLinkedin size='3rem' />
                    </SocialIcons>
                    <SocialIcons
                        href='https://www.instagram.com/d_barry81/'
                        target='_blank'
                    >
                        <AiFillInstagram size='3rem' />
                    </SocialIcons>
                </SocialContainer>
            </SocialIconsContainer>
        </FooterWrapper>
    );
};

export default Footer;
