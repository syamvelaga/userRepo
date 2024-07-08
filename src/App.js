import {Component} from "react";

import {defaultTheme, Provider } from '@adobe/react-spectrum';
import Header from "./Components/Header"
import SideMenu from "./Components/SideMenu";
import AirportsLists from "./Components/AirportsLists";


import './App.css';

class App extends Component {

  render (){
  return (
    
    <Provider theme={defaultTheme}>
      <Header/>
      <div className="content-container">
        <SideMenu/>
        <AirportsLists/>
      </div>
    </Provider>
    
  )
}
;
}

export default App;
