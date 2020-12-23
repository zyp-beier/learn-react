import React from "react";
import {Link} from "react-router-dom";

export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            index:'首页',
            product: '产品',
            about: '关于我们',
            id:8,
            gid: 40
        }
    }
    render() {
        return(
            <div>
                <div>
                    <ul>
                        <li><Link to='/'>{this.state.index} </Link></li>
                            <li><Link to={ `/product/${this.state.id}`}>{this.state.product} </Link></li>
                        <li><Link to={`/about/${this.state.gid}`}>{this.state.about} </Link></li>
                    </ul>
                </div>
            </div>
        )
    }
}
