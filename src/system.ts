import { createSystem, defaultConfig, defineConfig } from '@chakra-ui/react';

const config = defineConfig({
  theme: {
    tokens: {
      colors: {
        brand: {
          50: { value: '#F5ECDB' },
          100: { value: '#EEE8C4' },
          200: { value: '#E6E7AE' },
          300: { value: '#D0DF98' },
          400: { value: '#B5D682' },
          500: { value: '#95CD6D' },
          600: { value: '#71C458' },
          700: { value: '#4DAD4B' },
          800: { value: '#3F9650' },
          900: { value: '#3F9650' },
          950: { value: '#28664E' },
        },
      },
      fonts: {
        heading: { value: '"Titillium Web", sans-serif' },
        body: { value: '"Titillium Web", sans-serif' },
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

export default system;
