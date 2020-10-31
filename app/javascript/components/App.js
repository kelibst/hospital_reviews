import React from 'react'
import {
    Switch,
    Route
  } from "react-router-dom";
import Hospital from './Hospital/Hospital';
import Hospitals from './Hospitals/Hospitals';
import Sidebar from './layouts/Sidebar';
import UserInfo from './layouts/UserInfo';

const App = () => {
    return (
        <div className="wrapper d-sm-flex">
            <Sidebar />
            <div className="content bg-light">
                <UserInfo />
                <Switch>
                    <Route exact path="/" component={Hospitals} />            
                    <Route exact path="/hospitals/:slug" component={Hospital} />
                </Switch> 
            </div>
        </div>
       
    )
}

export default App
