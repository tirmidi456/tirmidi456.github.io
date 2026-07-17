import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --primary-color: #00f2ff; /* A vibrant, modern blue */
    --background-color: #101010; /* A deep, near-black for a premium feel */
    --surface-color: #1a1a1a; /* For cards and elevated surfaces */
    --text-color: #e0e0e0; /* Soft white for readability */
    --header-color: #ffffff;
    --subtext-color: #a0a0a0; /* For less important text */
    --border-radius: 12px;
    --transition-speed: 0.3s;
  }

  body {
    background-color: var(--background-color);
    color: var(--text-color);
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    line-height: 1.6;
    overflow-x: hidden; /* Prevent horizontal scroll */
    position: relative;

    &::before {
      content: '';
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(0, 242, 255, 0.05) 0%, transparent 30%);
      pointer-events: none;
      z-index: -1;
      transition: background 0.1s ease-out; /* Smooth transition for mouse movement */
    }
  }

  h1, h2, h3, h4, h5, h6 {
    color: var(--header-color);
    font-weight: 700;
    letter-spacing: -0.5px;
  }

  p {
    color: var(--text-color);
    margin-bottom: 1rem;
  }

  a {
    color: var(--primary-color);
    text-decoration: none;
    transition: color var(--transition-speed) ease;

    &:hover {
      color: #00b3cc; /* Slightly darker primary color for hover */
    }
  }

  .container {
    width: 90%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem 0;
  }
`;

export default GlobalStyle;
