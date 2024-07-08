import {Component} from "react";
import { Avatar} from '@adobe/react-spectrum';

import "./index.css";

class Header extends Component{

    render(){
        return (<div className="header-container">
            <h1 className="header-title">hava hava</h1>
           
            <Avatar src="https://res.cloudinary.com/dq6jxocbv/image/upload/v1720102537/Avatar_-_Desktop_-_Light_zw5w2q.png" alt="default Adobe avatar" size="extra-large"/>
            
            </div>)
    }

}
export default Header;