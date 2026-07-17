import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaAws, FaGitAlt, FaDocker, FaPython } from 'react-icons/fa';
import { SiTypescript, SiJavascript, SiPostgresql, SiStyledcomponents } from 'react-icons/si';

const SkillsContainer = styled.section`
  padding: 8rem 5%;
  background-color: ${({ theme }) => theme.colors.surface};
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`;

const SectionTitle = styled.h2`
  font-size: 3.5rem;
  text-align: center;
  margin-bottom: 4rem;
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.typography.fontFamily};
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 2rem;
  text-align: center;
`;

const SkillCard = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 2rem;
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: ${({ theme }) => theme.borderRadius};
  border: 1px solid transparent; /* Initial transparent border */
  transition: transform 0.3s ease, background-color 0.3s ease, color 0.3s ease, border 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.background};
    border: 1px solid ${({ theme }) => theme.colors.primary}; /* Flash border on hover */
  }
`;

const SkillIcon = styled.div`
  font-size: 4rem;
`;

const SkillName = styled.p`
  font-weight: 500;
  font-family: ${({ theme }) => theme.typography.fontFamily};
`;

const skills = [
  { name: 'React', icon: <FaReact /> },
  { name: 'JavaScript (ES6+)', icon: <SiJavascript /> },
  { name: 'TypeScript', icon: <SiTypescript /> },
  { name: 'Node.js', icon: <FaNodeJs /> },
  { name: 'Python', icon: <FaPython /> },
  { name: 'PostgreSQL', icon: <SiPostgresql /> },
  { name: 'AWS', icon: <FaAws /> },
  { name: 'Docker', icon: <FaDocker /> },
  { name: 'Git & GitHub', icon: <FaGitAlt /> },
  { name: 'Styled-Components', icon: <SiStyledcomponents /> },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeInOut' } },
};

const Skills = () => {
  return (
    <SkillsContainer id="skills">
      <div className="container">
        <SectionTitle>My Tech Stack</SectionTitle>
        <SkillsGrid as={motion.div} variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}>
          {skills.map((skill, index) => (
            <SkillCard key={index} variants={cardVariants}>
              <SkillIcon>{skill.icon}</SkillIcon>
              <SkillName>{skill.name}</SkillName>
            </SkillCard>
          ))}
        </SkillsGrid>
      </div>
    </SkillsContainer>
  );
};

export default Skills;
