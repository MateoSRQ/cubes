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

const userInput = '\u200B';
const antIcon = <LoadingOutlined style={{fontSize: 48}} spin/>

const Cube = (props: any) => {
    const cubejsApi = cubejs(props.cube_token, {
        apiUrl: props.cube_api,
    });
    const {resultSet, isLoading, error, progress} = useCubeQuery(props.cube_query, {cubejsApi: cubejsApi});
    let _dataSource: any = []
    let _columns = new Set()


    console.log('cube')
    console.log(props)
    console.log('isLoading: ' + isLoading)
    console.log('error: ' + error)
    console.log('progress: ' + JSON.stringify(progress))

    if (!resultSet) {
        return null;
    } else {
        _dataSource = resultSet?.tablePivot({
            x: ['Data.actividad'],
            y: ['Data.date', 'measures']
        });
        _columns = props.columns
        /*
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
        } else {
            console.log('feed columns')
            _columns = props.columns
        }
        */
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

    /*
    console.log('dimensions')
    console.log(props.depth + 1)
    console.log([
        ...dimensions.slice(0, props.depth + 1),
        "Data.date"
    ])
    */

    for (let i = 0; i < _dataSource.length; i++) {
        _dataSource[i].key = Math.random()
        _dataSource[i]['Data.actividad'] = ''
        for (let j = 1; j <= 7; j++) {
            if (_dataSource[i]['Data.actividadNivel' + j] != undefined) {
                _dataSource[i]['Data.actividad'] = userInput.padEnd(j * 5) + _dataSource[i]['Data.actividadNivel' + j]
            } else {
                // return
            }
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
                <div className={style.container}>
                    {isLoading &&
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
                                        //if (props.depth < 6) {
                                        //if (props.depth < 7) {
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
                              //rowExpandable: (record) => { return (props.depth < 7) },
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