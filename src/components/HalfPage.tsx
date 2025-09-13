import { Flex } from '@chakra-ui/react';

type HalfPageProps = {
  leftPage: React.ReactNode;
  rightPage: React.ReactNode;
  flex: [number, number];
};

export const HalfPage = ({ leftPage, rightPage, flex }: HalfPageProps) => {
  return (
    <Flex flexDir="row" h="100%" w="100%" overflow="hidden">
      <Flex flex={flex[0]} display={{ base: 'none', lg: 'flex' }} overflow="hidden">
        {leftPage}
      </Flex>
      <Flex flex={flex[1]} borderLeft="1px solid" borderColor="gray.200" overflow="hidden">
        {rightPage}
      </Flex>
    </Flex>
  );
};
