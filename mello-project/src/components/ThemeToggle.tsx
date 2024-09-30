import { useState, useEffect } from "react";
import light from "@/assets/light.svg";
import dark from "@/assets/dark.svg";

export default function ThemeToggle() {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');

  // Function to apply the theme to the document
  const applyTheme = (theme: string) => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  };

  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    const prefersLight = window.matchMedia('(prefers-color-scheme: light)');

    // Function to update theme based on system preferences or stored theme
    const updateTheme = () => {
      const storedTheme = localStorage.getItem('theme');
      
      if (storedTheme) {
        applyTheme(storedTheme);
      } else if (prefersDark.matches) {
        applyTheme('dark');
        setTheme('dark');
      } else if (prefersLight.matches) {
        applyTheme('light');
        setTheme('light');
      }
    };

    // Update theme on first load
    updateTheme();

    // Listen to system theme changes
    prefersDark.addEventListener('change', updateTheme);
    prefersLight.addEventListener('change', updateTheme);

    // Cleanup event listeners when component unmounts
    return () => {
      prefersDark.removeEventListener('change', updateTheme);
      prefersLight.removeEventListener('change', updateTheme);
    };
  }, []);

  const playAnim = () => {
    const button = document.querySelector('.toggle-button');
    button?.classList.add('toggle-spin');
    
    // Remove the animation class after the animation completes
    setTimeout(() => {
      button?.classList.remove('toggle-spin');
    }, 600); // Match the duration of the animation (0.6s)
  };

  // Toggle theme manually
  const handleThemeSwitch = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    applyTheme(newTheme);
    playAnim();
  };

  return (
    <button
      className="z-50 toggle-button fixed bottom-6 right-6 w-16 h-16 rounded-full bg-[var(--text-color)] text-white border-b border-[var(--text-color)]"
      onClick={handleThemeSwitch}
    >
    
      {theme === 'dark' ? <img src={light} className="w-8 mx-auto my-auto"/> : <img src={dark} className="w-7 mx-auto my-auto"/>}
    </button>
  );
}
