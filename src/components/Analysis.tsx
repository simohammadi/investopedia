import React from 'react';
import { Box, Text } from '@chakra-ui/react';

export const Analysis: React.FC = () => {
  return (
    <Box
      h="100%"
      w="100%"
      bg="gray.50"
      _dark={{ bg: 'gray.800' }}
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Text fontSize="2xl" color="gray.500" _dark={{ color: 'gray.400' }}>
        Half Page Placeholder
      </Text>
    </Box>
  );
};
