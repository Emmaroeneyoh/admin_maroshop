import React from 'react'
import './curd.css'
import { Link } from 'react-router-dom'
import ReactPaginate from 'react-paginate';
import { GetInvoice  , adminSignupReset , updateInvoice} from '../../redux/invoice'
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from 'react';
import moment from 'moment'

function GetInvoices() {
    const [email , setemail] = useState('')

    const {invoices} = useSelector((state) => state.invoice)
    const dispatch = useDispatch()

    //function to call all the admins
    useEffect(() => {
        dispatch(GetInvoice())
        console.log(invoices)
        return () => {
            dispatch(adminSignupReset())
        }
    }, [])

    //function for seaarh 
    
 const changeEmail = (e) => {
  setemail(e.target.value)
  }

    const updatefund = (id) => {
        fetch(`http://localhost:9000/invoice/${id}`, {
            method: 'PUT',
            // headers : {"Content-Type" : "multipart/form-data"},
        })
            .then((data) => {
                console.log('this is data :', data)
                dispatch(GetInvoice())
            })
            .catch((err) => {
            console.log('this is error', err)
        }) 
    }
      
  //for pagination
  const [pagenumber, setpagenumber] = useState(0)
  
  const dataperview = 3
  const pageVisited = dataperview * pagenumber

  const pagecount = Math.ceil(invoices.length / dataperview)
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
                    {/* <div className="col-12-sm col-md-4">
                        sort by role
                    </div>        */}
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
                    <h6 class="mr-2"><span>Invoices</span><small class="px-1">Details</small></h6>
                    </div>
                    <div class="e-table">
                    <div class="table-responsive table-lg mt-3">
                        <table class="table table-bordered">
                        <thead>
                            <tr>
                           
                            <th>Photo</th>
                            <th class="max-width">email</th>
                            <th class="max-width">date</th>
                            <th class="max-width">price</th>
                            <th class="sortable">status</th>
                            <th class="max-width">check</th>
                            <th>Actions</th>
                            </tr>
                        </thead>
                            <tbody>
                                              {invoices.length >= 0 ? invoices.filter((val) => {
                                  if (email === '') {
                                      return val
                                  } else if (val.user.email.toLowerCase().includes(email.toLowerCase())) {
                                      console.log('this is val : ', val)
                                      return val
                                  }
                              }).slice(pageVisited, pageVisited + dataperview).map((user) => (
                                                  <tr key={user._id}>
                          
                                                  <td class="align-middle text-center">
                                                      <div class="bg-light d-inline-flex justify-content-center align-items-center align-top itemdiv" ><img src={user.user.picture} alt="" /></div>
                                                  </td>
                                                      <td class="text-nowrap align-middle">{user.user.email }</td>
                                                      <td class="text-nowrap align-middle">{moment(user.createdAt).subtract(10, 'days').calendar() }</td>
                                                      <td class="text-nowrap align-middle">{user.price }</td>
                                                      <td class="text-nowrap align-middle"><span>{user.delivered}</span></td>
                                      <td class="text-nowrap align-middle"><span> <button class= {user.delivered === 'pending' ? 'btn btn-sm btn-outline-secondary ' : 'btn btn-sm  '   }  onClick={ () => updatefund(user._id) }  type="button" >{user.delivered === 'pending' ? 'verify' : 'verified' }</button></span></td>
                                                  <td class="text-center align-middle">
                                                      <div class="btn-group align-top">
                                                              <button class="btn btn-sm btn-outline-secondary " type="button" >
                                                                  <Link to={`/admins/edit/${user._id}`}>
                                                                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16">
  <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
</svg>
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

export default GetInvoices