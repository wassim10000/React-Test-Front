import React, {createContext,useState,useEffect} from 'react'


export const ProductContext = createContext();
const ProductProvider = ({children}) => {

  const [products,setProducts] =useState([]);

useEffect(()=>{
    const fetchProducts = async () => { 
    const response = await fetch('/api/products');    
    const json = await response.json(); 
   if (response.ok) {setProducts(json);}
    };
    fetchProducts();
},[])

  return (
    <ProductContext.Provider value={{products}}>
      {children}
    </ProductContext.Provider>
  )
}

export default ProductProvider;
