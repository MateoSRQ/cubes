import {useEffect, useState} from 'react'
import cubejs from '@cubejs-client/core';
import { useCubeQuery }  from '@cubejs-client/react';
import style from './index.module.css'
import {Table} from 'antd';
import type {ColumnsType} from 'antd/es/table';
import {StyleProvider} from '@ant-design/cssinjs';

const cubejsApi = cubejs('YOUR-CUBEJS-API-TOKEN', {
    apiUrl: 'http://localhost:4000/cubejs-api/v1',
});

interface DataType {
    key: React.Key;
    name: string;
    age: number;
    address: string;
    description: string;
}
/*
const columns: ColumnsType<DataType> = [
    {title: 'Name', dataIndex: 'name', key: 'name'},
    {title: 'Age', dataIndex: 'age', key: 'age'},
    {title: 'Address', dataIndex: 'address', key: 'address'},
    {
        title: 'Action',
        dataIndex: '',
        key: 'x',
        render: () => <a>Delete</a>,
    },
];

const data: DataType[] = [
    {
        key: 1,
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
        description: 'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.',
    },
    {
        key: 2,
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
        description: 'My name is Jim Green, I am 42 years old, living in London No. 1 Lake Park.',
    },
    {
        key: 3,
        name: 'Not Expandable',
        age: 29,
        address: 'Jiangsu No. 1 Lake Park',
        description: 'This not expandable',
    },
    {
        key: 4,
        name: 'Joe Black',
        age: 32,
        address: 'Sydney No. 1 Lake Park',
        description: 'My name is Joe Black, I am 32 years old, living in Sydney No. 1 Lake Park.',
    },
];
*/

const Component = () => {
    const [query, setQuery] = useState({
        "measures": [
            "Data.totalAmount"
        ],
        "dimensions": [
            "Data.actividadNivel1",
            "Data.anyo",
            "Data.mes"
        ],
        "order": {
            "Data.totalAmount": "desc"
        }
    })

    // const { resultSet, isLoading, error, progress } = useCubeQuery(query, {cubejsApi: cubejsApi});
    //
    //
    // if (!resultSet) {
    //     return null;
    // }
    // const dataSource = resultSet.tablePivot({
    //     x: ['Data.actividadNivel1', 'Data.anyo', 'Data.mes'],
    //     y: ['Data.totalAmount']
    // });
    // const columns = resultSet.tableColumns();

    return (
        // <Table columns={columns} dataSource={dataSource} />
        <div>DATA</div>
    )
}

export default Component;