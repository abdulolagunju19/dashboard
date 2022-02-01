import { getLayout } from '@/layouts/dashboard';
import { Flex, Heading, Text, Button, Stack, Link } from '@chakra-ui/core';
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import { Chart } from 'primereact/chart';

const DashboardDocuments = () => {
    const chartData = {
        labels: ['A', 'B', 'C'],
        datasets: [
            {
                data: [300, 50, 100],
                backgroundColor: [
                    "#42A5F5",
                    "#66BB6A",
                    "#FFA726"
                ],
                hoverBackgroundColor: [
                    "#64B5F6",
                    "#81C784",
                    "#FFB74D"
                ]
            }
        ]
    };

    const lightOptions = {
        plugins: {
            legend: {
                labels: {
                    color: '#495057'
                }
            }
        }
    };
    return(
        <div>
            <Heading>Documents</Heading>
            <div className="card flex justify-content-center">
            <Chart type="pie" data={chartData} options={lightOptions} style={{ position: 'relative', width: '40%' }} />
            </div>
            <br/>
            <Flex>
            <Link href="https://storyset.com/data">Data Illustrations by Storyset</Link>
            </Flex>
        </div>
    )
}

DashboardDocuments.getLayout = getLayout;

export default DashboardDocuments;
