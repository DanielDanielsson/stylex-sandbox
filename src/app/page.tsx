'use client';

import * as stylex from '@stylexjs/stylex';
import { useContext, useState } from 'react';
import { ThemeButton, ButtonThemes, buttonThemes } from './ThemeButton';
import { colors } from '../config/tokens.stylex';
import { dark } from '../config/themes/dark';
import { light } from '../config/themes/light';
import { xmas } from '../config/themes/xmas';
import { Header } from './Header';
import { PageThemes, ThemeContext } from './Providers';

const styles = stylex.create({
  main: {
    backgroundColor: colors.mainBackground,
    width: '100%',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  wrapper: {
    fontSize: 16,
    lineHeight: 1.5,
    display: 'flex',
    flexDirection: 'column',
    gap: '40px',
    justifyContent: 'center',
    alignItems: 'center',
    width: '50%',
    height: '100%',
  },
  button: {
    color: colors.mainTextInverted,
  },
  themeButtonWrapper: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    paddingBottom: '15px',
    color: colors.mainText,
  },
  changeThemeButton: {
    border: 'none',
    padding: ' 12px 24px',
    background: 'gray',
    color: 'white',
    cursor: 'pointer',
  },
  changeThemeButtonActive: {
    background: 'orange',
  },
});

const Home = () => {
  const [activeButtonTheme, setActiveButtonTheme] =
    useState<ButtonThemes>('inherit');

  const { theme, setTheme } = useContext(ThemeContext);

  const pageThemes = [
    {
      label: 'light',
      theme: light,
    },
    { label: 'dark', theme: dark },
    { label: 'xmas', theme: xmas },
  ];

  const realPageThemes = {
    dark,
    light,
    xmas,
  };

  const handleThemeChange = (option: PageThemes) => {
    setTheme(option);
  };

  return (
    <main {...stylex.props(realPageThemes[theme], styles.main)}>
      <Header />
      <div {...stylex.props(styles.wrapper)}>
        <div>
          <div {...stylex.props(styles.themeButtonWrapper)}>
            <span>Set Page theme:</span>
            {pageThemes.map((themeOption) => (
              <button
                onClick={() =>
                  handleThemeChange(themeOption.label as PageThemes)
                }
                {...stylex.props(
                  styles.changeThemeButton,
                  theme === themeOption.label && styles.changeThemeButtonActive,
                )}
                type="button"
              >
                {themeOption.label}
              </button>
            ))}
          </div>
          <div {...stylex.props(styles.themeButtonWrapper)}>
            <span>Set Button theme:</span>
            {buttonThemes.map((themeOption) => (
              <button
                onClick={() =>
                  setActiveButtonTheme(themeOption.label as ButtonThemes)
                }
                {...stylex.props(
                  styles.changeThemeButton,
                  activeButtonTheme === themeOption.label &&
                    styles.changeThemeButtonActive,
                )}
                type="button"
              >
                {themeOption.label}
              </button>
            ))}
          </div>
        </div>
        <ThemeButton
          label="Click mee!!"
          xStyles={styles.button}
          theme={activeButtonTheme}
        />
      </div>
    </main>
  );
};

export default Home;
