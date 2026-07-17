import React, { useEffect, useState } from 'react';
import { motion, useReducedMotion, useScroll, useSpring } from 'framer-motion';
import {
  FiArrowUpRight,
  FiBriefcase,
  FiCode,
  FiGithub,
  FiLinkedin,
  FiMapPin,
  FiMoon,
  FiSun,
} from 'react-icons/fi';
import './App.css';

const PROFILE = {
  github: 'https://github.com/tirmidi456',
  linkedin: 'https://www.linkedin.com/in/tirmidi-mohamed',
  avatar: 'https://avatars.githubusercontent.com/u/94070811?v=4',
};

const experience = [
  {
    period: 'May 2026 — Present',
    title: 'Software Engineer II',
    detail: 'Full-time',
    copy: 'Building dependable software, learning the systems behind it, and contributing to products that operate at real-world scale.',
    current: true,
  },
  {
    period: 'Earlier experience',
    title: 'Cloud Software Engineering',
    detail: 'Internship',
    copy: 'Developed a foundation in cloud platforms, production engineering practices, collaboration, and turning requirements into working software.',
  },
  {
    period: 'Class of 2026',
    title: 'Iowa State University',
    detail: 'Software Engineering · Data Science',
    copy: 'Combined software engineering fundamentals with data-focused coursework and hands-on team projects.',
  },
];

const projects = [
  {
    number: '01',
    title: 'Portfolio System',
    description: 'A responsive personal site rebuilt around clear storytelling, purposeful motion, accessible interactions, and a deployment-ready React foundation.',
    tags: ['React', 'Framer Motion', 'Responsive UI'],
    href: 'https://github.com/tirmidi456/my-portfolio-app',
    linkLabel: 'View source',
    accent: 'violet',
  },
  {
    number: '02',
    title: 'Web Engineering Coursework',
    description: 'A collection of early web projects exploring interface structure, visual design, and the fundamentals of shipping for the browser.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    href: 'https://github.com/tirmidi456/personal',
    linkLabel: 'View repository',
    accent: 'orange',
  },
  {
    number: '03',
    title: 'Hospital ERP System',
    description: 'A Java-based enterprise application codebase used to explore modular system design, domain modeling, and team development workflows.',
    tags: ['Java', 'Enterprise Systems', 'Team Project'],
    href: 'https://github.com/tirmidi456/ERPHospitalSystem',
    linkLabel: 'View repository',
    accent: 'blue',
  },
];

const skillGroups = [
  { label: 'Languages', items: ['Java', 'Python', 'JavaScript', 'TypeScript'] },
  { label: 'Web & data', items: ['React', 'Node.js', 'REST APIs', 'PostgreSQL'] },
  { label: 'Cloud & tools', items: ['AWS', 'Docker', 'Git & GitHub', 'CI/CD'] },
];

