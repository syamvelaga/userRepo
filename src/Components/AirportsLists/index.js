import {Component} from "react";
import{v4 as uuidv4} from "uuid";
import {Link} from "react-router-dom";

import { Button, Flex, Checkbox} from '@adobe/react-spectrum';
import { MdEdit } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";

import { FaArrowDown } from "react-icons/fa6";
import EditingDetails from "../EditingDetails";
import AddItemsToList from "../AddItemsToList";



import "./index.css";



class AirportsLists extends Component{

    state={lists:[{id:1,airport:"Indira Gandhi International Airport",country:"India",code:"DEL",terminals:3},
        {id:uuidv4(),airport:"Dubai International Airport",country:"UAE",code:"DXB",terminals:5},
        {id:uuidv4(),airport:"Heathrow Airport",country:"England",code:"LHR",terminals:6},
        {id:uuidv4(),airport:"Isthanbul Airport",country:"Turkey",code:"IST",terminals:3},
        {id:uuidv4(),airport:"Rajiv Gandhi International Airport",country:"Texas",code:"DFW",terminals:14},
        {id:uuidv4(),airport:"Rajiv Gandhi2 International Airport",country:"Texas",code:"DFW",terminals:14}
    ],editObject:"",editClicked:false,additemClicked:false}

    deleteItem = (event) =>{
        const{lists} = this.state;
        const deletedItemToLost = lists.filter((each) => (each.id !== event.currentTarget.id));
        this.setState({lists:deletedItemToLost})
       
    }

    editiDetails = (event) =>{
        const{lists} = this.state;
        const fingEditedObject = lists.find((each) =>(each.id === event.currentTarget.id));
        this.setState({editObject:fingEditedObject,editClicked:true})
    }

    updateSuccessfull = (updatedData) =>{
        const{lists} = this.state;
        const afterEditedData = lists.map((each) =>{
            if(each.id === updatedData.id){
                return{
                    id:updatedData.id,
                    airport:updatedData.airport,
                    country:updatedData.country,
                    code:updatedData.code,
                    terminals:updatedData.terminals
                }

            }
            return each;
        })
        
        this.setState({lists:afterEditedData,editClicked:false});
    }

    addItemToList = () =>{
        this.setState({additemClicked:true});
    }

    addSuccessfully = (addObject) =>{
        this.setState((prevState) => ({lists:[...prevState.lists,addObject],additemClicked:false}))
    }

    render(){
        const{lists,editObject,editClicked,additemClicked} = this.state
        const renderPage = editClicked?(<EditingDetails object = {editObject} updateSuccessfull={this.updateSuccessfull}/>):(
            <div className="airports-list-main-container">
                <div className="airport-title-container">
                    <h1 className="airports-list-heading-text">Airports</h1>
                    <Flex wrap gap="size-250">
                        <Button variant="primary" style={{'style':'fill'}} onClick={this.addItemToList}>+Add new</Button>
                    </Flex>
                </div>
                <div className="list-of-table-airports-container">
                    <div className="all-list-container-table-header">
                        <div className="check-box-container">
                            <Checkbox></Checkbox>
                            <p className="Airport-para-text">Airports</p>
                            <FaArrowDown color="#969693"/>
                        </div>
                        <div className="right-side-table-heading-container">
                            <p className="Airport-para-text">Country</p>
                            <p className="Airport-para-text">Code</p>
                            <p className="Airport-para-text">Terminals</p>
                        </div>
                    </div>
                </div>
                    <ul className="airports-list-container">
                       {lists.map( (each) =>(
                        
                        <li className="each-list-item-container" key={each.id}>
                            
                            <div className="list-item-content-container">
                                <div className="check-box-container-items">
                                    <Checkbox></Checkbox>
                                    <Link to="/details" className="link-style-custom"><p className="list-items-airport-lists">{each.airport}</p></Link>
                                </div>
                                <div className="right-side-table-heading-container">
                                    
                                    <p className="Airport-para-text-list-items">{each.country}</p>
                                    <p className="Airport-para-text-list-items">{each.code}</p>
                                    <p className="Airport-para-text-list-items">{each.terminals}</p>
                                    
                                </div>
                            </div>
                            <div className="buttons-container">
                                <MdEdit size="40px" onClick={this.editiDetails} id={each.id}/>
                                <RiDeleteBin6Line size="40px" onClick={this.deleteItem} id={each.id}/>
                            </div>
                        </li>
                        ))}
                        
                        
                    </ul>
                
            </div>
                    );

        const viewPage = additemClicked ? (<AddItemsToList addSuccessfully={this.addSuccessfully}/>) : (renderPage);
      
        return (
            <>
            {viewPage}
            </>
              )
    
}

}
export default AirportsLists;