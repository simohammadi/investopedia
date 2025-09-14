import React from 'react';
import { Text, VStack, Card, HStack, Icon } from '@chakra-ui/react';
import { LuPaperclip } from 'react-icons/lu';

interface MessageProps {
  message: {
    id: string;
    text: string;
    sender: string;
    timestamp: Date;
    imageUrl?: string;
  };
  onClick?: () => void;
}

export const Message: React.FC<MessageProps> = ({ message, onClick }) => {
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
        cursor={message.imageUrl ? 'pointer' : 'default'}
        onClick={message.imageUrl ? onClick : undefined}
        _hover={message.imageUrl ? { transform: 'translateY(-1px)', boxShadow: 'md' } : {}}
        transition="all 0.2s"
      >
        <Card.Body p={3}>
          <VStack align="stretch" gap={1}>
            {!isCurrentUser && (
              <HStack justify="space-between" align="center">
                <Text fontSize="xs" fontWeight="bold" opacity={0.8}>
                  {message.sender}
                </Text>
                {message.imageUrl && (
                  <Icon 
                    as={LuPaperclip} 
                    boxSize={4} 
                    color="blue.500"
                    _dark={{ color: 'blue.400' }}
                  />
                )}
              </HStack>
            )}
            {isCurrentUser && message.imageUrl && (
              <HStack justify="flex-end" align="center">
                <Icon 
                  as={LuPaperclip} 
                  boxSize={4} 
                  color="white"
                />
              </HStack>
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
