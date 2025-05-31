import { createSystem, defineConfig } from '@chakra-ui/react';

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
  },
});

const theme = createSystem(config);

export default theme;
