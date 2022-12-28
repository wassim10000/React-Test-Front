import React, { useState,useContext } from 'react'
import { useParams } from 'react-router'
import { ProductContext } from '../contexts/ProductContext';

const ModifyProduct = () => {
    const {id} =useParams();
    const {products} =useContext(ProductContext);
  
    const product = products.find((item) => {
        if(item._id === id){return(item)}
    });

    const [description,setDescription] = useState(product.description)
    const [productName,setProductName] = useState(product.productName)
    const [gender,setGender] = useState(product.gender)
    const [price,setPrice] = useState(product.price)
    const [imageUrl,setImageUrl] = useState(product.imageUrl)
    const [error,setError] = useState('')

    const handleSubmit = async (e) =>{
      e.preventDefault()

      const changedproduct = {description,productName,gender,price,imageUrl}

      const response = await fetch('/api/products/' + product._id , {
         method :'PATCH',
          body:JSON.stringify(changedproduct),
          headers:{
              'Content-Type': 'application/json'

          } 
      })
      const json = await response.json()

      if(!response.ok){
        setError(json.error)
      }
      if(response.ok){
        setError(null)
        console.log(' product updated' , json)
      }
    }

  return (<>
    <div className='m-10'>
    <div className="md:grid md:grid-rows-1 md:gap-6">
      <div className="md:col-span-1">
        <div className="px-4 sm:px-0">
          <h3 className="text-lg font-medium leading-6 text-gray-900">Product</h3>
          <p className="mt-1 text-sm text-gray-600">This information will be displayed publicly so be careful what you share.</p>
        </div>
      </div>
      <div className="mt-5 md:col-span-2 md:mt-0">
        <form action="#" method="POST" onSubmit={handleSubmit}>
          <div className="shadow sm:overflow-hidden sm:rounded-md">
            <div className="space-y-6 bg-white px-4 py-5 sm:p-6">
              <div className="grid grid-cols-3 gap-6">
              <div className="col-span-6 sm:col-span-3">
                  <label htmlFor="product-name" className="block text-sm font-medium text-gray-700">Product name</label>
                  <input onChange={(e) => setProductName(e.target.value)} value={productName} type="text" name="product-name" id="product-name" autoComplete="given-name" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"/>
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label htmlFor="price" className="block text-sm font-medium text-gray-700">Price</label>
                  <input onChange={(e) => setPrice(e.target.value)} value={price} type="number" name="price" id="price" autoComplete="given-name" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"/>
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label htmlFor="gender" className="block text-sm font-medium text-gray-700">Gender</label>
                  <input onChange={(e) => setGender(e.target.value)} value={gender} type="text" name="gender" id="gender" autoComplete="given-name" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"/>
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label htmlFor="image-url" className="block text-sm font-medium text-gray-700">Image Url</label>
                  <input onChange={(e) => setImageUrl(e.target.value)} value={imageUrl} type="url" name="image-url" id="image-url" autoComplete="given-name" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"/>
                </div>
                <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
              <div className="mt-1">
                <textarea onChange={(e) => setDescription(e.target.value)} value={description} id="description" name="description" rows="3" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" placeholder="description"></textarea>
              </div>
              <p className="mt-2 text-sm text-gray-500">Brief description For your Product.</p>
            </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
              <button type="submit" className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Save</button>
              <p className='mt-10'>{error}</p>
            </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</>
  )
}

export default ModifyProduct
