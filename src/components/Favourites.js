import React, { useState } from 'react'
import { AppContext } from '../Context/Appcontext'
import { useContext } from "react";

const Favourites = () => {
    const {favourite,removeFavourite} = useContext(AppContext)
   

    const handleremoveFav = (book)=>{
        removeFavourite(book)
    }
  return (
    <div>
      
           <div className="favourite" >
      {favourite.map((book, index) => (
        
          <div className="book-card" key={index}>
            <div className="book-title">{book.title}</div>
            <div className="book-image">
                <img src={book.image_url} alt="photo"/></div>
            <div className="book-button">
              <button onClick={()=>handleremoveFav(book)}>Remove from to Favourite</button>
            </div>
          </div>
      
      ))}
        </div>
    </div>
  )
}

export default Favourites