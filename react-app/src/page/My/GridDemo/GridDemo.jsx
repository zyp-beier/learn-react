import React, { Component } from 'react'
import { Grid } from 'antd-mobile';


export default class GridDemo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            obj: 'HELLO',
            arr: [],
        }
    }

    render() {
        const { obj, arr } = this.state

        const data1 = Array.from(new Array(9)).map(() => ({
            icon: 'https://gw.alipayobjects.com/zos/rmsportal/WXoqXTHrSnRcUwEaQgXJ.png',
        }));
        return (
            <div>
                <div>
                    <span>传值:</span>
                    <span>{this.props.message}</span>
                </div>
                <div>
                    <span>插槽:</span>
                    <span>{this.props.children}</span>
                </div>
                {data1.length && <div>{data1.length}</div>}
                {arr.length && <div>{arr.length}</div>}
                <div>{obj.toLowerCase()}</div>
                <div>这就是{obj}</div>
                <Grid data={data1}
                    columnNum={3}
                    renderItem={dataItem => (
                        <div style={{ padding: '12.5px' }}>
                            <img src={dataItem.icon} style={{ width: '75px', height: '75px' }} alt="" />
                            <div style={{ color: '#888', fontSize: '14px', marginTop: '12px' }}>
                                <span>I am title..</span>
                            </div>
                        </div>
                    )}
                />
            </div>
        )
    }
}
