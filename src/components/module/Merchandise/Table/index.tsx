import React from 'react'
import { Space, Table, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { Link } from 'react-router-dom';

interface DataType {
    key: string;
    name: string;
    age: number;
    address: string;
    tags: string[];
}

// const rs = {
//     "id": 1,
//     "code": "MC2308230117",
//     "name": null,
//     "address": null,
//     "phone": null,
//     "email": null,
//     "createdAt": "2023-09-15T20:47:33.000Z",
//     "updatedAt": "2023-09-15T20:47:33.000Z"
// }

const columns: ColumnsType<DataType> = [
    {
        title: 'Code',
        dataIndex: 'code',
        key: 'id',
        render: (_, { code }) => {
            console.log('code', code);
            return (<Link to={`/mc-detail/${code}`}>{code}</Link>)
        },
    },
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
    },
    {
        title: 'Phone',
        dataIndex: 'phone',
        key: 'phone',
    },
    {
        title: 'Email',
        dataIndex: 'email',
        key: 'email',
    },
    {
        title: 'CreatedAt',
        dataIndex: 'createdAt',
        key: 'createdAt',
    },
    {
        title: 'UpdatedAt',
        dataIndex: 'updatedAt',
        key: 'updatedAt',
    },
    // {
    //     title: 'Tags',
    //     key: 'tags',
    //     dataIndex: 'tags',
    //     render: (_, { tags }) => (
    //         <>
    //             {tags.map((tag) => {
    //                 let color = tag.length > 5 ? 'geekblue' : 'green';
    //                 if (tag === 'loser') {
    //                     color = 'volcano';
    //                 }
    //                 return (
    //                     <Tag color={color} key={tag}>
    //                         {tag.toUpperCase()}
    //                     </Tag>
    //                 );
    //             })}
    //         </>
    //     ),
    // },
    {
        title: 'Action',
        key: 'action',
        render: (_, record) => (
            <Space size="middle">
                <a>Credential</a>
            </Space>
        ),
    },
];



interface Props {
    dataTable: any[];
}

export default function TableMerchandise({ dataTable }: Props) {
    return (
        <Table columns={columns} dataSource={dataTable} />
    )
}
