import React, { Component } from 'react';
import { useState } from 'react';
import { createContext } from 'react';

export const HospitalsContext = createContext();

const HospitalsContextProvider = (props) => {
    const [hospitals, setHospitals] = useState([])
    const addNewHospital = (hospitals) => {
        setHospitals(hospitals)
    }
    return (  
        <HospitalsContext.Provider value={{hospitals, addNewHospital }}>
            {props.children}
        </HospitalsContext.Provider>
    );
}
 
export default HospitalsContextProvider;