import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

const HeaderContainer = styled(motion.header)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 5%;
  background: rgba(18, 18, 18, 0.8);
  backdrop-filter: blur(10px);
  z-index: 1000;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.header};
`;

const Nav = styled.nav`
  display: flex;
  gap: 2rem;
`;

const NavLink = styled(Link)`
  color: ${({ theme }) => theme.colors.text};
  text-decoration: none;
  font-weight: 500;
  position: relative;
  cursor: pointer;
  transition: color 0.3s ease;

  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.primary};
    transition: width 0.3s ease;
  }

  &:hover, &.active {
    color: ${({ theme }) => theme.colors.primary};
    &::after {
      width: 100%;
    }
  }
`;

const Header = () => {
  return (
    <HeaderContainer
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <Logo>TM</Logo>
      <Nav>
        <NavLink to="about" smooth={true} duration={500} spy={true} activeClass="active">About</NavLink>
        <NavLink to="projects" smooth={true} duration={500} spy={true} activeClass="active">Projects</NavLink>
        <NavLink to="skills" smooth={true} duration={500} spy={true} activeClass="active">Skills</NavLink>
        <NavLink to="contact" smooth={true} duration={500} spy={true} activeClass="active">Contact</NavLink>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;