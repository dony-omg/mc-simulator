import { Divider, Typography } from 'antd';
import React from 'react';

const { Title } = Typography;


interface Props {
    title?: string;
    children: React.ReactNode | null
}
export default function ContainerLayout({ children, title }: Props) {
    return (
        <div>
            <Title level={2}># {title}</Title>
            <Divider />
            {children}
        </div>
    )
}
