import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import { fetchData } from "../utils/RapidApi";
import { useContext } from "react";

export const AuthContext = createContext();


export default function AuthProvider({ children }) {
    const [loading,setLoading] = useState(false);
    const [data,setData ] =useState([])
    const [value,setValue]=useState("New")

    useEffect(()=>{
        fetchAllData(value)
    },[value])
    const fetchAllData = (query)=>{
        setLoading(true)
        fetchData(`search?query=${query}`).then(({contents})=>{
            setData(contents)
            setLoading(false)
        })
    }
    return(
        <AuthContext.Provider value={{loading,data,setValue}}>
            {children}
        </AuthContext.Provider>
    )
     
}
export const useAuth = () => useContext(AuthContext)