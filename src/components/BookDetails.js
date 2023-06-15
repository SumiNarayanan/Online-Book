import React, { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import { BookDetails_url } from '../API';
// '${BookDetails_url}/${id}'

const BookDetails = () => {
    const[bookDetails,setBookDetails]=useState([])
    // const{routeParams}  = useParams();//id used in app.js
    const{id}  = useParams();
    useEffect(()=>{
       axios.get(`${BookDetails_url}/${id}`) .then((res)=>{
setBookDetails(res.data);

       }).catch((err)=>console.log(err)
       )
    },[id]);

  return (
    <>
    <div className='book-details'>
        
      
            <div className='book-content'>
               <div className='book-content1'>
              
               <h2> {bookDetails?.title}</h2>
               <img src={bookDetails?.image_url} alt='image'/>
               </div>
               <div className='book-content2'>
                   <h4>Description:
                    <br/>{bookDetails?.description}</h4>
   <h4>Author:
   <br/>{bookDetails?.authors}</h4>
               </div>
               </div>
         
            
            
        
       

</div> 
</>  
  )
}

export default BookDetails