import { useState, useRef, useLayoutEffect, useEffect } from 'react';
import { Flex, Input, VStack, HStack, Box, IconButton } from '@chakra-ui/react';
import { LuChevronRight } from 'react-icons/lu';
import { Message } from './Message';
import Typewriter from 'typewriter-effect/dist/core';

interface MessageData {
  id: string;
  text: string;
  sender: string;
  timestamp: Date;
  imageUrl?: string;
  isLoading?: boolean;
}

const mockMessages: MessageData[] = [
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
  {
    id: '5',
    text: 'This chat supports real-time messaging.',
    sender: 'Assistant',
    timestamp: new Date(Date.now() - 60000),
  },
  {
    id: '5',
    text: 'This chat supports real-time messaging.',
    sender: 'Assistant',
    timestamp: new Date(Date.now() - 60000),
  },
  {
    id: '5',
    text: 'This chat supports real-time messaging.',
    sender: 'Assistant',
    timestamp: new Date(Date.now() - 60000),
  },
  {
    id: '5',
    text: 'This chat supports real-time messaging.',
    sender: 'Assistant',
    timestamp: new Date(Date.now() - 60000),
  },
  {
    id: '5',
    text: 'This chat supports real-time messaging.',
    sender: 'Assistant',
    timestamp: new Date(Date.now() - 60000),
  },
  {
    id: '5',
    text: 'This chat supports real-time messaging.',
    sender: 'Assistant',
    timestamp: new Date(Date.now() - 60000),
  },
  {
    id: '5',
    text: 'This chat supports real-time messaging.',
    sender: 'Assistant',
    timestamp: new Date(Date.now() - 60000),
  },
  {
    id: '5',
    text: 'This chat supports real-time messaging.',
    sender: 'Assistant',
    timestamp: new Date(Date.now() - 60000),
  },
  {
    id: '5',
    text: 'This chat supports real-time messaging.',
    sender: 'Assistant',
    timestamp: new Date(Date.now() - 60000),
  },
  {
    id: '5',
    text: 'This chat supports real-time messaging.',
    sender: 'Assistant',
    timestamp: new Date(Date.now() - 60000),
  },
  {
    id: '5',
    text: 'This chat supports real-time messaging.',
    sender: 'Assistant',
    timestamp: new Date(Date.now() - 60000),
  },
  {
    id: '5',
    text: 'This chat supports real-time messaging.',
    sender: 'Assistant',
    timestamp: new Date(Date.now() - 60000),
  },
  {
    id: '5',
    text: 'This chat supports real-time messaging.',
    sender: 'Assistant',
    timestamp: new Date(Date.now() - 60000),
  },
  {
    id: '6',
    text: 'Here\'s a chart showing the market trends for this week:',
    sender: 'Assistant',
    timestamp: new Date(Date.now() - 30000),
    imageUrl: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=300&fit=crop&crop=center',
  },
  {
    id: '7',
    text: 'Here\'s another analysis showing portfolio performance:',
    sender: 'Assistant',
    timestamp: new Date(Date.now() - 10000),
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&crop=center',
  },
];

interface ChatProps {
  onMessageSelect?: (message: MessageData) => void;
  onMessagesChange?: (messages: MessageData[]) => void;
}

