import { useEffect, useState } from 'react';

export const palettes = [
  {
    id: 'noir',
    label: 'Noir',
    swatches: { dark: '#ff2d00', light: '#e02600' },
  },
  {
    id: 'newspaper',
    label: 'Newspaper',
    swatches: { dark: '#b0a898', light: '#3d3328' },
  },
  {
    id: 'sepia',
    label: 'Sepia',
    swatches: { dark: '#d47240', light: '#a84e22' },
  },
  {
    id: 'blueprint',
    label: 'Blueprint',
    swatches: { dark: '#29d4ff', light: '#005f7a' },
  },
  {
    id: 'forest',
    label: 'Forest',
    swatches: { dark: '#5cc47e', light: '#246b3e' },
  },
];

export function useTheme() {
  const [palette, setPalette] = useState(
    () => localStorage.getItem('palette') || 'noir'
  );
  const [mode, setMode] = useState(
    () => localStorage.getItem('mode') || 'dark'
  );

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', `${palette}-${mode}`);
    localStorage.setItem('palette', palette);
    localStorage.setItem('mode', mode);
  }, [palette, mode]);

  const toggleMode = () => setMode(m => m === 'dark' ? 'light' : 'dark');

  return { palette, setPalette, mode, toggleMode };
}
