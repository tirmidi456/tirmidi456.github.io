import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ContactContainer = styled.section`
  padding: 8rem 5%;
`;

const SectionTitle = styled.h2`
  font-size: 3.5rem;
  text-align: center;
  margin-bottom: 4rem;
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.typography.fontFamily};
`;

const ContactForm = styled(motion.form)`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  max-width: 600px;
  margin: 0 auto;
`;

const Input = styled.input`
  padding: 1.2rem;
  background-color: ${({ theme }) => theme.colors.surface};
  border: 1px solid transparent;
  border-radius: ${({ theme }) => theme.borderRadius};
  color: ${({ theme }) => theme.colors.text};
  font-size: 1rem;
  font-family: ${({ theme }) => theme.typography.fontFamily};
  transition: border-color 0.3s ease, box-shadow 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: ${({ theme }) => theme.shadows.glow};
  }
`;

const TextArea = styled.textarea`
  padding: 1.2rem;
  background-color: ${({ theme }) => theme.colors.surface};
  border: 1px solid transparent;
  border-radius: ${({ theme }) => theme.borderRadius};
  color: ${({ theme }) => theme.colors.text};
  font-size: 1rem;
  resize: vertical;
  min-height: 150px;
  font-family: ${({ theme }) => theme.typography.fontFamily};
  transition: border-color 0.3s ease, box-shadow 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: ${({ theme }) => theme.shadows.glow};
  }
`;

const SubmitButton = styled(motion.button)`
  padding: 1.2rem 2rem;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.name === 'dark' ? theme.colors.background : '#fff'};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius};
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  font-family: ${({ theme }) => theme.typography.fontFamily};
  transition: background-color 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.name === 'dark' ? '#00c4d1' : '#d9004a'};
    box-shadow: ${({ theme }) => theme.shadows.glow}; /* Flash glow on hover */
  }
`;

const Contact = () => {
  return (
    <ContactContainer id="contact">
      <div className="container">
        <SectionTitle>Let's Connect</SectionTitle>
        <ContactForm
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
        >
          <Input type="text" placeholder="Your Name" required />
          <Input type="email" placeholder="Your Email" required />
          <TextArea placeholder="Your Message" required />
          <SubmitButton
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Send Message
          </SubmitButton>
        </ContactForm>
      </div>
    </ContactContainer>
  );
};

export default Contact;