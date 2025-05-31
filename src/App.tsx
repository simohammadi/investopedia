import { Flex } from '@chakra-ui/react';
import { ColorModeButton } from './components/ui/color-mode';

function App() {
  return (
    <Flex align={'center'} justify="center" flex={1} flexDir={'column'}>
      <ColorModeButton />
    </Flex>
  );
}

export default App;
