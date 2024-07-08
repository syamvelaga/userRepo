import {Component} from "react";




import "./index.css";

class EditingDetails extends Component{

    state = {editMesg:"",id:this.props.object.id,airportName:this.props.object.airport,countryName:this.props.object.country,countryCode:this.props.object.code,terminal:this.props.object.terminals,updatedObject:{}}

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
        const{id,airportName,countryName,countryCode,terminal} = this.state;
        const {updateSuccessfull} = this.props;
        
        const newObject = {
            id,
            airport:airportName,
            country:countryName,
            code:countryCode,
            terminals:terminal
        }
        updateSuccessfull(newObject);
        
    }

    render(){
        const{editMesg,airportName,countryName,countryCode,terminal} = this.state;
        
        
     
        return(<div className="editing-page-container">
            <form onSubmit={this.submitForm}>
                
                    <label for="airportName" className="label-text">AirportName:</label><br/>
                    <input className="input-element" type="text" value={airportName} id="airportName" onChange={this.changeAirportName}/>
                    <br/><br/>
                    <label for="countryName" className="label-text">Country Name:</label><br/>
                    <input className="input-element" type="text" value={countryName} id="countryName" onChange={this.changeCountryName}/>
                    <br/><br/>
                    <label for="countryCode" className="label-text">Country Code:</label><br/>
                    <input className="input-element" type="text" value={countryCode} id="countryCode" onChange={this.changeCountryCode}/>
                    <br/><br/>
                    <label for="terminals" className="label-text">Terminals:</label><br/>
                    <input className="input-element" type="text" value={terminal} id="terminals" onChange={this.changeTerminals}/>
                    
                      <br/><br/>  
                    <button type="submit" >Save</button>
                    {editMesg !== "" && <p className="edit-success-text">{editMesg}</p>}
                    
            </form>
        </div>)
    }

}
export default EditingDetails;