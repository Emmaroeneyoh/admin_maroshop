import React from 'react'
import './crud.css'
import { Link } from 'react-router-dom'
import ReactPaginate from 'react-paginate';
import { Getuser ,  adminSignupReset } from '../../redux/client'
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from 'react';
import moment from 'moment'

function GetUser() {
    const [email , setemail] = useState('')

    const admins = useSelector((state) => state.client.users)
    const dispatch = useDispatch()

    //function to call all the admins
    useEffect(() => {
        dispatch(Getuser())
        console.log('this is client ; ' , admins)
        return () => {
            dispatch(adminSignupReset())
        }
    }, [])

    //function for seaarh 
    
 const changeEmail = (e) => {
  setemail(e.target.value)
  }

      
  //for pagination
  const [pagenumber, setpagenumber] = useState(0)
  
  const dataperview = 3
  const pageVisited = dataperview * pagenumber

  const pagecount = Math.ceil(admins.length / dataperview)
  const pagechange = ({ selected }) => {
    setpagenumber(selected)
    }
    
   
  return (
    <div class="row flex-lg-nowrap">
        
        <div class="col">
              <div className="row">
              <div class="col-12  mb-3">
                <div class="card">
                <div class="card-body">
                    <div class="text-center px-xl-3">
                    <Link to={'/create/admin'}><button class="btn btn-success btn-block" type="button" data-toggle="modal" data-target="#user-form-modal">New User</button></Link>
                    </div>
                    <hr class="my-3" />
                    <div className="row">
                    <div className="col-12-sm col-md-8">
                                      <form >
                                      <div class="input-group mb-3">
  <input type="text" class="form-control" onChange={changeEmail} value={email} placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2" />
  <div class="input-group-append">
   
  </div>
</div>
                                      </form> 
                    </div>       
                    <div className="col-12-sm col-md-4">
                        sort by role
                    </div>       
                   </div>
                </div>
                </div>
            </div>
        </div> 
            <div class="row flex-lg-nowrap">
            <div class="col mb-3">
                <div class="e-panel card">
                <div class="card-body">
                    <div class="card-title">
                    <h6 class="mr-2"><span>Admins</span><small class="px-1">Details</small></h6>
                    </div>
                    <div class="e-table">
                    <div class="table-responsive table-lg mt-3">
                        <table class="table table-bordered">
                        <thead>
                            <tr>
                           
                            <th>Photo</th>
                            <th class="max-width">Name</th>
                            <th class="max-width">email</th>
                            <th class="max-width">state</th>
                            <th class="sortable">Date</th>
                            <th>Actions</th>
                            </tr>
                        </thead>
                            <tbody>
                                              {admins.length >= 0 ? admins.filter((val) => {
                                  if (email === '') {
                                      return val
                                  } else if (val.email.toLowerCase().includes(email.toLowerCase())) {
                                      console.log('this is val : ', val)
                                      return val
                                  }
                              }).slice(pageVisited, pageVisited + dataperview).map((user) => (
                                                  <tr key={user._id}>
                          
                                                  <td class="align-middle text-center">
                                                      <div class="bg-light d-inline-flex justify-content-center align-items-center align-top itemdiv" ><img src={user.picture} alt="" /></div>
                                                  </td>
                                                      <td class="text-nowrap align-middle">{user.username }</td>
                                                      <td class="text-nowrap align-middle">{user.email }</td>
                                                      <td class="text-nowrap align-middle">{user.state }</td>
                                                      <td class="text-nowrap align-middle"><span>{moment(user.createdAt).subtract(10, 'days').calendar() }</span></td>
                                                  <td class="text-center align-middle">
                                                      <div class="btn-group align-top">
                                                              <button class="btn btn-sm btn-outline-secondary " type="button" >
                                                                  <Link to={`/admins/edit/${user._id}`}>
                                                                  view
                                                                  </Link>
                                                             
                                                          </button>
                                                          
                                                      </div>
                                                  </td>
                                                  </tr>
                                                 
                                              )) : <tr>
                          
                          <td class="align-middle text-center">
                              <div class="bg-light d-inline-flex justify-content-center align-items-center align-top itemdiv" ><i class="fa fa-fw fa-photo" ></i></div>
                          </td>
                          <td class="text-nowrap align-middle">nil</td>
                          <td class="text-nowrap align-middle"><span>nil</span></td>
                          <td class="text-center align-middle"><i class="fa fa-fw text-secondary cursor-pointer fa-toggle-on"></i></td>
                          <td class="text-center align-middle">
                             --
                          </td>
                          </tr>
                          }
                            
                            
                        </tbody>
                        </table>
                    </div>
                        <div class="d-flex justify-content-center">
                               <ReactPaginate
        previousLabel={"<"}
        nextLabel={'»'}
        pageCount={pagecount}
                                          onPageChange={pagechange}
                                          marginPagesDisplayed={1}
                                          pageRangeDisplayed={4}
        breakLabel="..."
        containerClassName={"pagination mt-3 mb-0"}
        previousLinkClassName={'previousLinkClassName'}
        nextLinkClassName={'nextLinkClassName'}
        disabledClassName={'disabledClassName'}
        activeClassName={'activeClassName'}

      />        
{/* 
                        <ul class="pagination mt-3 mb-0">
                        <li class="disabled page-item"><a href="#" class="page-link">‹</a></li>
                        <li class="active page-item"><a href="#" class="page-link">1</a></li>
                        <li class="page-item"><a href="#" class="page-link">2</a></li>
                        <li class="page-item"><a href="#" class="page-link">3</a></li>
                        <li class="page-item"><a href="#" class="page-link">4</a></li>
                        <li class="page-item"><a href="#" class="page-link">5</a></li>
                        <li class="page-item"><a href="#" class="page-link">›</a></li>
                        <li class="page-item"><a href="#" class="page-link">»</a></li>
                        </ul> */}
                    </div>
                    </div>
                </div>
                </div>
            </div>
           
            </div>
 
         
        </div>
        </div>
  )
}

export default GetUser