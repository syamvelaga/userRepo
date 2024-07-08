import {Component} from "react";

import {Button, Flex,Switch} from '@adobe/react-spectrum'


import Header from "../Header";
import SideMenu from "../SideMenu";



import "./index.css";


class AirportDetailedView extends Component{

    render(){
        return (<>
            <Header/>
            <div className="airports-detailed-view-main-container">
            <SideMenu/>
            <div className="airports-detailed-view-container">
              <div> 
              <p className="detailed-view-text">Airports {`>`} <span className="span-text">Indira Gandhi International Airport</span></p><br/>
                <h1 className="heading-detailed-view">Indira Gandhi International Airport</h1>
            </div> 
            <div className="tabs-container">
                <p className="detailed-view-text>Terminals tabs">Terminals</p>
                <p className="detailed-view-text>Terminals tabs">Transports</p>
                <p className="detailed-view-text>Terminals tabs">Contact details</p>
            </div>
            <hr />
            <div className="card-container">
                <div className="card">
                    <img src="https://res.cloudinary.com/dq6jxocbv/image/upload/v1720102663/Image_nlmuzb.png" alt="alternate" className="custom-image-size"/>
                    <div>
                        <h1 className="terminal-text-image">Terminal1 ...</h1>
                        <p className="terminal-text-image-para">Terminals description</p>
                    </div>
                </div>
                <div className="card">
                    <img src="https://res.cloudinary.com/dq6jxocbv/image/upload/v1720102663/Image_nlmuzb.png" alt="alternate" className="custom-image-size"/>
                    <div>
                        <h1 className="terminal-text-image">Terminal1 ...</h1>
                        <p className="terminal-text-image-para">Terminals description</p>
                    </div>
                </div>
                <Flex wrap gap="size-250">
                <Button variant="primary" style={{'style':'outline'}}>+Add terminal</Button>
                </Flex>
            </div>
            <h1 className="heading-detailed-view">Services</h1><br/>
            <p className="terminal-text-image-para">Lost&found</p><br/>
            <hr />
            <br/>
            <div className="form-container">
                <div className="input-element-container">
                    <label for="serviceName" className="label-text">Service Name</label><br/>
                    <input className="input-element" type="text" placeholder="Lost&found" id="serviceName"/>
                </div>
                <div className="input-element-container">
                    <label for="category" className="label-text">Category</label><br/>
                    <select className="input-element" type="select" placeholder="Lost&found" id="category">
                        <option>option1</option>
                    </select>
                </div>
                <div className="input-element-container">
                <label for="subcategory" className="label-text">Sub Category</label><br/>
                <select className="input-element" type="select" placeholder="Lost&found" id="subcategory">
                        <option>option1</option>
                    </select>
                </div>
                <div className="input-element-container">
                    <label for="description" className="label-text">Description</label><br/>
                    <input className="input-element" type="text" id="description"/>
                </div>
                <input type="file"/>
                <Switch name="power" value="low">Low power mode</Switch>
            </div>
            <br/>
            <p className="terminal-text-image-para">Lounge</p><br/>
            <hr/><br/>
            <p className="terminal-text-image-para">Money Excange</p><br/>
            <hr/>
            </div>
            </div>
        </>)
    }
}
export default AirportDetailedView;