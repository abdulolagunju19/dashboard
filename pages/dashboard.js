import { getLayout } from '@/layouts/dashboard';
import MyChart from '@/components/Chart';
import { Flex, Heading, Text, Button, Stack, Link } from '@chakra-ui/core';

const DashboardIndex = () => {
    return(
        <Flex
                flexDir="column"
                overflow="auto"
                maxH="100vh"
                maxW="150vh"
            >
            <Heading>Financial Report</Heading>
           <MyChart/>
        </Flex>
    )
}

DashboardIndex.getLayout = getLayout;

export default DashboardIndex;
