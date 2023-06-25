import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RegisterPagef from './components/RegisterPage';
import AdminPagef from './components/AdminPage';
import Allusersf from './pages/Allusersf';
import Allproductsf from './pages/Allproductsf';
import Allcategorysf from './pages/Allcategorysf';
import LoginPagef from './components/LoginPage';
import Createproductsf from './pages/Createproductsf';
import Createcategorysf from './pages/Createcategorysf';
import ProtectRoute from './ProtectRoute/ProtectRoute';
import Product from './Userpage/Product';
import HomePage from './components/HomePage';

function App() {
  return (
    <div className="App">
    
      <Router>
      <Routes>
          <Route path="/Register" element={<RegisterPagef />} /> 
          <Route path='LoginPage'element = {<LoginPagef/>} /> 
          <Route path='/'element = {<HomePage/>} />                   
          <Route path='/userpage'element = {<Product/>} />
           <Route path="AdminPage" element={<ProtectRoute> <AdminPagef/></ProtectRoute >} >
            <Route path="allusers" element={<Allusersf/>}/>
            <Route path="allproducts" element={<Allproductsf />}/>
            <Route path="allcategorys" element={<Allcategorysf/>}/>
            <Route path="createproducts" element={<Createproductsf/>}/>
            <Route path="createcategorys" element={<Createcategorysf/>}/>
            </Route> 
      </Routes>
      </Router>
    </div>
  );
}

export default App;
