import { useState } from 'react';
import { Flex, Heading, Input, Button, Text, VStack, HStack, Box } from '@chakra-ui/react';
import { LuChevronRight } from 'react-icons/lu';

interface Message {
  id: string;
  text: string;
  sender: string;
  timestamp: Date;
}

const mockMessages: Message[] = [
  {
    id: '1',
    text: 'Hello! Welcome to our chat platform.',
    sender: 'System',
    timestamp: new Date(Date.now() - 300000),
  },
  {
    id: '2',
    text: 'This is a sample conversation message.',
    sender: 'User',
    timestamp: new Date(Date.now() - 240000),
  },
  {
    id: '3',
    text: 'Thanks for joining us today!',
    sender: 'Assistant',
    timestamp: new Date(Date.now() - 180000),
  },
  {
    id: '4',
    text: 'Feel free to ask any questions.',
    sender: 'System',
    timestamp: new Date(Date.now() - 120000),
  },
  {
    id: '5',
    text: 'This chat supports real-time messaging.',
    sender: 'Assistant',
    timestamp: new Date(Date.now() - 60000),
  },
];

export const Chat = () => {
  const [messages, setMessages] = useState<Message[]>(mockMessages);
  const [inputValue, setInputValue] = useState('');

  const handleSendMessage = () => {
    if (inputValue.trim()) {
      const newMessage: Message = {
        id: Date.now().toString(),
        text: inputValue.trim(),
        sender: 'You',
        timestamp: new Date(),
      };

      setMessages([...messages, newMessage]);
      setInputValue('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column' }}>
      {/* Header */}
      <Flex flexDir={'row'} justifyContent={'space-between'} alignItems={'center'} p={4}>
        <Heading size="md" p={0}>
          Chat Room
        </Heading>
      </Flex>
      <Text color="gray.500" fontSize="sm" px={4} pb={2}>
        Real-time messaging platform
      </Text>

      {/* Messages Container */}
      <VStack
        flex={1}
        gap={3}
        align="stretch"
        overflowY="auto"
        p={4}
        css={{
          '&::-webkit-scrollbar': {
            width: '4px',
          },
          '&::-webkit-scrollbar-track': {
            background: 'transparent',
          },
          '&::-webkit-scrollbar-thumb': {
            background: 'rgba(0,0,0,0.2)',
            borderRadius: '2px',
          },
        }}
      >
        {messages.map((message) => (
          <Box key={message.id}>
            <HStack gap={2} align="start">
              <Text fontWeight="bold" fontSize="sm" minW="60px">
                {message.sender}:
              </Text>
              <VStack align="start" gap={0} flex={1}>
                <Text fontSize="sm">{message.text}</Text>
                <Text fontSize="xs" color="gray.500">
                  {formatTime(message.timestamp)}
                </Text>
              </VStack>
            </HStack>
          </Box>
        ))}
      </VStack>

      <HStack gap={2} py={4} px={14} pos="absolute" bottom={0} left={0} right={0}>
        <Input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyPress}
          placeholder="Type your message..."
          bg="white"
          _dark={{ bg: 'gray.700' }}
          borderRadius="full"
          flex={1}
          px={8}
        />
        <Button
          onClick={handleSendMessage}
          bg={'brand.500'}
          borderRadius={'full'}
          border={'2px solid'}
          borderColor={'gray.400'}
          boxShadow={'0 2px 6px 0 rgba(0,0,0,0.3)'}
          _hover={{ bg: 'brand.600' }}
          disabled={!inputValue.trim()}
        >
          <LuChevronRight />
        </Button>
      </HStack>
    </div>
  );
};
