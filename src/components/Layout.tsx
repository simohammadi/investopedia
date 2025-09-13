import React from 'react';
import {
  Drawer,
  VStack,
  Text,
  Box,
  IconButton,
  Flex,
  Portal,
  Card,
  HStack,
} from '@chakra-ui/react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { ColorModeButton } from './ui/color-mode';
import { AiOutlineMessage } from 'react-icons/ai';

interface LayoutProps {
  children: React.ReactNode;
}

interface MessageCard {
  id: string;
  sender: string;
  text: string;
  timestamp: Date;
}

const mockMessages: MessageCard[] = [
  {
    id: '1',
    sender: 'Alice Johnson',
    text: 'Thanks for the investment advice on tech stocks!',
    timestamp: new Date(Date.now() - 300000),
  },
  {
    id: '2',
    sender: 'Bob Smith',
    text: 'What do you think about the current market conditions?',
    timestamp: new Date(Date.now() - 600000),
  },
  {
    id: '3',
    sender: 'Sarah Wilson',
    text: 'Can you explain the difference between ETFs and mutual funds?',
    timestamp: new Date(Date.now() - 900000),
  },
  {
    id: '4',
    sender: 'Mike Chen',
    text: 'Portfolio diversification strategies?',
    timestamp: new Date(Date.now() - 1200000),
  },
];

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

  return (
    <Box minH="100vh" bg="gray.50" _dark={{ bg: 'gray.900' }} display="block">
      <Flex
        as="header"
        align="center"
        justify="space-between"
        px={4}
        py={3}
        bg="white"
        borderBottom="1px"
        borderColor="gray.200"
        _dark={{ bg: 'gray.800', borderColor: 'gray.700' }}
        position="sticky"
        top={0}
        zIndex={10}
      >
        <Drawer.Root
          size="md"
          placement="start"
          open={isDrawerOpen}
          onOpenChange={(details) => setIsDrawerOpen(details.open)}
        >
          <Drawer.Trigger asChild>
            <IconButton variant="ghost" size="sm" aria-label="Open navigation menu" padding={2}>
              <AiOutlineMessage />
            </IconButton>
          </Drawer.Trigger>
          <Portal>
            <Drawer.Backdrop />
            <Drawer.Positioner>
              <Drawer.Content>
                <Drawer.Header>
                  <Text fontSize="lg" fontWeight="bold">
                    Pervious messages
                  </Text>
                </Drawer.Header>
                <Drawer.Body>
                  <VStack align="stretch" gap={3}>
                    {mockMessages.map((message) => {
                      const isActive = location.pathname === `/chat/${message.id}`;
                      const formatTime = (date: Date) => {
                        return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
                      };

                      return (
                        <RouterLink
                          key={message.id}
                          to={`/chat/${message.id}`}
                          style={{ textDecoration: 'none' }}
                          onClick={() => setIsDrawerOpen(false)}
                        >
                          <Card.Root
                            w="full"
                            bg={isActive ? 'brand.50' : 'gray.50'}
                            _dark={{
                              bg: isActive ? 'brand.900' : 'gray.700',
                              borderColor: isActive ? 'brand.400' : 'gray.600',
                            }}
                            border={isActive ? '2px solid' : '1px solid'}
                            borderColor={isActive ? 'brand.500' : 'gray.200'}
                            borderRadius="lg"
                            boxShadow={isActive ? 'md' : 'sm'}
                            cursor="pointer"
                            transition="all 0.2s"
                            _hover={{
                              transform: 'translateY(-2px)',
                              boxShadow: 'lg',
                              borderColor: 'brand.500',
                            }}
                          >
                            <Card.Body p={3}>
                              <VStack align="stretch" gap={1}>
                                <HStack justify="space-between" align="center">
                                  <Text fontSize="sm" fontWeight="bold" color="brand.600">
                                    {message.sender}
                                  </Text>
                                  <Text fontSize="xs" color="gray.500" opacity={0.8}>
                                    {formatTime(message.timestamp)}
                                  </Text>
                                </HStack>
                                <Text
                                  fontSize="sm"
                                  lineHeight="1.4"
                                  color="gray.700"
                                  _dark={{ color: 'gray.300' }}
                                  overflow="hidden"
                                  textOverflow="ellipsis"
                                  display="-webkit-box"
                                  style={{
                                    WebkitLineClamp: 2,
                                    WebkitBoxOrient: 'vertical',
                                  }}
                                >
                                  {message.text}
                                </Text>
                              </VStack>
                            </Card.Body>
                          </Card.Root>
                        </RouterLink>
                      );
                    })}
                  </VStack>
                </Drawer.Body>
              </Drawer.Content>
            </Drawer.Positioner>
          </Portal>
        </Drawer.Root>

        <Text fontSize="lg" fontWeight="bold" textAlign="center" flex="1">
          QuantPilot
        </Text>

        <ColorModeButton />
      </Flex>

      <Box as="main">{children}</Box>
    </Box>
  );
};
