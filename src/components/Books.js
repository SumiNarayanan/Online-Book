import React from "react";
import { API_url } from "../API";
import axios from "axios";
import { useNavigate } from 'react-router-dom'


import { useState, useEffect, useContext  } from "react";
import { AppContext } from "../Context/Appcontext";
const Books = () => {
  const [books, setBooks] = useState([]);
 
  const {favourite,addFavourite,removeFavourite} = useContext(AppContext)
  const navigate =useNavigate();
  useEffect(() => {
    axios
      .get(API_url)
      .then((res) => {
        console.log(res.data);
        setBooks(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

 


const handleAddFav =(book)=>{
addFavourite(book);

}
const handleremoveFav = (book)=>{
    removeFavourite(book)
  
}


  return (
    <>
    <div className="books" >
      {books.map((book, index) => (
        
          <div className="book-card" key={index}>
            <div className="book-title">{book.title}</div>
            <div className="book-image">
                <img src={book.image_url} alt="photo" onClick={()=> navigate(`/books/${book.id}`)}/></div>
            <div className="book-button">
                {/* {favourite.includes(book) ?(<button onClick={()=>handleAddFav(book)}>Remove From Favourite</button>) :
                (<button onClick={()=>handleremoveFav(book)}>Add to Favourite</button>)} */}
                  {favourite.includes(book) ? (
                <button onClick={() => handleremoveFav (book)}>
                  Remove From Favourites
                </button>
              ) : (
                <button onClick={() => handleAddFav(book)}>
                  Add to Favourites
                </button>
              )}
            </div>
          </div>
      
      ))}
        </div>
    </>
  );
};

export default Books;
