import { Card, Col, Row, Space } from 'antd';
import OrderTable from '../Table';
import OrderDetail from '../Detail';

export default function OrderContainer() {
    return (
        <div>
            <Row >
                <Col>
                    <Card style={{ margin: 10 }}>
                        <OrderTable />
                    </Card>
                </Col>
                <Col flex={1}>
                    <div style={{ margin: 10 }}>
                        <OrderDetail />
                    </div>
                </Col>
            </Row>
        </div>
    )
}
