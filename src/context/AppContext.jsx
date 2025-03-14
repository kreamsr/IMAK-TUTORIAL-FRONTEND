import { createContext, useEffect, useState } from "react";
import axios from 'axios'
import {toast} from 'react-toastify'

export const AppContext = createContext()


const AppContextProvider = (props) => {

    const currency = '$'
    const backendurl = import.meta.env.VITE_BACKEND_URL;
    const [lecturers, setLecturers] = useState([])

    const allLecturers = async () => {
        try {
            const response = await axios.get( backendurl + '/imak/lecturers/lecturers')

            if (response.data.success) {
                setLecturers(response.data.lecturers);
                console.log(response.data.lecturers);
                
            } else {
                toast.error(response.data.message);
                
            }
            
            
        } catch (error) {
            toast.error(error.message)
            console.log(error);
            
        }
    }

    useEffect(()=> {
        allLecturers();
    },[])


    const value ={
        lecturers,currency,backendurl,
    }

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider;