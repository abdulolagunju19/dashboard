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
            <br/>
            <div>
            <iframe src="https://app.powerbi.com/view?r=eyJrIjoiYjIzZThhZDgtOTMyMy00Mzc5LTk3ZTItZjU1ZjFmYmE3MDk3IiwidCI6IjYwMWNmNGMxLWJiNWYtNDBjNi04ODE2LWFlZjQyNDJmZTJhMCJ9" width="600" height="380" frameborder="none" ></iframe>
            </div>
            <Flex>
            <Link href="https://storyset.com/data">Data Illustrations by Storyset</Link>
            </Flex>
        </div>
    )
}

DashboardDocuments.getLayout = getLayout;

export default DashboardDocuments;
