
//setup react context api

import { createContext, useContext, useReducer } from "react";

//global data using context api

export const StateContext = createContext();

//provide the data using provider

function StateProvider({ children, reducer, initialState }) {

    return (
        <StateContext.Provider value={useReducer(reducer, initialState)} >
            {children}
        </StateContext.Provider>
    )
}

export default StateProvider;

//use use context to extract the state from context

export const useStateValue = () => useContext(StateContext);


