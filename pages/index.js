import { Flex, Heading, Text, Button, Stack, Link } from '@chakra-ui/core';
import { getLayout } from '@/layouts/default';
import Image from 'next/image'
import { MY_APP } from '@/utils/constants';

const Home = () => {
  return (
    <Flex direction="column" justify="center" align="center">
      <Heading
        as="h1"
        size="xl"
        fontWeight="bold"
      >
        Pontem Innovations Dashboard
      </Heading>
      <script src="//code.tidio.co/naazozmwi7vjnre78i1ecvtkkjvtlu0p.js" async></script>
      <Image
        src="/indexpic.png"
        alt="Photo"
        width={280}
        height={280}
        priority
        className="next-image"
      />
    </Flex>
  );
};

Home.getLayout = getLayout;

export default Home;
