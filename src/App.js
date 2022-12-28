import React,{useState,useEffect} from "react";
import {BrowserRouter as Router,Route,Routes,Navigate} from 'react-router-dom'

import Home from "./Pages/Home";
import ProductDetails from "./Pages/ProductDetails";
import AuthContextProvider from "./contexts/AuthContext";
import CreateProduct from "./Pages/CreateProduct";
import ModifyProduct from "./Pages/ModifyProduct";



const App = () => {
  const [user, setUser] = useState('');

  useEffect(()=>{
    setUser(JSON.parse(localStorage.getItem('user')));},[])

const ProtectedRoute = ({
  user,
  redirectPath = '/',
  children,
}) => {
  if (user.length==0) {
    alert('Please login to access this page ! You will be redirected to homepage for now'); 
    return <Navigate to={redirectPath} replace />;
  }

  return children;
};

  return (

    <div className="App">
      <AuthContextProvider>
      <Router forceRefresh ={true}>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route
          path="/ModifyProduct/:id"
          element={
            <ProtectedRoute user={user}>
              <ModifyProduct />
            </ProtectedRoute>
          }
        />
          <Route
          path="/CreateProduct"
          element={
            <ProtectedRoute user={user}>
              <CreateProduct />
            </ProtectedRoute>
          }
        />
          <Route path="/product/:id" element={<ProductDetails />}/>
        </Routes>
      </Router>  
      </AuthContextProvider>
    </div>
  );
}

export default App;
