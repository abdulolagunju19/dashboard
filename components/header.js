import NextLink from 'next/link';
import { useColorModeValue, Button, Flex } from '@chakra-ui/core';
import ThemeToggle from './theme-toggle';
import { MY_APP } from '@/utils/constants';

export default function Header() {
  const bgColor = useColorModeValue('white', 'gray.900');

  return (
    <Flex
      pos="fixed"
      as="header"
      align="center"
      justify="center"
      top={0}
      insetX={0}
      h={16}
      px={[4, 6, null, 8]}
      bg={bgColor}
      borderBottomWidth="1px"
    >
      <Flex w="full" align="center" justify="center">
        <Flex w="full" maxW="5xl" align="center" justify="center">
          <Flex w="full" align="center" justify="space-between">
            <Flex align="center">
              <NextLink href="/dashboard" passHref>
                <Button as="a" variant="ghost" p={2} fontWeight="bold">
                  Dashboard
                </Button>
              </NextLink>
            </Flex>
            <Flex>
              <ThemeToggle />
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
