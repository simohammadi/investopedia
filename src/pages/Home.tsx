import { Flex, Card, Heading, Button, Text } from '@chakra-ui/react';
import { BsTreeFill } from 'react-icons/bs';
import { Link as RouterLink } from 'react-router-dom';
import { FaEarthAmericas } from 'react-icons/fa6';

export const Home = () => {
  return (
    <Flex direction="row" align="center" justify="center">
      <Card.Root
        w="600px"
        borderRadius="30px"
        _dark={{ bg: 'brand.900' }}
        _light={{ bg: 'brand.50' }}
        boxShadow={'0 4px 12px 0 rgba(0,0,0,0.5)'}
      >
        <Card.Header>
          <Flex flexDir={'row'} justifyContent={'space-between'} alignItems={'center'}>
            <Heading size="md" p={0}>
              <a
                href="https://www.example.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: 'underline', color: 'inherit' }}
              >
                Green.io
              </a>{' '}
              helps you compensate your shopping
            </Heading>
            <BsTreeFill size={'30px'} />
          </Flex>
          <Heading size="sm" color="gray.500">
            Be a hero and offset your carbon emissions today
          </Heading>
        </Card.Header>
        <Card.Body>
          <Flex flexDir={'row'} w="100%" alignItems={'center'}>
            <Flex flexDir={'column'} gap={2} flex={1}>
              <Heading size="md" flex={1}>
                Todays footprint 1.2 kg CO<sub>2</sub>
              </Heading>
              <Heading size="md">Thats 0.2 pine trees 🌲</Heading>
            </Flex>
            <Button
              alignSelf={'flex-end'}
              colorPalette={'green'}
              borderRadius={'full'}
              border={'2px solid'}
              borderColor={'gray.500'}
              boxShadow={'0 4px 12px 0 rgba(0,0,0,0.5)'}
            >
              <RouterLink to="/checkout">
                <Flex flexDir="row" alignItems={'center'} gap={2}>
                  <Text>Save the planet</Text>
                  <FaEarthAmericas />
                </Flex>
              </RouterLink>
            </Button>
          </Flex>
        </Card.Body>
      </Card.Root>
    </Flex>
  );
};
