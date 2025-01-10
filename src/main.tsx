import { StrictMode } from 'react'
import * as React from 'react'; 
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.js'
import { ThemeProvider } from '@mui/material'
import theme from './components/theme.js';
import AnimatedCursor from 'react-animated-cursor';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
     <AnimatedCursor
        innerSize={4}
        outerSize={70}
        outerAlpha={0.2}
        innerScale={3}
        outerScale={0.2}
        color= '0,255,148.0.4'
        outerStyle={{
          border: "2px solid #00FF94",
        }}
        innerStyle={{
          backgroundColor: "#00FF94",
          
        }}
        clickables={[
          "a",
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          "label[for]",
          "select",
          "textarea",
          "button",
          ".link",
        ]}
      />
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </StrictMode>
)
