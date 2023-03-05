import {useEffect, useState} from 'react'
import cubejs from '@cubejs-client/core';
import {useCubeQuery} from '@cubejs-client/react';
import style from './index.module.css'
import type {ColumnsType} from 'antd/es/table';
import {StyleProvider} from '@ant-design/cssinjs';
import numbro from 'numbro'
import {ConfigProvider, Table} from 'antd';
import {format, add} from 'date-fns'
import {es} from 'date-fns/locale';
import {LoadingOutlined} from '@ant-design/icons';
import {Spin} from 'antd';
import hash from 'object-hash'

const userInput = '\u200B';
const antIcon = <LoadingOutlined style={{fontSize: 48}} spin/>

const Cube = (props: any) => {
    const cubejsApi = cubejs(props.cube_token, {
        apiUrl: props.cube_api,
    });
    const {resultSet, isLoading, error, progress} = useCubeQuery(props.cube_query, {cubejsApi: cubejsApi});
    let _dataSource: any = []
    let _columns = new Set()

    if (resultSet) {
        _dataSource = resultSet?.tablePivot({
            x: ['Data.actividad'],
            y: ['Data.date', 'measures']
        });
        _columns = props.columns
    }

    const dimensions = [
        "Data.actividadNivel1",
        "Data.actividadNivel2",
        "Data.actividadNivel3",
        "Data.actividadNivel4",
        "Data.actividadNivel5",
        "Data.actividadNivel6",
        "Data.actividadNivel7",
    ]

    for (let i = 0; i < _dataSource.length; i++) {
        //_dataSource[i].key = Math.random()
        console.log('DATASOURCE')
        console.log(_dataSource)
        _dataSource[i]['Data.actividad'] = ''
        for (let j = 1; j <= 7; j++) {
            if (_dataSource[i]['Data.actividadNivel' + j] != undefined) {
                _dataSource[i]['Data.actividad'] = userInput.padEnd(j * 5) + _dataSource[i]['Data.actividadNivel' + j]
            } else {
                // return
            }
        }
        _dataSource[i].key = hash(_dataSource[i])
        _dataSource[i]['s2023'] = 
            Number(_dataSource[i]['2023-01-01T00:00:00.000,Data.totalAmount'])+
            Number(_dataSource[i]['2023-02-01T00:00:00.000,Data.totalAmount'])+
            Number(_dataSource[i]['2023-03-01T00:00:00.000,Data.totalAmount'])+
            Number(_dataSource[i]['2023-04-01T00:00:00.000,Data.totalAmount'])+
            Number(_dataSource[i]['2023-05-01T00:00:00.000,Data.totalAmount'])+
            Number(_dataSource[i]['2023-06-01T00:00:00.000,Data.totalAmount'])+
            Number(_dataSource[i]['2023-07-01T00:00:00.000,Data.totalAmount'])+
            Number(_dataSource[i]['2023-08-01T00:00:00.000,Data.totalAmount'])+
            Number(_dataSource[i]['2023-09-01T00:00:00.000,Data.totalAmount'])+
            Number(_dataSource[i]['2023-10-01T00:00:00.000,Data.totalAmount'])+
            Number(_dataSource[i]['2023-11-01T00:00:00.000,Data.totalAmount'])+
            Number(_dataSource[i]['2023-12-01T00:00:00.000,Data.totalAmount'])
        _dataSource[i]['s2024'] = 
            Number(_dataSource[i]['2024-01-01T00:00:00.000,Data.totalAmount'])+
            Number(_dataSource[i]['2024-02-01T00:00:00.000,Data.totalAmount'])+
            Number(_dataSource[i]['2024-03-01T00:00:00.000,Data.totalAmount'])+
            Number(_dataSource[i]['2024-04-01T00:00:00.000,Data.totalAmount'])+
            Number(_dataSource[i]['2024-05-01T00:00:00.000,Data.totalAmount'])+
            Number(_dataSource[i]['2024-06-01T00:00:00.000,Data.totalAmount'])+
            Number(_dataSource[i]['2024-07-01T00:00:00.000,Data.totalAmount'])+
            Number(_dataSource[i]['2024-08-01T00:00:00.000,Data.totalAmount'])+
            Number(_dataSource[i]['2024-09-01T00:00:00.000,Data.totalAmount'])+
            Number(_dataSource[i]['2024-10-01T00:00:00.000,Data.totalAmount'])+
            Number(_dataSource[i]['2024-11-01T00:00:00.000,Data.totalAmount'])+
            Number(_dataSource[i]['2024-12-01T00:00:00.000,Data.totalAmount'])

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
                    {(!resultSet || isLoading) &&
                        <div className={style.loader}>
                            <Spin indicator={antIcon}/>
                        </div>
                    }

                    <div className={style.tableContainer}>
                        <Table
                            dataSource={_dataSource}
                            columns={[..._columns]}
                            pagination={false}
                            expandable={{
                                expandedRowRender: (record) => {
                                    if (props.depth < 7) {
                                        let query = {...props.cube_query}
                                        query.dimensions = [
                                            ...dimensions.slice(0, props.depth + 1),
                                            "Data.date"
                                        ]

                                        let filters = []
                                        for (let i = 0; i <= props.depth; i++) {
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
                                                columns={props.columns ? props.columns : null}
                                                depth={props.depth + 1}
                                            />
                                        )
                                    }
                                },
                                showExpandColumn: true,
                                rowExpandable: (record) => { return (props.depth < 7) },
                            }}
                        />
                    </div>
                </div>
            </div>
        </ConfigProvider>
    )
}

export default Cube;