import React from 'react';
import { Drawer, Button, VStack, Text, Box, IconButton, Flex, Portal } from '@chakra-ui/react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { HiHome, HiChatBubbleLeftRight } from 'react-icons/hi2';
import { ColorModeButton } from './ui/color-mode';
import { AiOutlineMessage } from 'react-icons/ai';

interface LayoutProps {
  children: React.ReactNode;
}

interface NavItem {
  label: string;
  path: string;
  icon: React.ComponentType<{ size?: number }>;
}

const navItems: NavItem[] = [
  { label: 'Home', path: '/', icon: HiHome },
  { label: 'Chat', path: '/chat', icon: HiChatBubbleLeftRight },
];

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();

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
        <Drawer.Root size="md" placement="start">
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
                  <VStack align="stretch" gap={2}>
                    {navItems.map((item) => {
                      const Icon = item.icon;
                      const isActive = location.pathname === item.path;

                      return (
                        <RouterLink
                          key={item.path}
                          to={item.path}
                          style={{ textDecoration: 'none' }}
                        >
                          <Button
                            variant={isActive ? 'solid' : 'ghost'}
                            justifyContent="flex-start"
                            alignItems="center"
                            gap={3}
                            bg={isActive ? 'brand.500' : 'transparent'}
                            color={isActive ? 'white' : 'inherit'}
                            _hover={{
                              bg: isActive ? 'brand.600' : 'gray.100',
                              _dark: { bg: isActive ? 'brand.600' : 'gray.700' },
                            }}
                            w="full"
                          >
                            <Icon size={20} />
                            <Text>{item.label}</Text>
                          </Button>
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
