import { ChakraProvider, createSystem, defaultConfig, defineConfig } from '@chakra-ui/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ColorModeProvider } from './components/ui/color-mode';

const config = defineConfig({
  theme: {
    tokens: {
      colors: {
        brand: {
          50: { value: '#e3f9f5' },
          100: { value: '#c1eede' },
          200: { value: '#9fe3c7' },
          300: { value: '#7dd8b0' },
          400: { value: '#5bcd99' },
          500: { value: '#41b380' },
          600: { value: '#32906a' },
          700: { value: '#236d53' },
          800: { value: '#144a3d' },
          900: { value: '#052726' },
        },
      },
    },
    semanticTokens: {
      colors: {
        brand: {
          solid: { value: '{colors.brand.500}' },
          contrast: { value: '{colors.brand.100}' },
          fg: { value: '{colors.brand.700}' },
          muted: { value: '{colors.brand.100}' },
          subtle: { value: '{colors.brand.200}' },
          emphasized: { value: '{colors.brand.300}' },
          focusRing: { value: '{colors.brand.500}' },
        },
      },
    },
  },
});

const system = createSystem(defaultConfig, config);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider value={system}>
      <ColorModeProvider>
        <App />
      </ColorModeProvider>
    </ChakraProvider>
  </React.StrictMode>,
);
