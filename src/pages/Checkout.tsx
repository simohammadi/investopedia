import { Flex, Card, Heading, Checkbox } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { BsTreeFill } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

export const Checkout = () => {
  const [checked, setChecked] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (checked) {
      const timer = setTimeout(() => {
        navigate('/post-checkout');
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [checked, navigate]);

  return (
    <Flex direction="row" align="center" justify="center">
      <Card.Root
        w="600px"
        borderRadius="30px"
        _dark={{ bg: 'brand.900' }}
        _light={{ bg: 'brand.50' }}
        boxShadow="lg"
      >
        <Card.Header>
          <Flex flexDir={'row'} justifyContent={'space-between'} alignItems={'center'}>
            <Heading size="md" p={0}>
              Your emissions today
            </Heading>
            <BsTreeFill size={'30px'} />
          </Flex>
          <Heading size="sm" color="gray.500">
            Emissions 1.2 kg CO<sub>2</sub>
          </Heading>
        </Card.Header>
        <Card.Body>
          <Flex flexDir={'row'} w="100%" alignItems={'center'}>
            <Heading size="lg" flex={1}>
              Cost to offset: $12.00
            </Heading>
            <Checkbox.Root checked={checked} onCheckedChange={(e) => setChecked(!!e.checked)}>
              <Checkbox.HiddenInput />
              <Checkbox.Control />
              <Checkbox.Label>Lets do it!</Checkbox.Label>
            </Checkbox.Root>
          </Flex>
        </Card.Body>
      </Card.Root>
    </Flex>
  );
};
