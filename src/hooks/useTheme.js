import { useEffect, useState } from 'react';

export const palettes = [
  { id: 'noir',      label: 'Noir',      swatch: '#ff2d00' },
  { id: 'newspaper', label: 'Newspaper', swatch: '#8a7f6e' },
  { id: 'sepia',     label: 'Sepia',     swatch: '#c0622f' },
  { id: 'blueprint', label: 'Blueprint', swatch: '#00c8ff' },
  { id: 'forest',    label: 'Forest',    swatch: '#4caf6e' },
];

export function useTheme() {
  const [palette, setPalette] = useState(
    () => localStorage.getItem('palette') || 'noir'
  );
  const [mode, setMode] = useState(
    () => localStorage.getItem('mode') || 'dark'
  );

  useEffect(() => {
    // data-theme="noir-dark", "noir-light", "sepia-dark", etc.
    document.documentElement.setAttribute('data-theme', `${palette}-${mode}`);
    localStorage.setItem('palette', palette);
    localStorage.setItem('mode', mode);
  }, [palette, mode]);

  const toggleMode = () => setMode(m => m === 'dark' ? 'light' : 'dark');

  return { palette, setPalette, mode, toggleMode };
}
