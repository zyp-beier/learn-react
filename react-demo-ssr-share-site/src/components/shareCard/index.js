import React from "react";
import '../../style/shareCard.css'
import {info} from "../../utils/utils";

class ShareCard extends React.Component{

    constructor(props) {
        super(props);
        info('shared card init')
    }

    render() {
        return (
            <div className="shareCard">
                {/* eslint-disable-next-line no-script-url,jsx-a11y/anchor-is-valid */}
                <a href="javascript:void(0)" title={'点击查看'}>
                    <div className="album">
                        <img className="album-img" src={this.props.album} alt=""/>
                    </div>
                </a>

                <div className="content">
                    <span className="title">分享人</span>
                    <span className="value share-name">{this.props.share_author}</span>
                </div>
                <div className="card-footer">
                    <span>{this.props.share_date}</span>
                </div>
            </div>
        );
    }
}

export default ShareCard;
