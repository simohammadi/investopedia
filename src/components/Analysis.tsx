import React from 'react';
import { Box, Text, Image, VStack, Heading } from '@chakra-ui/react';

interface MessageData {
  id: string;
  text: string;
  sender: string;
  timestamp: Date;
  imageUrl?: string;
}

interface AnalysisProps {
  selectedMessage: MessageData | null;
  allMessages: MessageData[];
}

export const Analysis: React.FC<AnalysisProps> = ({ selectedMessage, allMessages }) => {
  // Find the message to display
  const getDisplayMessage = () => {
    // If user clicked on any message with an image, show that one
    if (selectedMessage && selectedMessage.imageUrl) {
      return selectedMessage;
    }
    
    // Otherwise, show the most recent message with an image
    const messagesWithImages = allMessages.filter(msg => msg.imageUrl);
    if (messagesWithImages.length > 0) {
      return messagesWithImages[messagesWithImages.length - 1];
    }
    
    return null;
  };

  const displayMessage = getDisplayMessage();

  if (!displayMessage || !displayMessage.imageUrl) {
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
          No images to display
        </Text>
      </Box>
    );
  }

  return (
    <Box
      h="100%"
      w="100%"
      bg="gray.50"
      _dark={{ bg: 'gray.800' }}
      p={6}
      overflow="auto"
    >
      <VStack align="stretch" gap={4} h="100%">
        <Box>
          <Heading size="md" color="gray.700" _dark={{ color: 'gray.300' }} mb={2}>
            {displayMessage.sender}
          </Heading>
          <Text fontSize="sm" color="gray.600" _dark={{ color: 'gray.400' }}>
            {displayMessage.timestamp.toLocaleString()}
          </Text>
        </Box>
        
        <Text 
          fontSize="md" 
          color="gray.700" 
          _dark={{ color: 'gray.300' }}
          lineHeight="1.6"
        >
          {displayMessage.text}
        </Text>

        <Box flex="1" display="flex" alignItems="center" justifyContent="center">
          <Image
            src={displayMessage.imageUrl}
            alt="Message image"
            maxW="100%"
            maxH="100%"
            objectFit="contain"
            borderRadius="lg"
            boxShadow="lg"
          />
        </Box>
      </VStack>
    </Box>
  );
};
