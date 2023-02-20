import style from './index.module.css'
// import Cube from '../cube'
import Header from '../header'
import '@fontsource/archivo'
import {ConfigProvider, Table} from 'antd';
import {Button, Space} from 'antd';
import {DownloadOutlined, PlusCircleOutlined} from '@ant-design/icons';

import cubejs from '@cubejs-client/core';
import {CubeProvider, useCubeQuery} from '@cubejs-client/react';

const CUBEJS_TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NzY4MzMzMjd9.RE5KaVbp40TkQgnzJ0qOp-1XxAw7d-OaI_aDs25cTzU'
const CUBEJS_API = 'http://localhost:4000/cubejs-api/v1'

const cubejsApi = cubejs(CUBEJS_TOKEN, {
    apiUrl: CUBEJS_API,
});


export default () => {
    const {resultSet, isLoading, error, progress} = useCubeQuery({

        "measures": [
            "Data.totalAmount"
        ],
        "dimensions": [
            "Data.actividadNivel1",
            "Data.date"
        ],
        "timeDimensions": [
            {
                "dimension": "Data.date"
            }
        ],
        "order": [
            [
                "Data.actividadNivel1",
                "asc"
            ],
            [
                "Data.date",
                "asc"
            ]
        ]

    }, {cubejsApi: cubejsApi});


    console.log('----------------------')
    console.log(resultSet)

    let dataSource: any = null
    let columns: any = null

    if (resultSet /*&& resultSet.tablePivot() && resultSet.tableColumns()*/) {
        dataSource = resultSet.tablePivot({
            x: ['Data.actividad'],
            y: ['Data.date', 'measures']
        });
        //columns = resultSet.tableColumns();
        console.log('DS / Columns')
        console.log(dataSource)
        //console.log(columns)
        let columns: any = []
        for (let i=0; i< dataSource.length; i++) {
            Object.keys(dataSource[i]).forEach((key: any, index: any) => {
                if (!columns.includes(key)) {
                    columns.push(key)
                }
            })
        }
        console.log(columns)
    }


    return (
        <ConfigProvider
            theme={{
                components: {
                    Select: {
                        colorPrimary: 'red',
                        lineHeight: 3
                    },
                    Tag: {
                        lineHeight: 2.4,
                        fontSize: 16
                    }
                },
                token: {
                    fontFamily: 'Archivo, sans-serif',
                },
            }}
        >
            <div className={style.component}>
                <div className={style.container}>
                    <div className={style.menuContainer}>
                        <Header/>
                        <Table dataSource={dataSource} columns={columns}/>;
                    </div>
                </div>
            </div>
        </ConfigProvider>
    )
}

