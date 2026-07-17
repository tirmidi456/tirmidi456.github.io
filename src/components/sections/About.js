import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const AboutContainer = styled.section`
  padding: 8rem 5%;
  background-color: ${({ theme }) => theme.colors.surface};
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;

const AboutGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 4rem;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ProfileImage = styled(motion.img)`
  width: 100%;
  max-width: 300px;
  border-radius: ${({ theme }) => theme.borderRadius};
  border: 5px solid ${({ theme }) => theme.colors.primary};
  justify-self: center;
  box-shadow: ${({ theme }) => theme.shadows.card};
`;

const AboutText = styled(motion.div)``;

const SectionTitle = styled.h2`
  font-size: 3.5rem;
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.typography.fontFamily};
`;

const AboutParagraph = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 1.5rem;
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.typography.fontFamily};
`;

const About = () => {
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeInOut' } },
  };

  return (
    <AboutContainer id="about">
      <div className="container">
        <AboutGrid>
          <ProfileImage
            src="https://via.placeholder.com/300"
            alt="Tirmidi Mohamed"
            variants={variants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          />
          <AboutText
            variants={variants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
            <SectionTitle>About Me</SectionTitle>
            <AboutParagraph>I am a software engineer with a passion for building elegant, high-performance web applications. My expertise lies in the intersection of design and technology, and I thrive on creating intuitive, user-centric experiences. I am a lifelong learner, constantly exploring new technologies and methodologies to push the boundaries of what's possible on the web.</AboutParagraph>
            <AboutParagraph>Beyond the code, I am a design enthusiast, a student of typography, and a firm believer in the power of simplicity. I am currently seeking opportunities to collaborate with a talented team on challenging and impactful projects.</AboutParagraph>
          </AboutText>
        </AboutGrid>
      </div>
    </AboutContainer>
  );
};

export default About;
