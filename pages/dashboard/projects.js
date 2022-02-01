import React, { useRef } from 'react';
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import { Timeline } from 'primereact/timeline';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { getLayout } from '@/layouts/dashboard';
import { Flex, Spacer, Box, Heading } from '@chakra-ui/core';

const DashboardProjects = () => {
    const events1 = [
        { status: 'Ordered', date: '15/10/2020 10:30', icon: 'pi pi-shopping-cart', color: '#9C27B0', image: 'game-controller.jpg' },
        { status: 'Processing', date: '15/10/2020 14:00', icon: 'pi pi-cog', color: '#673AB7' },
        { status: 'Shipped', date: '15/10/2020 16:15', icon: 'pi pi-shopping-cart', color: '#FF9800' },
        { status: 'Delivered', date: '16/10/2020 10:00', icon: 'pi pi-check', color: '#607D8B' }
    ];

    const events2 = [
        '2020', '2021', '2022', '2023'
    ];

    const customizedMarker = (item) => {
        return (
            <span className="custom-marker p-shadow-2" style={{ backgroundColor: item.color }}>
                <i className={item.icon}></i>
            </span>
        );
    };

    const customizedContent = (item) => {
        return (
            <Card title={item.status} subTitle={item.date}>
                { item.image && <img src={`images/product/${item.image}`} onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} alt={item.name} width={200} className="p-shadow-2" />}
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt
                    quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!</p>
                <Button label="Read more" className="p-button-text"></Button>
            </Card>
        );
    };
    const header = (
        <img alt="Card" src="images/usercard.png" onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} />
    );
    const footer = (
        <span>
            <Button label="Save" icon="pi pi-check" />
            <Button label="Cancel" icon="pi pi-times" className="p-button-secondary ml-2" />
        </span>
    );

    return(
        <div>
            <Heading mb={3}>Projects</Heading>
            <Flex flexDir="row">
                <Card title="Neurotech Prototype" style={{ width: '25rem', marginBottom: '2em' }}>
                    <p className="m-0" style={{lineHeight: '1.5'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt
                        quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!</p>
                </Card>
                <Box className="card" ml={10}>
                    <Timeline value={events1} opposite={(item) => item.status} content={(item) => <small className="p-text-secondary">{item.date}</small>} />
                </Box>
            </Flex>
            <style jsx>{`             
                .timeline-demo .custom-marker {
                    display: flex;
                    width: 2rem;
                    height: 2rem;
                    align-items: center;
                    justify-content: center;
                    color: #ffffff;
                    border-radius: 50%;
                    z-index: 1;
                }
                
                .timeline-demo .p-timeline-event-content,
                .timeline-demo .p-timeline-event-opposite {
                    line-height: 1;
                }
                
                @media screen and (max-width: 960px) {
                    .timeline-demo .customized-timeline .p-timeline-event:nth-child(even) {
                        flex-direction: row !important;
                    }
                    .timeline-demo .customized-timeline .p-timeline-event:nth-child(even) .p-timeline-event-content {
                        text-align: left !important;
                    }
                    .timeline-demo .customized-timeline .p-timeline-event-opposite {
                        flex: 0;
                    }
                    .timeline-demo .customized-timeline .p-card {
                        margin-top: 1rem;
                    }
                }
                
                `}
            </style>
        </div>
    )
}

DashboardProjects.getLayout = getLayout;

export default DashboardProjects;
