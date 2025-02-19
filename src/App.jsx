import React from 'react';
import Home from './Components/Home';
import Bar from './Components/Bar';
import { ThemeProvider } from './context/ThemeContext';

export default function App() {
  return (
  <div>
    <ThemeProvider>

    <Bar/>
    <Home />

    </ThemeProvider>
  </div>

  );
}