function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem('portfolio-theme') || 'dark');
  const [menuOpen, setMenuOpen] = useState(false);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  const reveal = reduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 28 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.18 },
        transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
      };

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <motion.div className="scroll-progress" style={{ scaleX }} />

      <header className="site-header">
        <a className="brand" href="#top" aria-label="Tirmidi Mohamed, back to top" onClick={closeMenu}>
          <span>TM</span>
          <span className="brand-copy">Tirmidi Mohamed</span>
        </a>

        <button
          className="menu-button"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="site-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
          <span className="sr-only">Toggle navigation</span>
        </button>

        <nav id="site-navigation" className={menuOpen ? 'nav-links is-open' : 'nav-links'} aria-label="Primary navigation">
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#experience" onClick={closeMenu}>Experience</a>
          <a href="#work" onClick={closeMenu}>Work</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
        </nav>

        <button
          className="theme-button"
          type="button"
          aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          onClick={() => setTheme((value) => (value === 'dark' ? 'light' : 'dark'))}
        >
          {theme === 'dark' ? <FiSun /> : <FiMoon />}
        </button>
      </header>

      <main>
        <section className="hero" id="top">
          <div className="hero-grid" aria-hidden="true" />
          <div className="hero-glow hero-glow-one" aria-hidden="true" />
          <div className="hero-glow hero-glow-two" aria-hidden="true" />

          <motion.div
            className="hero-copy"
            initial={reduceMotion ? false : { opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="eyebrow"><span className="status-dot" /> Software Engineer II · Since May 2026</div>
            <h1>I build software that makes <em>complex things</em> feel simple.</h1>
            <p className="hero-intro">
              I’m Tirmidi Mohamed, a software engineer and recent Iowa State graduate focused on cloud platforms, full-stack products, and thoughtful user experiences.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">Explore my work <FiArrowUpRight /></a>
              <a className="button button-ghost" href={PROFILE.linkedin} target="_blank" rel="noreferrer">LinkedIn <FiLinkedin /></a>
            </div>
            <div className="hero-meta">
              <span><FiMapPin /> Des Moines, Iowa</span>
              <span><FiBriefcase /> Building in production</span>
            </div>
          </motion.div>

          <motion.aside
            className="profile-card"
            initial={reduceMotion ? false : { opacity: 0, scale: 0.94, rotate: 2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="profile-image-wrap">
              <img src={PROFILE.avatar} alt="Tirmidi Mohamed" />
              <span className="image-label">Hello, I’m Tirmidi.</span>
            </div>
            <div className="profile-card-footer">
              <div>
                <span className="micro-label">CURRENT FOCUS</span>
                <strong>Reliable systems.<br />Useful products.</strong>
              </div>
              <FiCode />
            </div>
          </motion.aside>

          <a className="scroll-cue" href="#about" aria-label="Scroll to about section">
            <span>Scroll</span><span className="scroll-line" />
          </a>
        </section>

        <section className="section section-about" id="about">
          <motion.div className="section-heading" {...reveal}>
            <span className="section-index">01 / ABOUT</span>
            <h2>Engineer by training.<br /><span>Problem-solver by nature.</span></h2>
          </motion.div>
          <motion.div className="about-layout" {...reveal}>
            <p className="about-lead">
              I care about the whole path from an idea to a dependable product: understanding the problem, designing a clear solution, writing maintainable code, and learning from how people actually use it.
            </p>
            <div className="about-details">
              <p>
                My background spans software engineering and data science, with hands-on experience across web development, cloud tooling, APIs, databases, and team-based delivery.
              </p>
              <p>
                I’m early in my professional journey and serious about the craft—curious, collaborative, and comfortable getting into the details when a system needs to work better.
              </p>
            </div>
          </motion.div>
        </section>

        <section className="section section-experience" id="experience">
          <motion.div className="section-heading compact" {...reveal}>
            <span className="section-index">02 / JOURNEY</span>
            <h2>Where I’ve been,<br /><span>and where I’m going.</span></h2>
          </motion.div>
          <div className="timeline">
            {experience.map((item, index) => (
              <motion.article className="timeline-item" key={item.title} {...reveal} transition={{ ...reveal.transition, delay: index * 0.06 }}>
                <div className="timeline-period">{item.period}</div>
                <div className="timeline-marker"><span className={item.current ? 'is-current' : ''} /></div>
                <div className="timeline-content">
                  <div className="timeline-title-row">
                    <h3>{item.title}</h3>
                    <span>{item.detail}</span>
                  </div>
                  <p>{item.copy}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="section section-work" id="work">
          <motion.div className="section-heading" {...reveal}>
            <span className="section-index">03 / SELECTED WORK</span>
            <h2>Projects with a<br /><span>story behind them.</span></h2>
          </motion.div>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <motion.a
                className={`project-card accent-${project.accent}`}
                href={project.href}
                target="_blank"
                rel="noreferrer"
                key={project.title}
                {...reveal}
                transition={{ ...reveal.transition, delay: index * 0.08 }}
              >
                <div className="project-topline">
                  <span>{project.number}</span>
                  <FiArrowUpRight />
                </div>
                <div className="project-visual" aria-hidden="true">
                  <span className="project-orbit orbit-one" />
                  <span className="project-orbit orbit-two" />
                  <span className="project-monogram">{project.title.split(' ').map((word) => word[0]).join('').slice(0, 2)}</span>
                </div>
                <div className="project-copy">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <ul className="tag-list" aria-label="Technologies">
                    {project.tags.map((tag) => <li key={tag}>{tag}</li>)}
                  </ul>
                  <span className="project-link-label">{project.linkLabel} <FiArrowUpRight /></span>
                </div>
              </motion.a>
            ))}
          </div>
        </section>

        <section className="section section-skills" id="skills">
          <motion.div className="skills-intro" {...reveal}>
            <span className="section-index">04 / TOOLBOX</span>
            <h2>Tools I reach for.</h2>
            <p>The stack changes with the problem. These are the technologies currently at the center of my work and learning.</p>
          </motion.div>
          <div className="skill-groups">
            {skillGroups.map((group, index) => (
              <motion.div className="skill-group" key={group.label} {...reveal} transition={{ ...reveal.transition, delay: index * 0.06 }}>
                <span>{group.label}</span>
                <ul>
                  {group.items.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="section section-contact" id="contact">
          <motion.div className="contact-card" {...reveal}>
            <span className="section-index">05 / CONNECT</span>
            <h2>Let’s build something<br /><em>worth using.</em></h2>
            <p>I’m always glad to meet thoughtful engineers, builders, and people working on interesting problems. LinkedIn is the fastest way to reach me.</p>
            <div className="contact-actions">
              <a className="button button-light" href={PROFILE.linkedin} target="_blank" rel="noreferrer">Connect on LinkedIn <FiArrowUpRight /></a>
              <a className="social-button" href={PROFILE.github} target="_blank" rel="noreferrer" aria-label="Visit Tirmidi's GitHub"><FiGithub /></a>
            </div>
          </motion.div>
        </section>
      </main>

      <footer className="site-footer">
        <p>Designed &amp; built by Tirmidi Mohamed.</p>
        <div>
          <a href={PROFILE.github} target="_blank" rel="noreferrer">GitHub</a>
          <a href={PROFILE.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="#top">Back to top ↑</a>
        </div>
        <span>© {new Date().getFullYear()}</span>
      </footer>
    </div>
  );
}

export default App;
