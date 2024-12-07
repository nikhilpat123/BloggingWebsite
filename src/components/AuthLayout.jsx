//this is basically a mechanism that how pages and routed are protected 
//so basically we will make a conatiner AND VALUE SHOW krni ahi ye nhi krni hai ye batate hain
//is protected function se we will decide ki iske child ko render krna hai ya nhi krna hai

import React, {useEffect, useState} from 'react'
import {useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'

export default function Protected({children, authentication=true}) {

    const navigate = useNavigate()
    const [loader, setLoader] = useState(true)
    const authStatus = useSelector(state => state.auth.status)

  
    useEffect(() => {                ////useeffect hi mujhe batayega ki login pe bhejna hai ya signup pe  aur kis feild me change ho ki mai actually dobara run hojau
     

        // if (authStatus ===true){
        //     navigate("/")
        // } else if (authStatus === false) {
        //     navigate("/login")
        // }
        
        //let authValue = authStatus === true ? true : false
        if(authentication && authStatus !== authentication){
            navigate("/login")
        } else if(!authentication && authStatus !== authentication){
            navigate("/")
        }
        setLoader(false)
    }, [authStatus, navigate, authentication])

    return loader ? <h1>Loading...</h1> : <>{children}</>
}

