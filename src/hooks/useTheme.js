import { useState } from 'react';
import { Theme } from '../utils/constants';

export const useTheme = () => {
  const getUserTheme = () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme;
    } else {
      const userPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

      return userPrefersDark ? Theme.dark : Theme.light;
    }
  };

  const [theme, setTheme] = useState(getUserTheme());

  const handleThemeChange = (newTheme) => {
    localStorage.setItem('theme', newTheme);
    setTheme(newTheme);
  };

  return { theme, setTheme: handleThemeChange };
};
