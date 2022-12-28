import React, {useContext, useState} from 'react'
import { Navigate, useParams } from 'react-router-dom'
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import { ProductContext } from '../contexts/ProductContext'
import { UserAuth } from '../contexts/AuthContext';
import { Link } from 'react-router-dom';


const ProductDetails = () => {

  const [errorDelete,setErrorDelete] = useState(null)
  const [errorstate,setErrorState]= useState(false)

  const {user} = UserAuth();

  const {id} =useParams();

  const {products} =useContext(ProductContext);

  const product = products.find((item) => {
     return item._id === id;
  });

  const handleDelete = async () => {
    const response = await fetch ('/api/products/' + product._id , {
      method: 'DELETE'
    })

    const json = await response.json()
  
    if (response.ok) {
      setErrorDelete(null)
      setErrorState(false)
      console.log('Product deleted')
    }
    if (!response.ok){
      setErrorDelete(json.error)
      setErrorState(true)
    }
  }

  if(!product){
    return <section className='h-screen flex justify-center items-center'>Loading...</section>
  }

  const Buttons = ({user}) => {
    if (user) {return(<>
    <Link to={`/ModifyProduct/${product._id}`}><button className='bg-black text-md rounded-2xl shadow-lg shadow-black py-4 px-8 text-white mr-5'>Modify Product</button></Link>
    <button onClick={handleDelete} className='bg-black text-md rounded-2xl shadow-lg shadow-black py-4 px-8 text-white'>Delete Product</button>
    {errorstate?<p mt-10>this product is deleted</p>:<p>{errorDelete}</p>}
    </>)}
  }

  const {productName,price,description,imageUrl,gender} = product;
  return (<><Header/> 
    <section className='pt-32 pb-12 lg:py-32 h-screen flex items-center'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row items-center'>
          <div className=' flex  flex-1 justify-center items-center mb-8 lg:mb-0'>
            <img className='max-w-[200px] lg:max-w-sm ' src={imageUrl} />
          </div>
          <div className='flex-1 text-center lg:text-left'>
            <h1 className='text-[26px] font-medium mb-2 max-w-[450px] mx-auto lg:mx-0 text-shadow-md'>{productName} </h1>
          <div className='text-xl text-red-500 font-medium mb-6'>${price}</div>
          <p className='m-8 ml-0 font-medium text-gray-800'>description : {description}</p>
          <p className='m-8 ml-0 text-shadow-sm font-normal text-gray-600'>gender : {gender}</p>
          <Buttons user={user}/>
          </div>
        </div>
      </div>
    </section>
    <Footer/></>
  )
}

export default ProductDetails