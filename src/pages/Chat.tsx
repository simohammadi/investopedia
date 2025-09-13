import { useState } from 'react';
import {
  Flex,
  Card,
  Heading,
  Input,
  Button,
  Text,
  VStack,
  HStack,
  Box,
  useToken,
} from '@chakra-ui/react';
import { BsChatDots } from 'react-icons/bs';
import { IoSend } from 'react-icons/io5';

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
  const [brand600] = useToken('colors', 'brand.800');

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
    <Flex direction="column" align="center" justify="center" minH="100vh" p={4}>
      <Card.Root
        w="700px"
        maxW="90vw"
        h="600px"
        borderRadius="20px"
        _dark={{ bg: 'brand.900' }}
        _light={{ bg: 'brand.50' }}
        boxShadow={'0 4px 12px 0 rgba(0,0,0,0.5)'}
        display="flex"
        flexDirection="column"
      >
        <Card.Header>
          <Flex flexDir={'row'} justifyContent={'space-between'} alignItems={'center'}>
            <Heading size="md" p={0}>
              Chat Room
            </Heading>
            <BsChatDots size={'30px'} color={brand600} />
          </Flex>
          <Text color="gray.500" fontSize="sm">
            Real-time messaging platform
          </Text>
        </Card.Header>

        <Card.Body flex={1} display="flex" flexDirection="column" overflow="hidden">
          {/* Messages Container */}
          <VStack
            flex={1}
            gap={3}
            align="stretch"
            overflowY="auto"
            p={2}
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

          {/* Input Area */}
          <HStack gap={2} mt={4}>
            <Input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type your message..."
              bg="white"
              _dark={{ bg: 'gray.700' }}
              borderRadius="full"
              flex={1}
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
              <IoSend />
            </Button>
          </HStack>
        </Card.Body>
      </Card.Root>
    </Flex>
  );
};
