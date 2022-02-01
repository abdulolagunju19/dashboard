import { getLayout } from '@/layouts/dashboard';
import { Avatar, Flex, Heading, Text } from '@chakra-ui/core';

const DashboardTeam = () => {
    return(
        <div>
            <Flex flexDir="column">
                <Heading> The Team </Heading>
                <Flex flexDir="row" justifyContent="space-between" p={5}>
                <Flex flexDir="column" alignItems="center" p={1}>
                <Avatar size='2xl' src='https://bit.ly/kent-c-dodds'my={2}/>
                    <Text as='cite' fontSize='lg'>Kent Dodds</Text>
                </Flex>
                <Flex flexDir="column" alignItems="center" p={1}>
                <Avatar size='2xl' src='https://bit.ly/kent-c-dodds'my={2}/>
                    <Text as='cite' fontSize='lg'>Kent Dodds</Text>
                </Flex>
                <Flex flexDir="column" alignItems="center" p={1}>
                <Avatar size='2xl' src='https://bit.ly/kent-c-dodds'my={2}/>
                    <Text as='cite' fontSize='lg'>Kent Dodds</Text>
                </Flex>
                <Flex flexDir="column" alignItems="center" p={1}>
                <Avatar size='2xl' src='https://bit.ly/kent-c-dodds'my={2}/>
                    <Text as='cite' fontSize='lg'>Kent Dodds</Text>
                </Flex>
                </Flex>
                <Flex flexDir="row" justifyContent="space-between" p={5}>
                <Flex flexDir="column" alignItems="center" p={1}>
                <Avatar size='2xl' src='https://bit.ly/kent-c-dodds'my={2}/>
                    <Text as='cite' fontSize='lg'>Kent Dodds</Text>
                </Flex>
                <Flex flexDir="column" alignItems="center" p={1}>
                <Avatar size='2xl' src='https://bit.ly/kent-c-dodds'my={2}/>
                    <Text as='cite' fontSize='lg'>Kent Dodds</Text>
                </Flex>
                <Flex flexDir="column" alignItems="center" p={1}>
                <Avatar size='2xl' src='https://bit.ly/kent-c-dodds'my={2}/>
                    <Text as='cite' fontSize='lg'>Kent Dodds</Text>
                </Flex>
                <Flex flexDir="column" alignItems="center" p={1}>
                <Avatar size='2xl' src='https://bit.ly/kent-c-dodds'my={2}/>
                    <Text as='cite' fontSize='lg'>Kent Dodds</Text>
                </Flex>
                </Flex>
            </Flex>
        </div>
    )
}

DashboardTeam.getLayout = getLayout;

export default DashboardTeam;
