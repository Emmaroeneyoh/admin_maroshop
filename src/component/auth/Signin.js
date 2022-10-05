import React from 'react'
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { AdminSignin } from '../../redux/admin'
import { useNavigate } from 'react-router-dom';
import SweetAlert from 'react-swal';


function Signin() {
    const {user, success, loading}  = useSelector((state) => state.admin)


   //state for input field
   const [email, setemail] = useState('')
   const [username, setusername] = useState('')
   const [password, setpassword] = useState('')
   const [dob, setdob] = useState('')
   const [address, setaddress] = useState('')
   const [phone, setphone] = useState('')
   const [role, setrole] = useState('')
   const [photo, setphoto] = useState('')
 
 
   //function for onChange event
   const emailchange = (e) => {
     setemail(e.target.value)
   }
   const dobchange = (e) => {
     setdob(e.target.value)
   }
 
   
   const userchange = (e) => {
     setusername(e.target.value)
   }
 
   const rolechange = (e) => {
     setrole(e.target.value)
     console.log(e.target.value)
   }
 
   const passchange = (e) => {
     setpassword(e.target.value)
   }
   const addresschange = (e) => {
     setaddress(e.target.value)
   }
 
   const phonechange = (e) => {
     setphone(e.target.value)
  }
  
  const photochange = (e) => {
    setphoto(e.target.files[0])
console.log(e.target.files[0])      
}
 
  
    const dispatch = useDispatch();//this will enable us call any action in the redux;
    const navigate = useNavigate()
    
   //send data to the backend
//getting all state
const wholestate = {email, password, username, role, phone, address, dob, photo }
   
const formdata = new FormData()

formdata.append('blogImage', photo)
formdata.append('email', email)
formdata.append('username', username)
formdata.append('password', password)
formdata.append('role', role)
formdata.append('address', address)
formdata.append('phone', phone)
formdata.append('dob', dob)


const submit = (e) => { 
e.preventDefault()
  dispatch(AdminSignin(formdata))
 
  }
  
  // useEffect to navigate the user
  useEffect(() => {
      if (success === true) {
        navigate('/')
    }
    
  }, [])
  return (
<form class="form" onSubmit={submit} encType="multipart/form-data">
                 <div class="row mb-3">
                 <div class="col">
                    
                     <div class="row mb-3">
                     <div class="col">
                         <div class="form-group">
                         <label>Email</label>
                         <input class="form-control" type="text" name='email' placeholder="user@example.com"  onChange={emailchange} value={email}/>
                         </div>
                     </div>
                     </div>
                 </div>
                 </div>
                 <div class="row">
                 <div class="col-12 ">
                    
                         <div class="form-group">
                         <label>Password</label>
                         <input class="form-control" type="password" name='password' placeholder="••••••" onChange={passchange} value={password}/>
                         </div>
                     
                 </div>
                 
                 </div>
                
                 <div class="row">
                 <div class="col d-flex justify-content-end">
                     <button class="btn btn-primary" type="submit">{loading === 'pending' ? 'Logging In' : 'Login' }</button>
                 </div>
      </div>
             </form>
  )
}

export default Signin