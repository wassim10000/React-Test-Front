import React, {useContext, useEffect} from 'react'
import { ProductContext } from '../contexts/ProductContext';
import Product from '../Components/Product';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import AddProduct from '../Components/AddProduct';
import { UserAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router';


const Home = () => {
   
    const {products} = useContext(ProductContext);

    const {user} = UserAuth();

  return (<>
    <Header/>
    <div>
        <section className='py-16'>
            <div className='container mx-auto'>
                {user?<AddProduct/>:<></>}
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] maw-w-sm mx-auto md:max-w-none md:mx-0 '>
                    {products.map(product => {
                        return (<Product product={product} key={product._id} />)
                    }
                    )}
            </div>
            </div>
        </section>
      
    </div>
    <Footer/>
    </>
  )
}

export default Home
