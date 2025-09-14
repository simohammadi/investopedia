import React from 'react';
import { Text, VStack, Card, HStack } from '@chakra-ui/react';

interface MessageProps {
  message: {
    id: string;
    text: string;
    sender: string;
    timestamp: Date;
  };
}

export const Message: React.FC<MessageProps> = ({ message }) => {
  const isCurrentUser = message.sender === 'You';
  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <HStack w="100%" justify={isCurrentUser ? 'flex-end' : 'flex-start'} mb={2}>
      <Card.Root
        maxW="70%"
        bg={isCurrentUser ? 'brand.500' : 'gray.100'}
        _dark={{
          bg: isCurrentUser ? 'brand.600' : 'gray.700',
        }}
        color={isCurrentUser ? 'white' : 'inherit'}
        borderRadius="lg"
        borderBottomRightRadius={isCurrentUser ? 0 : 'lg'}
        borderBottomLeftRadius={isCurrentUser ? 'lg' : 0}
        boxShadow="sm"
      >
        <Card.Body p={3}>
          <VStack align="stretch" gap={1}>
            {!isCurrentUser && (
              <Text fontSize="xs" fontWeight="bold" opacity={0.8}>
                {message.sender}
              </Text>
            )}
            <Text 
              fontSize="sm" 
              lineHeight="1.4"
              color={isCurrentUser ? 'black' : 'inherit'}
              _dark={{ color: isCurrentUser ? 'white' : 'inherit' }}
            >
              {message.text}
            </Text>
            <Text 
              fontSize="xs" 
              opacity={0.7} 
              alignSelf="flex-end"
              color={isCurrentUser ? 'black' : 'inherit'}
              _dark={{ color: isCurrentUser ? 'white' : 'inherit' }}
            >
              {formatTime(message.timestamp)}
            </Text>
          </VStack>
        </Card.Body>
      </Card.Root>
    </HStack>
  );
};
