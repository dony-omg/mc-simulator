import { Tabs } from 'antd';
import type { TabsProps } from 'antd';
import ContainerLayout from '../components/ContainerLayout';
import StoreTable from '../components/module/Store/Table';
import OrderContainer from '../components/module/Order/Container';
import { useFetch } from '../hooks/useFetch';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';


const onChange = (key: string) => {
    console.log(key);
};

const items: TabsProps['items'] = [
    {
        key: '1',
        label: 'Store Management',
        children: <StoreTable />,
    },
    {
        key: '2',
        label: 'Order Management',
        children: <OrderContainer />,
    },
];

export default function MCDetail() {
    const params = useParams();
    const { id = '' } = params as { id: string };

    const { data, } = useFetch(`/merchants/${id}`, {
        method: 'GET',
        redirect: 'follow'
    });

    useEffect(() => {
        // if (data?.data?.merchants) {

        // }
    }, [data]);

    return (
        <ContainerLayout title='Merchandise Detail'>
            <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
        </ContainerLayout>
    )
}