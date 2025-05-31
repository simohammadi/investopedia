import { Card, CardHeader, CardBody, Flex, Heading } from '@chakra-ui/react';

export const PostCheckout = () => {
  return (
    <Flex direction="row" align="center" justify="center">
      <Card.Root
        w="600px"
        borderRadius="30px"
        _dark={{ bg: 'brand.900' }}
        _light={{ bg: 'brand.50' }}
        boxShadow="lg"
      >
        <CardHeader>
          <Heading size="md" color="gray.700" _dark={{ color: 'white' }}>
            Thank you for your purchase!
          </Heading>
        </CardHeader>
        <CardBody>
          <Flex direction="column">
            <Heading size="sm" color="gray.600" _dark={{ color: 'gray.200' }}>
              Your order has been successfully processed.
            </Heading>
          </Flex>
        </CardBody>
      </Card.Root>
    </Flex>
  );
};
