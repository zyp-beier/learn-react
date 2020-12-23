import React from "react";
import '../../style/footer.css'
import {info} from "../../utils/utils";

export default class Footer extends React.Component{

    constructor(props) {
        super(props);
        info('init footer')
    }

    componentDidMount() {
        window.addEventListener("scroll", ev => {
            console.log(document.documentElement.scrollTop);
        });
    }

    render() {
        return (
            <footer className='footer'>
                <div className='footer-wrap'>
                    <div>
                        <span> &copy;2019 SSR share </span>
                    </div>
                    <div>
                        <span>AaronW</span>
                    </div>
                </div>
            </footer>
        );
    }
}
