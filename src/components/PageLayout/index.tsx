import { Layout, Menu, theme } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';

const { Header, Content } = Layout;
interface PageLayoutProps {
    children: React.ReactNode | null
}

export default function PageLayout({ children }: PageLayoutProps) {
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    return (
        <Layout>
            <Header style={{ display: 'flex', alignItems: 'center' }}>
                <div className="demo-logo" style={{ width: 120, height: 32, borderRadius: 6, backgroundColor: 'rgba(255,255,255,.2)' }} />
                <Menu theme="dark" mode="horizontal" items={[
                    {
                        key: '1',
                        label: <Link to="/">Merchandise</Link>,
                    },
                    {
                        key: '2',
                        label: <Link to="/mc-detail/1">Store</Link>,
                    },]} />
            </Header>
            <Layout>

                <Layout style={{ padding: '0 24px 24px' }}>

                    <Content
                        style={{
                            padding: 24,
                            margin: 0,
                            minHeight: 280,
                            background: colorBgContainer,
                        }}
                    >
                        {children}
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    )
}
