import {useEffect, useState} from 'react'
import cubejs from '@cubejs-client/core';
import { useCubeQuery }  from '@cubejs-client/react';
import style from './index.module.css'
import type {ColumnsType} from 'antd/es/table';
import {StyleProvider} from '@ant-design/cssinjs';
import numbro from 'numbro'
import {ConfigProvider, Table} from 'antd';
import {format, add } from 'date-fns'
import { es } from 'date-fns/locale';


 const Cube = (props: any) => {
    console.log('CUBE PROPS')
    console.log(props)

    const [data, setData] = useState<any>([])
    const [columns, setColumns] = useState<any>([])

    const cubejsApi = cubejs(props.cube_token, {
        apiUrl: props.cube_api,
    });

    const {resultSet, isLoading, error, progress} = useCubeQuery(props.cube_query, {cubejsApi: cubejsApi});

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

    console.log('columns')
    console.log(_columns)

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

                    </div>
                    <div className={style.tableContainer} >
                        <Table
                            dataSource={_dataSource}
                            columns={[... _columns]}
                            expandable={{
                                expandedRowRender: (record) => {
                                    let query = {...props.cube_query}
                                    
                                    query.dimensions =   [                                  
                                        "Data.actividadNivel1",
                                        "Data.actividadNivel2",
                                        "Data.date"
                                    ]
                                    

                                    return (
                                    <Cube 
                                        cube_query={query} 
                                        cube_api={props.cube_api} 
                                        cube_token={props.cube_token}
                                    />
                                    )
                                },
                                //showExpandColumn: false,
                                expandRowByClick: true
                                //childrenColumnName: 'Data.actividadNivel1'
                                //rowExpandable: (record) => record.name !== 'Not Expandable',
                            }}
                        />
                    </div>
                </div>
            </div>
        </ConfigProvider>
    )
}

export default Cube;