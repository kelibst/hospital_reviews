import React from 'react'
import {
    Switch,
    Route
  } from "react-router-dom";
import ErrorContextProvider from '../contexts/ErrorContext';
import HospitalsContextProvider, { HospitalsContext } from '../contexts/HospitalsContext';
import ReviewsContextProvider from '../contexts/ReviewsContext';
import notFound from './containers/notFound';
import Hospital from './Hospital/Hospital';
import Hospitals from './Hospitals/Hospitals';
import Sidebar from './layouts/Sidebar';
import UserInfo from './layouts/UserInfo';

const App = () => {
    return (
        <div className="wrapper d-sm-flex">
        <HospitalsContextProvider>
        <ReviewsContextProvider>
        <ErrorContextProvider>
            <Sidebar />
      
            <div className="content bg-light">
                <UserInfo />

                <Switch>
                    <Route exact path="/" component={Hospitals} />   
                    <Route exact path="/hospitals/:slug" component={Hospital} />
                    <Route exact path="/404" component={notFound} /> 
                </Switch> 

            </div>
            </ErrorContextProvider>
            </ReviewsContextProvider>
            </HospitalsContextProvider>
            
        </div>
       
    )
}

export default App
