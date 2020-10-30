import React from 'react'
import {
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Hospital from './Hospital/Hospital';
import Hospitals from './Hospitals/Hospitals';
const App = () => {
    return (
        <Switch>
            <Route exact path="/" component={Hospitals} />            <Route exact path="/" component={Hospitals} />
            <Route exact path="/hospitals/:slug" component={Hospital} />
        </Switch>
    )
}

export default App
