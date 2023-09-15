import { Button, Card, Divider, Image, Space, Typography } from 'antd'
const { Title, Text } = Typography;
export default function OrderDetail() {
    return (
        <Card title="Order detail - #MC-2134">
            <Image
                width={200}
                src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
            />
            <Divider />
            <Space direction="vertical" size="small">
                <Space align='baseline'>
                    <Text strong>Status:</Text>
                    <Text>Done</Text>
                </Space>
                <Space align='baseline'>
                    <Text strong>Amount:</Text>
                    <Text>20000</Text>
                </Space>
                <Space align='baseline'>
                    <Text strong>MC Code:</Text>
                    <Text>#123455</Text>
                </Space>
                <Space align='baseline'>
                    <Text strong>Store Code:</Text>
                    <Text>20000</Text>
                </Space>
                <Space align='baseline'>
                    <Text strong>Expired at:</Text>
                    <Text>20000</Text>
                </Space>
            </Space>
            <Divider />
            <Space size="small">
                <Button type="primary">Retrieve</Button>
                <Button danger>Cancel Order</Button>
            </Space>
        </Card>

    )
}
