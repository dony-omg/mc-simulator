import { Space } from 'antd';
import ContainerLayout from '../components/ContainerLayout';
import CreateMerchandiseButton from '../components/module/Merchandise/CreateFrom';
import TableMerchandise from '../components/module/Merchandise/Table';
import { useEffect, useState } from 'react';
import { useFetch } from '../hooks/useFetch';


export default function HomePage() {
    // merchandises data
    const [merchandise, setMerchandise] = useState<any[]>([]);
    const { data, } = useFetch("http://192.168.1.2:4000/api/v1/merchants?page_id=1&per_page=100", {
        method: 'GET',
        redirect: 'follow'
    });

    useEffect(() => {
        if (data?.data?.merchants) {
            setMerchandise(data.data.merchants);
        }
    }, [data]);


    return (
        <ContainerLayout title='Merchandise'>
            <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
                <CreateMerchandiseButton />
                <TableMerchandise dataTable={merchandise} />
            </Space>
        </ContainerLayout>
    )
}
