'use client';

import { createContext, useMemo, useState } from 'react';

export type PageThemes = 'dark' | 'light' | 'xmas';

type Theme = {
  setTheme: React.Dispatch<React.SetStateAction<PageThemes>>;
  theme: PageThemes;
};

export const ThemeContext = createContext<Theme>({
  theme: 'dark',
  setTheme: () => {},
});

export const Providers = ({ children }: React.PropsWithChildren) => {
  const [theme, setTheme] = useState<PageThemes>('dark');

  const themeProviderValue = useMemo(() => ({ theme, setTheme }), [theme, setTheme]);
  return <ThemeContext.Provider value={themeProviderValue}>{children}</ThemeContext.Provider>;
};
