import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectsContainer = styled.section`
  padding: 8rem 5%;
`;

const SectionTitle = styled.h2`
  font-size: 3.5rem;
  text-align: center;
  margin-bottom: 4rem;
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.typography.fontFamily};
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
`;

const ProjectCard = styled(motion.div)`
  background-color: ${({ theme }) => theme.colors.surface};
  border-radius: ${({ theme }) => theme.borderRadius};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadows.card};
  transition: transform 0.3s ease, box-shadow 0.3s ease, border 0.3s ease;
  border: 1px solid transparent; /* Initial transparent border */

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
    border: 1px solid ${({ theme }) => theme.colors.primary}; /* Flash border on hover */
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
`;

const ProjectContent = styled.div`
  padding: 1.5rem;
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  font-family: ${({ theme }) => theme.typography.fontFamily};
`;

const ProjectDescription = styled.p`
  margin-bottom: 1.5rem;
  font-family: ${({ theme }) => theme.typography.fontFamily};
`;

const ProjectLinks = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
`;

const ProjectLink = styled.a`
  color: ${({ theme }) => theme.colors.subtext};
  font-size: 1.5rem;
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const projects = [
  {
    title: 'Project Alpha',
    description: 'A scalable, server-rendered e-commerce platform built with Next.js and TypeScript. Features a custom CMS, real-time inventory management, and a Stripe integration.',
    image: 'https://picsum.photos/seed/projectAlpha/400/300',
    github: '#',
    live: '#',
  },
  {
    title: 'Project Beta',
    description: 'A high-performance data visualization dashboard using React and D3.js. Capable of rendering millions of data points with smooth, interactive animations.',
    image: 'https://picsum.photos/seed/projectBeta/400/300',
    github: '#',
    live: '#',
  },
  {
    title: 'Project Gamma',
    description: 'A real-time collaborative editor built with WebSockets, CRDTs, and React. Allows for simultaneous document editing with presence indicators and version history.',
    image: 'https://picsum.photos/seed/projectGamma/400/300',
    github: '#',
    live: '#',
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeInOut' } },
};

const Projects = () => {
  return (
    <ProjectsContainer id="projects">
      <div className="container">
        <SectionTitle>Selected Work</SectionTitle>
        <ProjectsGrid as={motion.div} variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}>
          {projects.map((project, index) => (
            <ProjectCard key={index} variants={cardVariants}>
              <ProjectImage src={project.image} alt={project.title} />
              <ProjectContent>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDescription>{project.description}</ProjectDescription>
                <ProjectLinks>
                  <ProjectLink href={project.github} target="_blank" rel="noopener noreferrer"><FaGithub /></ProjectLink>
                  <ProjectLink href={project.live} target="_blank" rel="noopener noreferrer"><FaExternalLinkAlt /></ProjectLink>
                </ProjectLinks>
              </ProjectContent>
            </ProjectCard>
          ))}
        </ProjectsGrid>
      </div>
    </ProjectsContainer>
  );
};

export default Projects;