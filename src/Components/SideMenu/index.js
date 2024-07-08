import {Component} from "react";

import { AiFillHome } from "react-icons/ai";
import { RxDashboard } from "react-icons/rx";

import "./index.css";

class SideMenu extends Component{

    render(){

        return(
            <div className="side-menu-container">
                <div className="home-icon-container">
                    <AiFillHome size="25px"/>
                    <p className="home-label-text">Home</p>
                </div>
                <div className="home-icon-container">
                    <RxDashboard size="25px"/>
                    <p className="home-label-text">Dashboard</p>
                </div>
                <h1 className="service-heading-text">Services</h1>
                <ul className="list-container-side-menu">
                    <li className="list-items-side-menu">Airports</li>
                    <li className="list-items-side-menu">Videos</li>
                </ul>
                <h1 className="service-heading-text">Others</h1>
                <ul className="list-container-side-menu">
                    <li className="list-items-side-menu">List 1</li>
                    <li className="list-items-side-menu">List 2</li>
                    <li className="list-items-side-menu">List 3</li>
                </ul>
            </div>
        )
    }

}
export default SideMenu;