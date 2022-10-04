
import Topbar from "./navbar/Topbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./navbar/Sidebar";
import Footer from "./component/Footer";
import Home from "./component/Home";
import Signup from "./component/auth/Signup";
import Getadmin from "./component/admin/Getadmin";
import Getcat from "./component/cat/Getcat";
import EditAdmin from "./component/admin/EditAdmin";

//cat
import CreateCategory from './component/cat/Createcat'
import Editcat from "./component/cat/Editcat";
import CreateProd from "./component/product/CreateProd";
import Getprod from "./component/product/GetProd";
import EditProduct from "./component/product/EditProd";
import GetUser from "./component/user/Getuser";
import GetInvoices from "./component/invoice/Getinvoices";

function App() {
  return (
    <>
      <Router>
      <div>
       
       <div class="d-flex flex-column flex-lg-row h-lg-full bg-surface-secondary">
         <Sidebar />
          
           <div class="h-screen flex-grow-1 overflow-y-lg-auto">
          <Topbar />
               <main class="py-6 bg-surface-secondary">
                   <div class="container-fluid">
                <Routes>
                <Route exact path='/' element={ <Home />} />
                <Route exact path='/admins' element={ <Getadmin/>} />
                <Route exact path='/admins/edit/:id' element={ <EditAdmin/>} />
                  <Route exact path='/create/admin' element={<Signup />} />
                  {/* category  */}
                <Route exact path='/categories' element={ <Getcat/>} />
                <Route exact path='/create/category' element={ < CreateCategory/>} />
                    <Route exact path='/category/edit/:id' element={< Editcat />} />
                    
                    {/* product  */}
                    <Route exact path='/create/product' element={ < CreateProd/>} />
                    <Route exact path='/product' element={ < Getprod/>} />
                    <Route exact path='/product/edit/:id' element={< EditProduct />} />
                    {/* for user  */}
                    <Route exact path='/client' element={< GetUser />} />
                    {/* for invoice  */}
                    <Route exact path='/invoice' element={< GetInvoices/>} />
                </Routes>
                   </div>
               </main>
           </div>
       </div>
   </div>
    </Router>
    </>
  );
}

export default App;
