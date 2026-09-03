'use client';

import { createContext, useContext, useEffect, useState } from 'react';

/**
 * Styrer headerens tekstfarve, når den ligger transparent øverst på siden.
 * 'light' = lys tekst (bruges over mørke heroes), 'dark' = mørk tekst (lyse heroes).
 * Hver side sætter selv sin variant via <SetHeaderTheme>, så navigation altid er korrekt.
 */
type Theme = 'light' | 'dark';

const HeaderThemeContext = createContext<{ theme: Theme; setTheme: (t: Theme) => void }>({
  theme: 'light',
  setTheme: () => {},
});

export function HeaderThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('light');
  return <HeaderThemeContext.Provider value={{ theme, setTheme }}>{children}</HeaderThemeContext.Provider>;
}

export function useHeaderTheme() {
  return useContext(HeaderThemeContext).theme;
}

/** Placeres i toppen af en side for at angive headerens variant over dens hero. */
export function SetHeaderTheme({ theme }: { theme: Theme }) {
  const { setTheme } = useContext(HeaderThemeContext);
  useEffect(() => {
    setTheme(theme);
  }, [theme, setTheme]);
  return null;
}
