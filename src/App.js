import React from "react";
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Home from "./Pages/Home";
import ProductDetails from "./Pages/ProductDetails";
import AuthContextProvider from "./contexts/AuthContext";
import CreateProduct from "./Pages/CreateProduct";
import ModifyProduct from "./Pages/ModifyProduct";



const App = () => {
  return (
    <div className="App">
      <AuthContextProvider>
      <Router forceRefresh ={true}>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/ModifyProduct/:id" element={<ModifyProduct />}/>
          <Route path="/CreateProduct" element={<CreateProduct />}/>
          <Route path="/product/:id" element={<ProductDetails />}/>
        </Routes>
      </Router>  
      </AuthContextProvider>
    </div>
  );
}

export default App;
