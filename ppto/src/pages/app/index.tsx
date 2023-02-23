import style from './index.module.css'
// import Cube from '../cube'
import Header from '../header'
import Cube from '../cube'
import '@fontsource/archivo'
import {ConfigProvider, Table} from 'antd';

import { Scrollbars } from 'react-custom-scrollbars-2';
import useDimensions from "react-use-dimensions";
import numbro from "numbro";

const CUBEJS_TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NzY4MzMzMjd9.RE5KaVbp40TkQgnzJ0qOp-1XxAw7d-OaI_aDs25cTzU'
const CUBEJS_API = 'http://23.254.203.210:4000/cubejs-api/v1'

export default () => {
    const [ref, { x, y, width, height }] = useDimensions();
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
            [
                "Data.date",
                "asc"
            ]
        ]
    }

    const columns = [
        {
            "title": "Actividad Nivel 1",
            "dataIndex": "Data.actividadNivel1",
            "name": "Data.actividadNivel1",
            render: (text: any, record: any) => (
                <div style={{ wordWrap: 'break-word', wordBreak: 'break-word', width: '240px' }}>
                    {text}
                </div>
            ),
        },
        {
            "title": "Actividad Nivel 2",
            "dataIndex": "Data.actividadNivel2",
            "name": "Data.actividadNivel2",
            render: (text: any, record: any) => (
                <div style={{ wordWrap: 'break-word', wordBreak: 'break-word', width: '240px' }}>
                    {text}
                </div>
            ),
        },
        {
            "title": "Actividad Nivel 3",
            "dataIndex": "Data.actividadNivel3",
            "name": "Data.actividadNivel3",
            render: (text: any, record: any) => (
                <div style={{ wordWrap: 'break-word', wordBreak: 'break-word', width: '240px' }}>
                    {text}
                </div>
            ),
        },
        {
            "title": "Actividad Nivel 4",
            "dataIndex": "Data.actividadNivel4",
            "name": "Data.actividadNivel4",
            render: (text: any, record: any) => (
                <div style={{ wordWrap: 'break-word', wordBreak: 'break-word', width: '240px' }}>
                    {text}
                </div>
            ),
        },
        {
            "title": "Actividad Nivel 5",
            "dataIndex": "Data.actividadNivel5",
            "name": "Data.actividadNivel5",
            render: (text: any, record: any) => (
                <div style={{ wordWrap: 'break-word', wordBreak: 'break-word', width: '240px' }}>
                    {text}
                </div>
            ),
        },
        {
            "title": "Actividad Nivel 6",
            "dataIndex": "Data.actividadNivel6",
            "name": "Data.actividadNivel6",
            render: (text: any, record: any) => (
                <div style={{ wordWrap: 'break-word', wordBreak: 'break-word', width: '240px' }}>
                    {text}
                </div>
            ),
        },
        {
            "title": "Actividad Nivel 7",
            "dataIndex": "Data.actividadNivel7",
            "name": "Data.actividadNivel7",
            render: (text: any, record: any) => (
                <div style={{ wordWrap: 'break-word', wordBreak: 'break-word', width: '240px' }}>
                    {text}
                </div>
            ),
        },
        {
            "title": "ene-23",
            "dataIndex": "2023-01-01T00:00:00.000,Data.totalAmount",
            "name": "2023-01-01T00:00:00.000,Data.totalAmount",
            "width": "200px",
            "render": function (text: any, record: any, index: any) {
                return (
                    <div style={{ wordWrap: 'break-word', wordBreak: 'break-word', width: '140px', textAlign: 'right' }}>
                        {isNaN(text)?0.00:numbro(text).format({mantissa: 2, thousandSeparated: true})}
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
                    <div style={{ wordWrap: 'break-word', wordBreak: 'break-word', width: '140px', textAlign: 'right' }}>
                        {isNaN(text)?0.00:numbro(text).format({mantissa: 2, thousandSeparated: true})}
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
                    <div style={{ wordWrap: 'break-word', wordBreak: 'break-word', width: '140px', textAlign: 'right' }}>
                        {isNaN(text)?0.00:numbro(text).format({mantissa: 2, thousandSeparated: true})}
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
                    <div style={{ wordWrap: 'break-word', wordBreak: 'break-word', width: '140px', textAlign: 'right' }}>
                        {isNaN(text)?0.00:numbro(text).format({mantissa: 2, thousandSeparated: true})}
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
                    <div style={{ wordWrap: 'break-word', wordBreak: 'break-word', width: '140px', textAlign: 'right' }}>
                        {isNaN(text)?0.00:numbro(text).format({mantissa: 2, thousandSeparated: true})}
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
                    <div style={{ wordWrap: 'break-word', wordBreak: 'break-word', width: '140px', textAlign: 'right' }}>
                        {isNaN(text)?0.00:numbro(text).format({mantissa: 2, thousandSeparated: true})}
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
                    <div style={{ wordWrap: 'break-word', wordBreak: 'break-word', width: '140px', textAlign: 'right' }}>
                        {isNaN(text)?0.00:numbro(text).format({mantissa: 2, thousandSeparated: true})}
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
                    <div style={{ wordWrap: 'break-word', wordBreak: 'break-word', width: '140px', textAlign: 'right' }}>
                        {isNaN(text)?0.00:numbro(text).format({mantissa: 2, thousandSeparated: true})}
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
                    <div style={{ wordWrap: 'break-word', wordBreak: 'break-word', width: '140px', textAlign: 'right' }}>
                        {isNaN(text)?0.00:numbro(text).format({mantissa: 2, thousandSeparated: true})}
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
                    <div style={{ wordWrap: 'break-word', wordBreak: 'break-word', width: '140px', textAlign: 'right' }}>
                        {isNaN(text)?0.00:numbro(text).format({mantissa: 2, thousandSeparated: true})}
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
                    <div style={{ wordWrap: 'break-word', wordBreak: 'break-word', width: '140px', textAlign: 'right' }}>
                        {isNaN(text)?0.00:numbro(text).format({mantissa: 2, thousandSeparated: true})}
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
                    <div style={{ wordWrap: 'break-word', wordBreak: 'break-word', width: '140px', textAlign: 'right' }}>
                        {isNaN(text)?0.00:numbro(text).format({mantissa: 2, thousandSeparated: true})}
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
                    <div style={{ wordWrap: 'break-word', wordBreak: 'break-word', width: '140px', textAlign: 'right' }}>
                        {isNaN(text)?0.00:numbro(text).format({mantissa: 2, thousandSeparated: true})}
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
                    <div style={{ wordWrap: 'break-word', wordBreak: 'break-word', width: '140px', textAlign: 'right' }}>
                        {isNaN(text)?0.00:numbro(text).format({mantissa: 2, thousandSeparated: true})}
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
                    <div style={{ wordWrap: 'break-word', wordBreak: 'break-word', width: '140px', textAlign: 'right' }}>
                        {isNaN(text)?0.00:numbro(text).format({mantissa: 2, thousandSeparated: true})}
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
                    <div style={{ wordWrap: 'break-word', wordBreak: 'break-word', width: '140px', textAlign: 'right' }}>
                        {isNaN(text)?0.00:numbro(text).format({mantissa: 2, thousandSeparated: true})}
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
                    <div style={{ wordWrap: 'break-word', wordBreak: 'break-word', width: '140px', textAlign: 'right' }}>
                        {isNaN(text)?0.00:numbro(text).format({mantissa: 2, thousandSeparated: true})}
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
                    <div style={{ wordWrap: 'break-word', wordBreak: 'break-word', width: '140px', textAlign: 'right' }}>
                        {isNaN(text)?0.00:numbro(text).format({mantissa: 2, thousandSeparated: true})}
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
                    <div style={{ wordWrap: 'break-word', wordBreak: 'break-word', width: '140px', textAlign: 'right' }}>
                        {isNaN(text)?0.00:numbro(text).format({mantissa: 2, thousandSeparated: true})}
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
                    <div style={{ wordWrap: 'break-word', wordBreak: 'break-word', width: '140px', textAlign: 'right' }}>
                        {isNaN(text)?0.00:numbro(text).format({mantissa: 2, thousandSeparated: true})}
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
                    <div style={{ wordWrap: 'break-word', wordBreak: 'break-word', width: '140px', textAlign: 'right' }}>
                        {isNaN(text)?0.00:numbro(text).format({mantissa: 2, thousandSeparated: true})}
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
                    <div style={{ wordWrap: 'break-word', wordBreak: 'break-word', width: '140px', textAlign: 'right' }}>
                        {isNaN(text)?0.00:numbro(text).format({mantissa: 2, thousandSeparated: true})}
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
                    <div style={{ wordWrap: 'break-word', wordBreak: 'break-word', width: '140px', textAlign: 'right' }}>
                        {isNaN(text)?0.00:numbro(text).format({mantissa: 2, thousandSeparated: true})}
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
                    <div style={{ wordWrap: 'break-word', wordBreak: 'break-word', width: '140px', textAlign: 'right' }}>
                        {isNaN(text)?0.00:numbro(text).format({mantissa: 2, thousandSeparated: true})}
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
                    <Scrollbars className={style.tableContainer}  style={{
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
                        />
                    </Scrollbars>
                </div>
            </div>
        </ConfigProvider>
    )
}

