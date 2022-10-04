import React from 'react'
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { Singlecategory} from '../../redux/cat'
import { useParams } from 'react-router-dom';
import SweetAlert from 'react-swal';



function Editcat() {
    const {success, category} = useSelector((state) => state.category)
    const {id} = useParams()


   //state for input field
   const [categorys, setcategory] = useState('')
  
 
 
   //function for onChange event
   const catchange = (e) => {
     setcategory(e.target.value)
   }
   
  
   const dispatch = useDispatch();//this will enable us call any action in the redux;
    
   //send data to the backend
//getting all state
const wholestate = {categorys}



const submit = (e) => { 
e.preventDefault()
fetch(`http://localhost:9000/category/${id}`, {
    method: 'PUT',
    headers : {"Content-Type" : "application/json"},
    body: JSON.stringify(wholestate)
})
    .then((data) => {
    console.log('this is data :', data)
    })
    .catch((err) => {
    console.log('this is error', err)
})
 
  }
  
  // useEffect to navigate the user
  useEffect(() => {
   
      dispatch(Singlecategory(id))
      if (success === true) {
          console.log('user details gotten')
          setcategory(category.category)
      }
  }, [])
  return (
<form class="form" onSubmit={submit} encType="multipart/form-data">
                 <div class="row mb-3">
                 <div class="col">
                     <div class="row mb-3">
                     <div class="col">
                         <div class="form-group">
                         <label>Username</label>
                         <input class="form-control" type="text" value={categorys} placeholder="johnny.s" onChange={catchange}  />
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

export default Editcat