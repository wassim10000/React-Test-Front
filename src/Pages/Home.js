import React, {useContext,useState, useEffect} from 'react'
import { render } from 'react-dom';
import { ProductContext } from '../contexts/ProductContext';
import Product from '../Components/Product';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import AddProduct from '../Components/AddProduct';
import { UserAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router';


const Home = () => {
    
  const {products} = useContext(ProductContext);
    
  const [productsArray,setProductsArray] =useState([]);

  const newProducts = [...products]

  useEffect(()=>{
    setProductsArray(newProducts)
    },[products])

  const ProductsComponent =({productsArray})=> { if(productsArray.length!=0){return(
    <div className='container mx-auto'>
        {user?<AddProduct/>:<></>}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] maw-w-sm mx-auto md:max-w-none md:mx-0 '>
            {productsArray.map(product => {
                return (<Product product={product} key={product._id} />)
            }
            )}
    </div>
    </div>)}else{
        return(<div className=' text-center min-h-[47vh] w-full h-full'>
        <AddProduct/><p>Loading...</p></div>)
    }}

    const {user} = UserAuth();

  return (<>
    <Header/>
    <div>
        <section className='py-16'>
            <ProductsComponent productsArray={productsArray}/>
        </section>
      
    </div>
    <Footer/>
    </>
  )
}

export default Home
