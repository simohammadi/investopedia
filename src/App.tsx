import React from 'react';
import { MemoryRouter, useRoutes } from 'react-router-dom';
import { routes } from './routes';
import { Flex } from '@chakra-ui/react';
import { ColorModeButton } from './components/ui/color-mode';

function AppRoutes() {
  return useRoutes(routes);
}

function App() {
  return (
    <MemoryRouter>
      <Flex align={'center'} justify="center" flex={1} flexDir={'column'}>
        <ColorModeButton pos="absolute" top={4} right={4} />
        <Flex h="100vh" w="100wh" alignItems={'center'} justifyContent={'center'}>
          <AppRoutes />
        </Flex>
      </Flex>
    </MemoryRouter>
  );
}

export default App;