export const Chat = ({ onMessageSelect, onMessagesChange }: ChatProps) => {
  const [messages, setMessages] = useState<MessageData[]>(mockMessages);
  const [inputValue, setInputValue] = useState('');
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const typewriterRef = useRef<Typewriter | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Notify parent when messages change
  useEffect(() => {
    onMessagesChange?.(messages);
  }, [messages, onMessagesChange]);

  useLayoutEffect(() => {
    if (!inputRef.current || typewriterRef.current) return;

    const placeholderStrings = [
      'Ask me anything about investing...',
      'What stock should I buy?',
      'How does the market look today?',
    ];

    let currentPlaceholder = '';

    const customNodeCreator = function (character: string) {
      if (inputRef.current) {
        currentPlaceholder += character;
        inputRef.current.placeholder = currentPlaceholder;
      }
      return null;
    };

    const onRemoveNode = function () {
      if (inputRef.current && currentPlaceholder.length > 0) {
        currentPlaceholder = currentPlaceholder.slice(0, -1);
        inputRef.current.placeholder = currentPlaceholder;
      }
    };

    typewriterRef.current = new Typewriter(null, {
      loop: true,
      delay: 75,
      deleteSpeed: 50,
      pauseFor: 2000,
      onCreateTextNode: customNodeCreator,
      onRemoveNode: onRemoveNode,
    });

    typewriterRef.current
      .typeString(placeholderStrings[0])
      .pauseFor(2000)
      .deleteAll()
      .typeString(placeholderStrings[1])
      .pauseFor(2000)
      .deleteAll()
      .typeString(placeholderStrings[2])
      .pauseFor(2000)
      .deleteAll()
      .start();

    return () => {
      if (typewriterRef.current) {
        typewriterRef.current.stop();
      }
    };
  }, []);

  useLayoutEffect(() => {
    if (!typewriterRef.current || !inputRef.current) return;

    if (isInputFocused) {
      typewriterRef.current.stop();
      inputRef.current.placeholder = '';
    } else {
      inputRef.current.placeholder = '';
      typewriterRef.current.start();
    }
  }, [isInputFocused]);

  const handleSendMessage = () => {
    if (inputValue.trim() && !isLoading) {
      const newMessage: MessageData = {
        id: Date.now().toString(),
        text: inputValue.trim(),
        sender: 'You',
        timestamp: new Date(),
      };

      setMessages([...messages, newMessage]);
      setInputValue('');
      
      // Simulate loading state for demo purposes
      setIsLoading(true);
      
      // Add loading message
      const loadingMessage: MessageData = {
        id: (Date.now() + 1).toString(),
        text: 'AI is analyzing your request...',
        sender: 'Assistant',
        timestamp: new Date(),
        isLoading: true,
      };
      
      setMessages(prev => [...prev, loadingMessage]);
      
      // Simulate API delay (remove this when connecting to real backend)
      setTimeout(() => {
        setIsLoading(false);
        // Remove loading message and add mock response
        setMessages(prev => {
          const withoutLoading = prev.filter(msg => !msg.isLoading);
          const mockResponse: MessageData = {
            id: (Date.now() + 2).toString(),
            text: 'This is a mock response. Replace this with your actual backend integration.',
            sender: 'Assistant',
            timestamp: new Date(),
          };
          return [...withoutLoading, mockResponse];
        });
      }, 2000);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  const handleFocus = () => {
    setIsInputFocused(true);
  };

  const handleBlur = () => {
    setIsInputFocused(false);
  };

  return (
    <Flex direction="column" w="100%" h="calc(100vh - 64px)" position="relative" overflow="hidden">
      {/* Messages Container - Scrollable Flex */}
      <Flex
        direction="column"
        flex={1}
        overflowY="auto"
        px={4}
        css={{
          '&::-webkit-scrollbar': {
            width: '6px',
          },
          '&::-webkit-scrollbar-track': {
            background: 'transparent',
          },
          '&::-webkit-scrollbar-thumb': {
            background: 'transparent',
            borderRadius: '3px',
            opacity: 0,
            transition: 'all 0.3s ease',
          },
          '&:hover::-webkit-scrollbar-thumb': {
            background: 'rgba(0,0,0,0.2)',
            opacity: 1,
          },
          '&::-webkit-scrollbar-thumb:hover': {
            background: 'rgba(0,0,0,0.4)',
          },
        }}
      >
        <VStack gap={1} align="stretch">
          {messages.map((message) => (
            <Message 
              key={message.id} 
              message={message} 
              onClick={() => onMessageSelect?.(message)}
            />
          ))}
          {/* Invisible div to scroll to */}
          <div ref={messagesEndRef} />
        </VStack>
      </Flex>

      {/* Input Area - At bottom */}
      <Box
        p={4}
        borderTop="1px"
        borderColor="gray.200"
        _dark={{ borderColor: 'gray.700', bg: 'gray.900' }}
        marginTop="auto"
      >
        <HStack gap={2}>
          <Input
            ref={inputRef}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyPress}
            onFocus={handleFocus}
            onBlur={handleBlur}
            placeholder=""
            bg="gray.50"
            _dark={{ bg: 'gray.700' }}
            borderRadius="full"
            flex={1}
            px={4}
          />
          <IconButton
            onClick={handleSendMessage}
            bg={'brand.500'}
            borderRadius={'full'}
            border={'2px solid'}
            borderColor={'gray.400'}
            boxShadow={'0 2px 6px 0 rgba(0,0,0,0.3)'}
            _hover={{ bg: 'brand.600' }}
            disabled={!inputValue.trim() || isLoading}
            size="lg"
          >
            <LuChevronRight />
          </IconButton>
        </HStack>
      </Box>
    </Flex>
  );
};
