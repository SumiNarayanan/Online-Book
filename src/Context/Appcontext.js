import { createContext, useState } from "react";

export const AppContext=createContext();

const ContextValue=({children})=>{
    const[favourite,setFavourite]=useState([])

    const addFavourite =(book)=>{
     const newFav=[...favourite,book]  
     setFavourite(newFav) ;
    }
   const removeFavourite=(book)=>{
    const newFav=[...favourite.filter((fav) => fav !== book)]
    setFavourite(newFav);
 
  
   }


    return(
    <AppContext.Provider value={{favourite, addFavourite,removeFavourite}}>
{children}
    </AppContext.Provider >
 )   
};

export default ContextValue;

