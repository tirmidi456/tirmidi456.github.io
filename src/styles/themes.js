export const noirTheme = {
  name: 'dark',
  colors: {
    primary: '#00f2ff',
    background: '#101010',
    surface: '#1a1a1a',
    text: '#e0e0e0',
    header: '#ffffff',
    subtext: '#a0a0a0',
  },
  typography: {
    fontFamily: `'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif`,
  },
  borderRadius: '12px',
  shadows: {
    card: '0 10px 30px rgba(0, 0, 0, 0.5)',
    glow: `0 0 15px rgba(0, 242, 255, 0.3), 0 0 5px rgba(0, 242, 255, 0.2)`,
  },
  transitionSpeed: '0.3s',
};

export const brutalistTheme = {
  name: 'light',
  colors: {
    primary: '#ff0055',
    background: '#f0f0f0',
    surface: '#ffffff',
    text: '#1a1a1a',
    header: '#000000',
    subtext: '#555555',
  },
  typography: {
    fontFamily: `'Roboto Mono', monospace`,
  },
  borderRadius: '0px',
  shadows: {
    card: '8px 8px 0px #b5b5b5',
    glow: 'none',
  },
  transitionSpeed: '0.2s',
};
