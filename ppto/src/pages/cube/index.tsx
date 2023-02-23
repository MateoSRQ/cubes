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
        if (!props.columns) {
            let columns: any = []
            for (let i = 0; i < _dataSource.length; i++) {
                Object.keys(_dataSource[i]).forEach((key: any, index: any) => {
                    _dataSource[i].key = i;
                    let tuple = {
                        title: '',
                        dataIndex: '',
                        name: '',
                        width: '200px',
                        render: function (text: any, record: any, index: any) {
                            return text
                        }
                    }
                    tuple.name = key
                    tuple.dataIndex = key
                    tuple.width = '200px'
                    if (key.startsWith('Data.')) {
                        tuple.title = key.substring(5)
                        tuple.width = '400px'
                    } else {
                        let _name = key.substring(0, 10)
                        tuple.title = format(add(Date.parse(_name), {days: 1}), 'LLL-yy', {locale: es})
                        tuple.render = function (text: any, record: any, index: any) {
                            return numbro(text).format({mantissa: 2, thousandSeparated: true})
                        }

                    }
                    _columns.add(tuple)
                })
            }
        }
        else {
            console.log('feed columns')
            _columns = props.columns
        }
    }

    console.log('columns')
    console.log([... _columns])

    const dimensions = [
        "Data.actividadNivel1",
        "Data.actividadNivel2",  
        "Data.actividadNivel3",
        "Data.actividadNivel4",  
        "Data.actividadNivel5",
        "Data.actividadNivel6",  
        "Data.actividadNivel7",
    ]




    console.log('dimensions')
    console.log(props.depth+1)
    console.log([
        ...dimensions.slice(0, props.depth+1),
        "Data.date"
    ])

    console.log('DS')
    console.log(_dataSource)

    for (let i = 0; i < _dataSource.length; i++) {
        _dataSource[i].key = Math.random()
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

                    </div>
                    <div className={style.tableContainer} >
                        <Table

                            dataSource={_dataSource}
                            columns={[... _columns]}
                            pagination={false}
                            expandable={{
                                expandedRowRender: (record) => {
                                    console.log('expanded:')
                                    console.log(record)
                                    let query = {...props.cube_query}
                                    query.dimensions =   [
                                        ...dimensions.slice(0, props.depth+1),
                                        "Data.date"
                                    ]

                                    let filters = []
                                    for (let i=0; i<=props.depth; i++) {
                                        filters.push(
                                            {
                                                "member": "Data.actividadNivel" + props.depth,
                                                "operator": "equals",
                                                "values": [record["Data.actividadNivel" + props.depth]]
                                            }
                                        )
                                    }

                                    query.filters = filters;

                                    return (
                                    <Cube 
                                        cube_query={query} 
                                        cube_api={props.cube_api} 
                                        cube_token={props.cube_token}
                                        columns={props.columns?props.columns:null}
                                        depth={props.depth+1}
                                    />
                                    )
                                },
                                showExpandColumn: true,
                                
                                //expandRowByClick: true
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