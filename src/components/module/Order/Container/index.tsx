import { Card, Space } from 'antd';
import OrderDetail from '../Detail';
import OrderTable from '../Table';

export default function OrderContainer() {
    return (
        <div style={{ display: 'flex' }}>
            <div style={{ flex: 2, marginRight: 15 }}>
                <Card>
                    <Space direction="vertical" size="middle">
                        {/* <CreateOrderButton /> */}
                        <OrderTable />
                    </Space>
                </Card>
            </div>
            <div style={{ flex: 1 }}>
                <OrderDetail />
            </div>
        </div>
    )
}
