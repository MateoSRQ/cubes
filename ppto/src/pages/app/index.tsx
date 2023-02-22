import style from './index.module.css'
// import Cube from '../cube'
import Header from '../header'
import '@fontsource/archivo'
import {ConfigProvider, Table} from 'antd';
import {Button, Space} from 'antd';
import {DownloadOutlined, PlusCircleOutlined} from '@ant-design/icons';

import cubejs from '@cubejs-client/core';
import {CubeProvider, useCubeQuery} from '@cubejs-client/react';
import { format, add } from 'date-fns'; 
import { es } from 'date-fns/locale';
import { useState, useEffect } from 'react'
import numbro from 'numbro'
import { Scrollbars } from 'react-custom-scrollbars-2';
import useDimensions from "react-use-dimensions";

const CUBEJS_TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NzY4MzMzMjd9.RE5KaVbp40TkQgnzJ0qOp-1XxAw7d-OaI_aDs25cTzU'
const CUBEJS_API = 'http://23.254.203.210:4000/cubejs-api/v1'

const cubejsApi = cubejs(CUBEJS_TOKEN, {
    apiUrl: CUBEJS_API,
});


export default () => {
    const [data, setData] = useState<any>([])
    const [columns, setColumns] = useState<any>([])
    const [ref, { x, y, width, height }] = useDimensions();
    const {resultSet, isLoading, error, progress} = useCubeQuery({
        "measures": [
            "Data.totalAmount"
        ],
        "dimensions": [
            "Data.actividadNivel1",
            //"Data.actividadNivel2",
            //"Data.actividadNivel3",
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

    let _dataSource: any  = []
    let _columns = new Set()

    if (!resultSet) {
        return null;
    }
    else {
        _dataSource = resultSet?.tablePivot({
            x: ['Data.actividad'],
            y: ['Data.date', 'measures']
        });
        //columns = resultSet.tableColumns();
        //console.log(columns)
        let columns: any = []
        for (let i=0; i< _dataSource.length; i++) {
            Object.keys(_dataSource[i]).forEach((key: any, index: any) => {
                _dataSource[i].key = i;
                let tuple  = {title: '', dataIndex: '', name: '', width: '200px', render: function(text:any, record:any, index:any) { return text}}
                tuple.name = key
                tuple.dataIndex = key
                tuple.width = '200px'
                if (key.startsWith('Data.')) {
                    tuple.title  = key.substring(5)
                    tuple.width = '400px'
                }
                else {
                    let _name  = key.substring(0, 10)
                    tuple.title = format(add(Date.parse(_name), {days: 1}),'LLL-yy', { locale: es })
                    tuple.render = function(text:any, record:any, index:any) { return numbro(text).format({mantissa: 2, thousandSeparated: true})}
                    
                }
                _columns.add(tuple)
            })
        }
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
                <div className={style.container} ref={ref}>
                    <div className={style.menuContainer}>
                        <Header />
                    </div>
                    <Scrollbars className={style.tableContainer}  style={{
                        width: (width - 60) + 'px',
                        height: (height - 200) + 'px',
                        marginLeft: '30px'
                    }}>
                        <Table
                            dataSource={_dataSource}
                            columns={[... _columns]}
                            expandable={{
                                expandedRowRender: (record) => <p style={{ margin: 0 }}>HOLA</p>,
                                //rowExpandable: (record) => record.name !== 'Not Expandable',
                            }}
                        />
                    </Scrollbars>
                </div>
            </div>
        </ConfigProvider>
    )
}

