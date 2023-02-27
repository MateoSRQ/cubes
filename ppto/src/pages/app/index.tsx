import style from './index.module.css'
// import Cube from '../cube'
import Header from '../header'
import Cube from '../cube'
import '@fontsource/archivo'
import {ConfigProvider, Table} from 'antd';

import { Button, Modal } from 'antd';
import {Scrollbars} from 'react-custom-scrollbars-2';
import useDimensions from "react-use-dimensions";
import numbro from "numbro";
import {useState} from "react";

const CUBEJS_TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NzY4MzMzMjd9.RE5KaVbp40TkQgnzJ0qOp-1XxAw7d-OaI_aDs25cTzU'
const CUBEJS_API = 'http://23.254.203.210:4000/cubejs-api/v1'

export default () => {
    const [ref, {x, y, width, height}] = useDimensions();
    const [modal1Open, setModal1Open] = useState(false);

    const handleItemClick = (record: any) => {
        console.log(record)
    }


    const cubejs_query = {
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
                "Data.actividadNivel2",
                "asc"
            ],
            [
                "Data.actividadNivel3",
                "asc"
            ],
            [
                "Data.actividadNivel4",
                "asc"
            ],
            [
                "Data.actividadNivel5",
                "asc"
            ],
            [
                "Data.actividadNivel6",
                "asc"
            ],
            [
                "Data.actividadNivel7",
                "asc"
            ],
            /*
            [
                "Data.categoriaNivel1",
                "asc"
            ],
            [
                "Data.categoriaNivel2",
                "asc"
            ],

            [
                "Data.centroNivel1",
                "asc"
            ],
            [
                "Data.centroNivel2",
                "asc"
            ],
             */
            [
                "Data.date",
                "asc"
            ],
        ]
    }
    const columns = [
        {
            "title": "Actividad",
            "dataIndex": "Data.actividad",
            "name": "Data.actividad",
            render: (text: any, record: any) => (
                <div style={{width: '300px', whiteSpace: 'pre-wrap'}}>
                    {text}
                </div>
            ),
        },
        /*
        {
            "title": "Categoría",
            "dataIndex": "Data.categoriaNivel1",
            "name": "Data.categoriaNivel1",
            render: (text: any, record: any) => (
                <div style={{width: '300px', whiteSpace: 'pre-wrap'}}>
                    {text}
                </div>
            ),
        },
        {
            "title": "Sub Categoría",
            "dataIndex": "Data.categoriaNivel2",
            "name": "Data.categoriaNivel2",
            render: (text: any, record: any) => (
                <div style={{width: '300px', whiteSpace: 'pre-wrap'}}>
                    {text}
                </div>
            ),
        },
        {
            "title": "Centro de Costo",
            "dataIndex": "Data.centroNivel1",
            "name": "Data.centroNivel1",
            render: (text: any, record: any) => (
                <div style={{width: '150px', whiteSpace: 'pre-wrap'}}>
                    {text}
                </div>
            ),
        },
        {
            "title": "Sub Centro de Costo",
            "dataIndex": "Data.centroNivel2",
            "name": "Data.centroNivel2",
            render: (text: any, record: any) => (
                <div style={{width: '150px', whiteSpace: 'pre-wrap'}}>
                    {text}
                </div>
            ),
        },
        */
        {
            "title": "ene-23",
            "dataIndex": "2023-01-01T00:00:00.000,Data.totalAmount",
            "name": "2023-01-01T00:00:00.000,Data.totalAmount",
            "width": "200px",
            "render": function (text: any, record: any, index: any) {
                console.log('record')
                console.log(record)
                return (
                    <div
                        style={{wordWrap: 'break-word', wordBreak: 'break-word', width: '140px', textAlign: 'right'}}
                        onClick={()=> { handleItemClick(record)}}
                        className={style.item}
                    >
                        {isNaN(text) ? 0.00 : numbro(text).format({mantissa: 2, thousandSeparated: true})}
                    </div>
                )
            }
        },
        {
            "title": "feb-23",
            "dataIndex": "2023-02-01T00:00:00.000,Data.totalAmount",
            "name": "2023-02-01T00:00:00.000,Data.totalAmount",
            "width": "200px",
            "render": function (text: any, record: any, index: any) {
                return (
                    <div style={{wordWrap: 'break-word', wordBreak: 'break-word', width: '140px', textAlign: 'right'}}>
                        {isNaN(text) ? 0.00 : numbro(text).format({mantissa: 2, thousandSeparated: true})}
                    </div>
                )
            }
        },
        {
            "title": "mar-23",
            "dataIndex": "2023-03-01T00:00:00.000,Data.totalAmount",
            "name": "2023-03-01T00:00:00.000,Data.totalAmount",
            "width": "200px",
            "render": function (text: any, record: any, index: any) {
                return (
                    <div style={{wordWrap: 'break-word', wordBreak: 'break-word', width: '140px', textAlign: 'right'}}>
                        {isNaN(text) ? 0.00 : numbro(text).format({mantissa: 2, thousandSeparated: true})}
                    </div>
                )
            }
        },
        {
            "title": "abr-23",
            "dataIndex": "2023-04-01T00:00:00.000,Data.totalAmount",
            "name": "2023-04-01T00:00:00.000,Data.totalAmount",
            "width": "200px",
            "render": function (text: any, record: any, index: any) {
                return (
                    <div style={{wordWrap: 'break-word', wordBreak: 'break-word', width: '140px', textAlign: 'right'}}>
                        {isNaN(text) ? 0.00 : numbro(text).format({mantissa: 2, thousandSeparated: true})}
                    </div>
                )
            }
        },
        {
            "title": "may-23",
            "dataIndex": "2023-05-01T00:00:00.000,Data.totalAmount",
            "name": "2023-05-01T00:00:00.000,Data.totalAmount",
            "width": "200px",
            "render": function (text: any, record: any, index: any) {
                return (
                    <div style={{wordWrap: 'break-word', wordBreak: 'break-word', width: '140px', textAlign: 'right'}}>
                        {isNaN(text) ? 0.00 : numbro(text).format({mantissa: 2, thousandSeparated: true})}
                    </div>
                )
            }
        },
        {
            "title": "jun-23",
            "dataIndex": "2023-06-01T00:00:00.000,Data.totalAmount",
            "name": "2023-06-01T00:00:00.000,Data.totalAmount",
            "width": "200px",
            "render": function (text: any, record: any, index: any) {
                return (
                    <div style={{wordWrap: 'break-word', wordBreak: 'break-word', width: '140px', textAlign: 'right'}}>
                        {isNaN(text) ? 0.00 : numbro(text).format({mantissa: 2, thousandSeparated: true})}
                    </div>
                )
            }
        },
        {
            "title": "jul-23",
            "dataIndex": "2023-07-01T00:00:00.000,Data.totalAmount",
            "name": "2023-07-01T00:00:00.000,Data.totalAmount",
            "width": "200px",
            "render": function (text: any, record: any, index: any) {
                return (
                    <div style={{wordWrap: 'break-word', wordBreak: 'break-word', width: '140px', textAlign: 'right'}}>
                        {isNaN(text) ? 0.00 : numbro(text).format({mantissa: 2, thousandSeparated: true})}
                    </div>
                )
            }
        },
        {
            "title": "ago-23",
            "dataIndex": "2023-08-01T00:00:00.000,Data.totalAmount",
            "name": "2023-08-01T00:00:00.000,Data.totalAmount",
            "width": "200px",
            "render": function (text: any, record: any, index: any) {
                return (
                    <div style={{wordWrap: 'break-word', wordBreak: 'break-word', width: '140px', textAlign: 'right'}}>
                        {isNaN(text) ? 0.00 : numbro(text).format({mantissa: 2, thousandSeparated: true})}
                    </div>
                )
            }
        },
        {
            "title": "sep-23",
            "dataIndex": "2023-09-01T00:00:00.000,Data.totalAmount",
            "name": "2023-09-01T00:00:00.000,Data.totalAmount",
            "width": "200px",
            "render": function (text: any, record: any, index: any) {
                return (
                    <div style={{wordWrap: 'break-word', wordBreak: 'break-word', width: '140px', textAlign: 'right'}}>
                        {isNaN(text) ? 0.00 : numbro(text).format({mantissa: 2, thousandSeparated: true})}
                    </div>
                )
            }
        },
        {
            "title": "oct-23",
            "dataIndex": "2023-10-01T00:00:00.000,Data.totalAmount",
            "name": "2023-10-01T00:00:00.000,Data.totalAmount",
            "width": "200px",
            "render": function (text: any, record: any, index: any) {
                return (
                    <div style={{wordWrap: 'break-word', wordBreak: 'break-word', width: '140px', textAlign: 'right'}}>
                        {isNaN(text) ? 0.00 : numbro(text).format({mantissa: 2, thousandSeparated: true})}
                    </div>
                )
            }
        },
        {
            "title": "nov-23",
            "dataIndex": "2023-11-01T00:00:00.000,Data.totalAmount",
            "name": "2023-11-01T00:00:00.000,Data.totalAmount",
            "width": "200px",
            "render": function (text: any, record: any, index: any) {
                return (
                    <div style={{wordWrap: 'break-word', wordBreak: 'break-word', width: '140px', textAlign: 'right'}}>
                        {isNaN(text) ? 0.00 : numbro(text).format({mantissa: 2, thousandSeparated: true})}
                    </div>
                )
            }
        },
        {
            "title": "dic-23",
            "dataIndex": "2023-12-01T00:00:00.000,Data.totalAmount",
            "name": "2023-12-01T00:00:00.000,Data.totalAmount",
            "width": "200px",
            "render": function (text: any, record: any, index: any) {
                return (
                    <div style={{wordWrap: 'break-word', wordBreak: 'break-word', width: '140px', textAlign: 'right'}}>
                        {isNaN(text) ? 0.00 : numbro(text).format({mantissa: 2, thousandSeparated: true})}
                    </div>
                )
            }
        },
        {
            "title": "ene-24",
            "dataIndex": "2024-01-01T00:00:00.000,Data.totalAmount",
            "name": "2024-01-01T00:00:00.000,Data.totalAmount",
            "width": "200px",
            "render": function (text: any, record: any, index: any) {
                return (
                    <div style={{wordWrap: 'break-word', wordBreak: 'break-word', width: '140px', textAlign: 'right'}}>
                        {isNaN(text) ? 0.00 : numbro(text).format({mantissa: 2, thousandSeparated: true})}
                    </div>
                )
            }
        },
        {
            "title": "feb-24",
            "dataIndex": "2024-02-01T00:00:00.000,Data.totalAmount",
            "name": "2024-02-01T00:00:00.000,Data.totalAmount",
            "width": "200px",
            "render": function (text: any, record: any, index: any) {
                return (
                    <div style={{wordWrap: 'break-word', wordBreak: 'break-word', width: '140px', textAlign: 'right'}}>
                        {isNaN(text) ? 0.00 : numbro(text).format({mantissa: 2, thousandSeparated: true})}
                    </div>
                )
            }
        },
        {
            "title": "mar-24",
            "dataIndex": "2024-03-01T00:00:00.000,Data.totalAmount",
            "name": "2024-03-01T00:00:00.000,Data.totalAmount",
            "width": "200px",
            "render": function (text: any, record: any, index: any) {
                return (
                    <div style={{wordWrap: 'break-word', wordBreak: 'break-word', width: '140px', textAlign: 'right'}}>
                        {isNaN(text) ? 0.00 : numbro(text).format({mantissa: 2, thousandSeparated: true})}
                    </div>
                )
            }
        },
        {
            "title": "abr-24",
            "dataIndex": "2024-04-01T00:00:00.000,Data.totalAmount",
            "name": "2024-04-01T00:00:00.000,Data.totalAmount",
            "width": "200px",
            "render": function (text: any, record: any, index: any) {
                return (
                    <div style={{wordWrap: 'break-word', wordBreak: 'break-word', width: '140px', textAlign: 'right'}}>
                        {isNaN(text) ? 0.00 : numbro(text).format({mantissa: 2, thousandSeparated: true})}
                    </div>
                )
            }
        },
        {
            "title": "may-24",
            "dataIndex": "2024-05-01T00:00:00.000,Data.totalAmount",
            "name": "2024-05-01T00:00:00.000,Data.totalAmount",
            "width": "200px",
            "render": function (text: any, record: any, index: any) {
                return (
                    <div style={{wordWrap: 'break-word', wordBreak: 'break-word', width: '140px', textAlign: 'right'}}>
                        {isNaN(text) ? 0.00 : numbro(text).format({mantissa: 2, thousandSeparated: true})}
                    </div>
                )
            }
        },
        {
            "title": "jun-24",
            "dataIndex": "2024-06-01T00:00:00.000,Data.totalAmount",
            "name": "2024-06-01T00:00:00.000,Data.totalAmount",
            "width": "200px",
            "render": function (text: any, record: any, index: any) {
                return (
                    <div style={{wordWrap: 'break-word', wordBreak: 'break-word', width: '140px', textAlign: 'right'}}>
                        {isNaN(text) ? 0.00 : numbro(text).format({mantissa: 2, thousandSeparated: true})}
                    </div>
                )
            }
        },
        {
            "title": "jul-24",
            "dataIndex": "2024-07-01T00:00:00.000,Data.totalAmount",
            "name": "2024-07-01T00:00:00.000,Data.totalAmount",
            "width": "200px",
            "render": function (text: any, record: any, index: any) {
                return (
                    <div style={{wordWrap: 'break-word', wordBreak: 'break-word', width: '140px', textAlign: 'right'}}>
                        {isNaN(text) ? 0.00 : numbro(text).format({mantissa: 2, thousandSeparated: true})}
                    </div>
                )
            }
        },
        {
            "title": "ago-24",
            "dataIndex": "2024-08-01T00:00:00.000,Data.totalAmount",
            "name": "2024-08-01T00:00:00.000,Data.totalAmount",
            "width": "200px",
            "render": function (text: any, record: any, index: any) {
                return (
                    <div style={{wordWrap: 'break-word', wordBreak: 'break-word', width: '140px', textAlign: 'right'}}>
                        {isNaN(text) ? 0.00 : numbro(text).format({mantissa: 2, thousandSeparated: true})}
                    </div>
                )
            }
        },
        {
            "title": "sep-24",
            "dataIndex": "2024-09-01T00:00:00.000,Data.totalAmount",
            "name": "2024-09-01T00:00:00.000,Data.totalAmount",
            "width": "200px",
            "render": function (text: any, record: any, index: any) {
                return (
                    <div style={{wordWrap: 'break-word', wordBreak: 'break-word', width: '140px', textAlign: 'right'}}>
                        {isNaN(text) ? 0.00 : numbro(text).format({mantissa: 2, thousandSeparated: true})}
                    </div>
                )
            }
        },
        {
            "title": "oct-24",
            "dataIndex": "2024-10-01T00:00:00.000,Data.totalAmount",
            "name": "2024-10-01T00:00:00.000,Data.totalAmount",
            "width": "200px",
            "render": function (text: any, record: any, index: any) {
                return (
                    <div style={{wordWrap: 'break-word', wordBreak: 'break-word', width: '140px', textAlign: 'right'}}>
                        {isNaN(text) ? 0.00 : numbro(text).format({mantissa: 2, thousandSeparated: true})}
                    </div>
                )
            }
        },
        {
            "title": "nov-24",
            "dataIndex": "2024-11-01T00:00:00.000,Data.totalAmount",
            "name": "2024-11-01T00:00:00.000,Data.totalAmount",
            "width": "200px",
            "render": function (text: any, record: any, index: any) {
                return (
                    <div style={{wordWrap: 'break-word', wordBreak: 'break-word', width: '140px', textAlign: 'right'}}>
                        {isNaN(text) ? 0.00 : numbro(text).format({mantissa: 2, thousandSeparated: true})}
                    </div>
                )
            }
        },
        {
            "title": "dic-24",
            "dataIndex": "2024-12-01T00:00:00.000,Data.totalAmount",
            "name": "2024-12-01T00:00:00.000,Data.totalAmount",
            "width": "200px",
            "render": function (text: any, record: any, index: any) {
                return (
                    <div style={{wordWrap: 'break-word', wordBreak: 'break-word', width: '140px', textAlign: 'right'}}>
                        {isNaN(text) ? 0.00 : numbro(text).format({mantissa: 2, thousandSeparated: true})}
                    </div>
                )
            }
        }
    ]

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
                        {/* <Header /> */}
                    </div>
                    <Scrollbars className={style.tableContainer} style={{
                        width: (width - 60) + 'px',
                        height: (height - 200) + 'px',
                        marginLeft: '30px'
                    }}>

                        <Cube
                            cube_api={CUBEJS_API}
                            cube_token={CUBEJS_TOKEN}
                            cube_query={cubejs_query}
                            columns={columns}
                            depth={1}
                            //handleItemClick={handleItemClick}
                        />
                    </Scrollbars>
                </div>
            </div>
            <Modal
                title="20px to Top"
                centered
                open={modal1Open}
                onOk={() => setModal1Open(false)}
                onCancel={() => setModal1Open(false)}
            >
                <p>some contents...</p>
                <p>some contents...</p>
                <p>some contents...</p>
            </Modal>
        </ConfigProvider>
    )
}

