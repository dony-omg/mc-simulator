import { Space } from 'antd';
import ContainerLayout from '../components/ContainerLayout';
import CreateMerchandiseButton from '../components/module/Merchandise/CreateFrom';
import TableMerchandise from '../components/module/Merchandise/Table';


export default function HomePage() {
    return (
        <ContainerLayout title='Merchandise'>
            <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
                <CreateMerchandiseButton />
                <TableMerchandise />
            </Space>
        </ContainerLayout>
    )
}
