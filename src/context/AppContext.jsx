import { createContext } from "react";
import { lecturers } from "../assets/assets";

export const AppContext = createContext()


const AppContextProvider = (props) => {

    const currency = '$'




    const value ={
        lecturers,currency
    }

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider;