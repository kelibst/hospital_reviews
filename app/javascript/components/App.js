import React from 'react'
import {
    Switch,
    Route
  } from "react-router-dom";
import Hospital from './Hospital/Hospital';
import Hospitals from './Hospitals/Hospitals';
import Sidebar from './layouts/Sidebar';

const App = () => {
    return (
        <div className="wrapper d-sm-flex">
            <Sidebar />
            <Switch>
                <Route exact path="/" component={Hospitals} />            
                <Route exact path="/hospitals/:slug" component={Hospital} />
            </Switch>
        </div>
       
    )
}

export default App
