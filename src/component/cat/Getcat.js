import React from 'react'
import './crud.css'
import { Link } from 'react-router-dom'
import ReactPaginate from 'react-paginate';
import {GetCategories , adminSignupReset , SearchCategory , DeleteCategory } from '../../redux/cat'
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from 'react';
import moment from 'moment'

function  Getcat() {
    const [search , setemail] = useState('')

    const cat = useSelector((state) => state.category.categories)
    const dispatch = useDispatch()

    //function to call all the admins
    useEffect(() => {
        dispatch(GetCategories())
        console.log(cat)
        return () => {
            dispatch(adminSignupReset())
        }
    }, [])

    //function for seaarh 
    
 const changeEmail = (e) => {
  setemail(e.target.value)
  }
//function to subnit
  // const submit = (e) => {
  //   e.preventDefault()
  //   console.log(email)
  //   dispatch(SearchCategory(email))
  // }
      
  //for pagination
  const [pagenumber, setpagenumber] = useState(0)
  
  const dataperview = 3
  const pageVisited = dataperview * pagenumber

  const pagecount = Math.ceil(cat.length / dataperview)
  const pagechange = ({ selected }) => {
    setpagenumber(selected)
    }
    
    const deleted = (id) => {
    dispatch(DeleteCategory(id))
    }
  return (
    <div class="row flex-lg-nowrap">
        
        <div class="col">
              <div className="row">
              <div class="col-12  mb-3">
                <div class="card">
                <div class="card-body">
                    <div class="text-center px-xl-3">
                    <Link to={'/create/category'}><button class="btn btn-success btn-block" type="button" data-toggle="modal" data-target="#user-form-modal">New Category</button></Link>
                    </div>
                    <hr class="my-3" />
                    <div className="row">
                    <div className="col-12-sm col-md-8">
                                      <form >
                                      <div class="input-group mb-3">
  <input type="text" class="form-control" onChange={changeEmail} value={search} placeholder="Category" aria-label="Recipient's username" aria-describedby="basic-addon2" />
  <div class="input-group-append">
    <button type="submit"  class="input-group-text btn btn-primary" id="basic-addon2"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
</svg></button>
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
                    <h6 class="mr-2"><span>Category</span><small class="px-1">Details</small></h6>
                    </div>
                    <div class="e-table">
                    <div class="table-responsive table-lg mt-3">
                        <table class="table table-bordered">
                        <thead>
                            <tr>
                           
                            <th class="max-width">Category</th>
                            <th class="sortable">Date</th>
                            <th>Actions</th>
                            </tr>
                        </thead>
                            <tbody>
                                              {cat.length > 0 ? cat.filter((val) => {
                                  if (search === '') {
                                      return val
                                  } else if (val.category.toLowerCase().includes(search.toLowerCase())) {
                                      console.log('this is val : ', val)
                                      return val
                                  }
                              }).slice(pageVisited, pageVisited + dataperview).map((user) => (
                                                  <tr key={user._id}>
                          
                                                 
                                                      <td class="text-nowrap align-middle">{user.category }</td>
                                                      <td class="text-nowrap align-middle"><span>{moment(user.createdAt).subtract(10, 'days').calendar() }</span></td>
                                                  <td class="text-center align-middle">
                                                      <div class="btn-group align-top">
                                                              <button class="btn btn-sm btn-outline-secondary " type="button" >
                                                                  <Link to={`/category/edit/${user._id}`}>
                                                                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16">
  <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
</svg>
                                                                  </Link>
                                                             
                                                          </button>
                                                          <button onClick={() => deleted(user._id)} class="btn btn-sm btn-outline-secondary " type="button"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-file-x" viewBox="0 0 16 16">
  <path d="M6.146 6.146a.5.5 0 0 1 .708 0L8 7.293l1.146-1.147a.5.5 0 1 1 .708.708L8.707 8l1.147 1.146a.5.5 0 0 1-.708.708L8 8.707 6.854 9.854a.5.5 0 0 1-.708-.708L7.293 8 6.146 6.854a.5.5 0 0 1 0-.708z"/>
  <path d="M4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4zm0 1h8a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1z"/>
</svg></button>
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

export default Getcat