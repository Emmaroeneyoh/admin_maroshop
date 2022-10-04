// import React from 'react'
// import { useState, useEffect } from 'react';
// import { useSelector, useDispatch } from "react-redux";
// import { Singleuser} from '../../redux/client'
// import { useParams } from 'react-router-dom';
// import SweetAlert from 'react-swal';



// function EditUser() {
//     const {success, user} = useSelector((state) => state.client)
//     const {id} = useParams()


  
 
  
//    const dispatch = useDispatch();//this will enable us call any action in the redux;
    



//   return (
// <form class="form" onSubmit={submit} encType="multipart/form-data">
//                  <div class="row mb-3">
//                  <div class="col">
//                      <div class="row mb-3">
//                      <div class="col">
//                          <div class="form-group">
//                          <label>Username</label>
//                          <input class="form-control" type="text" name="username" placeholder="johnny.s" value={} />
//                          </div>
//                      </div>
//                      </div>
//                      <div class="row mb-3">
//                      <div class="col">
//                          <div class="form-group">
//                          <label>Email</label>
//                          <input class="form-control" type="text" name='email' placeholder="user@example.com"  onChange={emailchange} value={email}/>
//                          </div>
//                      </div>
//                      </div>
//                  </div>
//                  </div>
//                  <div class="row">
//                  <div class="col-12 col-sm-6 mb-3">
                    
//                          <div class="form-group">
//                          <label>Password</label>
//                          <input class="form-control" type="password" name='password' placeholder="••••••" onChange={passchange} value={password}/>
//                          </div>
                     
//                  </div>
//                  <div class="col-12 col-sm-6 mb-3">
//                          <div class="form-group">
//                          <label>Date Of Birth</label>
//                       <input class="form-control" type="date" name='dob' placeholder="DOB" onChange={dobchange} value={dob} />
//                          </div>
//                  </div>
//                  </div>
//                  <div class="row">
//                  <div class="col-12 col-sm-6 mb-3">
                    
//                          <div class="form-group">
//                          <label>Role</label>
//                       <select class="form-control" name='role' onChange={rolechange} value={role}>
//                           <option >select role</option>
//                           <option value="admin">admin</option>
//                           <option value="seller">seller</option>
//                         </select>
//                          </div>
                     
//                  </div>
//                  <div class="col-12 col-sm-6 mb-3">
//                          <div class="form-group">
//                          <label>Phone</label>
//                          <input class="form-control" type="number" name='phone' placeholder="phone" onChange={phonechange} value={phone} />
//                          </div>
//                  </div>
//                  </div>
//                  <div class="row">
//                  <div class="col-12  mb-3">
                    
//                          <div class="form-group">
//                          <label>Address</label>
//                          <input class="form-control" type="text" placeholder="Address" name='address' onChange={addresschange} value={address} />
//                          </div>
                     
//                  </div>
//                  </div>
//                  <div class="row">
//                  <div class="col-12  mb-3">
                    
//                          <div class="form-group">
//                          <label>picture</label>
//                          <input class="form-control" type="file"  filename='blogImage' onChange={photochange}  />
//                          </div>
                     
//                  </div>
//                  </div>
//                  <div class="row">
//                  <div class="col d-flex justify-content-end">
//                      <button class="btn btn-primary" type="submit">Save Changes</button>
//                  </div>
//       </div>
//              </form>
//   )
// }

// export default EditUser