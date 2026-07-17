import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const FooterContainer = styled.footer`
  padding: 2rem 5%;
  text-align: center;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  margin-top: 4rem;
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-bottom: 1rem;
`;

const SocialIcon = styled.a`
  color: ${({ theme }) => theme.colors.subtext};
  font-size: 1.5rem;
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const Copyright = styled.p`
  color: ${({ theme }) => theme.colors.subtext};
  font-size: 0.9rem;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <SocialLinks>
        <SocialIcon href="https://github.com" target="_blank" rel="noopener noreferrer"><FaGithub /></SocialIcon>
        <SocialIcon href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></SocialIcon>
        <SocialIcon href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></SocialIcon>
      </SocialLinks>
      <Copyright>&copy; {new Date().getFullYear()} Tirmidi Mohamed. All rights reserved.</Copyright>
    </FooterContainer>
  );
};

export default Footer;
