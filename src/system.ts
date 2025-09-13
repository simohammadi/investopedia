import { createSystem, defaultConfig, defineConfig } from '@chakra-ui/react';

const config = defineConfig({
  theme: {
    tokens: {
      fonts: {
        heading: { value: '"Titillium Web", sans-serif' },
        body: { value: '"Titillium Web", sans-serif' },
      },
    },
  },
});

const system = createSystem(defaultConfig, config);

export default system;
