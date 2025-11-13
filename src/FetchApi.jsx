import React, { useEffect, useState } from 'react'
import axios from "axios"
import GlobalContext from "./GlobalContext"

const FetchApi = ({children}) => {
     const [headPhone,setHeadPhone]=useState([])

       const [cart, setCart] = useState(() => {
      const savedItem = localStorage.getItem("cart")
      return savedItem ? JSON.parse(savedItem) : []
    })

     useEffect(()=>{
        const fetchData=async()=>{
            try{
                const res=await axios.get("/data.json")
                setHeadPhone(res?.data?.sony)
              /* console.log("Sony Headphones Data:", res?.data?.sony)*/
            } catch(err){
                console.error(err)
            }
        };
        fetchData();
      
     },[] )
     
       useEffect(() => {
      localStorage.setItem("cart", JSON.stringify(cart))
    }, [cart])
    
  return (
   
    <>
    <GlobalContext.Provider value={{headPhone,cart,setCart}}>
        {children}
    </GlobalContext.Provider>
    </>
  )
}

export default FetchApi