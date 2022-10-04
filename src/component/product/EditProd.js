import React from 'react'
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import {Singleproduct } from '../../redux/Product'
import { useParams } from 'react-router-dom';
import {GetCategories} from '../../redux/cat'
import SweetAlert from 'react-swal';



function EditProduct() {
    const cat = useSelector((state) => state.category.categories)
    const {product , success}  = useSelector((state) => state.product)
    const {id} = useParams()

 //state for input field
 const [title, setTitle] = useState('')
 const [category, setcategory] = useState('')
 const [size, setsize] = useState('')
 const [color, setcolor] = useState('')
 const [type, setType] = useState('')
 const [max, setmax] = useState('')
 const [min, setmin] = useState('')
 const [price, setprice] = useState('')
 const [description, setdescription] = useState('')
 const [photo, setphoto] = useState('')
 
 
 
   //function for onChange event
   const titlechange = (e) => {
    setTitle(e.target.value)
  }
  const catchange = (e) => {
    setcategory(e.target.value)
  }

  
  const sizechange = (e) => {
    setsize(e.target.value)
  }

  const colorchange = (e) => {
    setcolor(e.target.value)
    console.log(e.target.value)
  }

  const typechange = (e) => {
    setType(e.target.value)
  }
  const maxchange = (e) => {
    setmax(e.target.value)
  }

  const minchange = (e) => {
    setmin(e.target.value)
 }

  const pricechange = (e) => {
    setprice(e.target.value)
 }

  const deschange = (e) => {
    setdescription(e.target.value)
 }
 
 const photochange = (e) => {
   setphoto(e.target.files)
   console.log(e.target.files)      
}
    
    
   const dispatch = useDispatch();//this will enable us call any action in the redux;
    
   //send data to the backend
//getting all state
// const wholestate = {email, password, username, role, phone, address, dob, photo }
const formdata = new FormData()

for (let i = 0; i < photo.length; i++) {
    formdata.append("images", photo[i]);
  };
formdata.append('title', title)
formdata.append('category', category)
formdata.append('size', size)
formdata.append('color', color)
formdata.append('type', type)
formdata.append('price', price)
formdata.append('max', max)
formdata.append('min', min)
formdata.append('description', description)


const submit = (e) => { 
e.preventDefault()
fetch(`http://localhost:9000/product/${id}`, {
    method: 'PUT',
    headers : {"Content-Type" : "multipart/form-data"},
    body: formdata
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
   
      dispatch(Singleproduct(id))
      if (success === true) {
          console.log('user details gotten')
         setTitle(product.title)
         setcategory(product.category.category)
         setprice(product.price)
         setcolor(product.color)
         setsize(product.size)
         setType(product.type)
         setdescription(product.description)
         setmin(product.shipping.min)
          setmax(product.shipping.max)
        //   for (let i = 0; i < product.images.length; i++) {
        //     setphoto("images", product.images[i]);
        //   }
      }
  }, [])
  useEffect(() => {
    console.log('usefect working')
    dispatch(GetCategories())
  }, [])
  return (
<form class="form" onSubmit={submit} encType="multipart/form-data">
                 <div class="row mb-3">
                 <div class="col">
                     <div class="row mb-3">
                     <div class="col">
                         <div class="form-group">
                         <label>Title</label>
                         <input class="form-control" type="text" name="title" value={title} placeholder="johnny.s" onChange={titlechange}  />
                         </div>
                     </div>
                     </div>
                     <div class="row mb-3">
                     <div class="col">
                          <div class="form-group">
                          <label>Category</label>
                              <select class="form-control" name='category' onChange={catchange} >
                              <option>{category }</option>
                              {cat.length >= 0 ? cat.map((e) => (
                                      <option value={e._id}>{e.category }</option>
                                  )) : <div className='btn btn-primary'> Add Category</div>  }
                        </select>
                         </div>
                     </div>
                     </div>
                 </div>
                 </div>
                 <div class="row">
                 <div class="col-12 col-sm-6 mb-3">
                    
                         <div class="form-group">
                         <label>Type</label>
                      <select class="form-control" name='type' onChange={typechange} >
                          <option >{type}</option>
                          <option value="men">Men's Wear</option>
                          <option value="women">Women's Wear</option>
                          <option value="kid">Kid's Wear</option>
                        </select>
                         </div>
                     
                 </div>
                 <div class="col-12 col-sm-6 mb-3">
                 <div class="form-group">
                 <label>Size</label>
                      <select class="form-control" name='size' onChange={sizechange} >
                          <option >{ size}</option>
                          <option value="xl">XL</option>
                          <option value="L">L</option>
                          <option value="sm">SM</option>
                        </select>
                         </div>
                 </div>
                 </div>
                 <div class="row">
                 <div class="col-12 col-sm-6 mb-3">
                 <div class="form-group">
                         <label>Max day delivery</label>
                         <input class="form-control" type="number" value={max} name='max' placeholder="max day" onChange={maxchange}  />
                         </div>
                 </div>
                 <div class="col-12 col-sm-6 mb-3">
                 <div class="form-group">
                         <label>Min day delivery</label>
                         <input class="form-control" type="number" value={min} name='min' placeholder="min day" onChange={minchange} />
                         </div>
                 </div>
                 </div>
                 <div class="row">
                 <div class="col-12 col-sm-6 mb-3">
                    
                  <div class="form-group">
                  <label>Color</label>
                      <select class="form-control" name='color' onChange={colorchange} >
                          <option >{color }</option>
                          <option value="red">Red</option>
                          <option value="blue">Blue</option>
                          <option value="black">Black</option>
                          <option value="white">White</option>
                        </select>
                         </div>
                     
                 </div>
                 <div class="col-12 col-sm-6 mb-3">
                         <div class="form-group">
                         <label>Price</label>
                         <input class="form-control" type="number" value={price} name='price' placeholder="price" onChange={pricechange}  />
                         </div>
                 </div>
                 </div>
                 <div class="row">
                 <div class="col-12  mb-3">
                    
                         <div class="form-group">
                         <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
  <textarea class="form-control" name='description' value={description} onChange={deschange} id="exampleFormControlTextarea1" rows="3"></textarea>
                         </div>
                     
                 </div>
                 </div>
                 <div class="row">
                 <div class="col-12  mb-3">
                    
                         <div class="form-group">
                         <label>picture</label>
                         <input class="form-control" type="file" multiple  filename='images' onChange={photochange}  />
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

export default EditProduct