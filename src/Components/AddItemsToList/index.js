import {Component} from "react";
import {v4 as uuidv4} from "uuid";

import "./index.css";

class AddItemsToList extends Component{

    state = {editMesg:"",id:"",airportName:"",countryName:"",countryCode:"",terminal:""}

    changeAirportName = (event) =>{
        this.setState({airportName:event.target.value});
    }

    changeCountryName = (event) =>{
        this.setState( {countryName:event.target.value});
    }

    changeCountryCode = (event) =>{
        this.setState({countryCode:event.target.value});
    }

    changeTerminals = (event) =>{
        this.setState({terminal:event.target.value});
    }

    submitForm = (event) =>{
        event.preventDefault();
        this.setState({editMesg:"Successfully Updated"})
        const{airportName,countryName,countryCode,terminal} = this.state;
        const {addSuccessfully} = this.props;
        console.log(uuidv4());
        const newObject = {
            id:uuidv4(),
            airport:airportName,
            country:countryName,
            code:countryCode,
            terminals:terminal
        }
        addSuccessfully(newObject);
        
    }

    render(){
        const{editMesg,airportName,countryName,countryCode,terminal} = this.state;
        
        
     
        return(<div className="editing-page-container add-item-container">
            <form onSubmit={this.submitForm}>
                
                    <label for="airportName" className="label-text">AirportName:</label><br/>
                    <input className="input-element" type="text" placeholder="enter airportname" value={airportName} id="airportName" onChange={this.changeAirportName}/>
                    <br/><br/>
                    <label for="countryName" className="label-text">Country Name:</label><br/>
                    <input className="input-element" type="text" placeholder="enter countryname" value={countryName} id="countryName" onChange={this.changeCountryName}/>
                    <br/><br/>
                    <label for="countryCode" className="label-text">Country Code:</label><br/>
                    <input className="input-element" type="text" placeholder="enter countryCode" value={countryCode} id="countryCode" onChange={this.changeCountryCode}/>
                    <br/><br/>
                    <label for="terminals" className="label-text">Terminals:</label><br/>
                    <input className="input-element" type="text" placeholder="terminals ex: 2" value={terminal} id="terminals" onChange={this.changeTerminals}/>
                    
                      <br/><br/>  
                    <button type="submit" >Add</button>
                    {editMesg !== "" && <p className="edit-success-text">{editMesg}</p>}
                    
            </form>
        </div>)
    }
}
export default AddItemsToList;