import axios from "axios";
import {createContext, useEffect, useState}from "react"

type Props = {
    children: JSX.Element,
  };


const AuthContext = createContext<any>(undefined)

export const AuthProvider = ({children}:Props)=>{

    const [auth,setAuth]= useState({})

    useEffect(()=>{
        const authUser = async()=>{
            const token = localStorage.getItem("x-token")
            if(!token){
                return
            }
            const config ={
                headers:{
                    "content-Type":"application/json",
                    "x-token":token
                }
            }

            try {
                const url = "http://127.0.0.1:3000/api/perfil"
                const {data}=  await axios(url,config)
                setAuth(data)
            } catch (error) {
                setAuth({})
                console.log(error)
            }
        }
        authUser()
    },[])


    return(
        <AuthContext.Provider
            value={{
                auth

            }}
        >
            {children}
        </AuthContext.Provider>
    )
}
export default AuthContext