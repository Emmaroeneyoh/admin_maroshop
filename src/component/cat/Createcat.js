import React from 'react'
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import {CreateCat} from '../../redux/cat'
import SweetAlert from 'react-swal';


function CreateCategory() {
  const cat = useSelector((state) => state.category)


   //state for input field
   const [category, setcategory] = useState('')
   
 
 
   //function for onChange event
   const catchange = (e) => {
     setcategory(e.target.value)
   }
   
 
  
   const dispatch = useDispatch();//this will enable us call any action in the redux;
    
   //send data to the backend
//getting all state
  const categories = 'orange'
  // const NewcAT =  JSON.stringify(categories)
  const wholestate = {  category}
   




const submit = (e) => { 
e.preventDefault()
  dispatch(CreateCat(categories))
 
  }
  
  // useEffect to navigate the user
//   useEffect(() => {
//     console.log('usefect working')
    
//   },)
  return (
<form class="form" onSubmit={submit} >
                 <div class="row mb-3">
                 <div class="col">
                     <div class="row mb-3">
                     <div class="col">
                         <div class="form-group">
                         <label>Username</label>
                         <input class="form-control" type="text" value={category}  placeholder="category" onChange={catchange}  />
                         </div>
                     </div>
                     </div>
                 </div>
                 </div>
                 <div class="row">
                 <div class="col d-flex justify-content-end">
                     <button class="btn btn-primary" type="submit">Save Changes</button>
                 </div>
      </div>
             </form>
  )
}

export default CreateCategory