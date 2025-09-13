import React from 'react';
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerTrigger,
  Button,
  VStack,
  Text,
  Box,
  IconButton,
  Flex,
  useDisclosure,
} from '@chakra-ui/react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { HiBars3, HiHome, HiChatBubbleLeftRight } from 'react-icons/hi2';
import { ColorModeButton } from './ui/color-mode';

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
  const { open, onOpen, onClose } = useDisclosure();
  const location = useLocation();

  return (
    <Box minH="100vh" bg="gray.50" _dark={{ bg: 'gray.900' }}>
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
        <Flex align="center" gap={3}>
          <Drawer isOpen={open} onClose={onClose} placement="left">
            <DrawerTrigger asChild>
              <IconButton
                variant="ghost"
                size="sm"
                onClick={onOpen}
                aria-label="Open navigation menu"
              >
                <HiBars3 />
              </IconButton>
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader>
                <Text fontSize="lg" fontWeight="bold">
                  QuantPilot
                </Text>
              </DrawerHeader>
              <DrawerBody>
                <VStack align="stretch" gap={2}>
                  {navItems.map((item) => {
                    const Icon = item.icon;
                    const isActive = location.pathname === item.path;

                    return (
                      <RouterLink key={item.path} to={item.path} style={{ textDecoration: 'none' }}>
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
                          onClick={onClose}
                          w="full"
                        >
                          <Icon size={20} />
                          <Text>{item.label}</Text>
                        </Button>
                      </RouterLink>
                    );
                  })}
                </VStack>
              </DrawerBody>
            </DrawerContent>
          </Drawer.Root>
          <Text fontSize="lg" fontWeight="bold" color="brand.700">
            QuantPilot
          </Text>
        </Flex>

        <ColorModeButton />
      </Flex>

      {/* Main Content */}
      <Box as="main" p={4}>
        {children}
      </Box>
    </Box>
  );
};
