import React from 'react'
import { BsPlus } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const AddProduct = () => {
  return (
    <>
    <Link to={'/CreateProduct'}>
    <div className= 'hover:bg-gray-200 hover:text-red-500'>
    <div className='border border-[#e4e4e4] h-[300px] mb-4 relative overflow-hidden group trnasition'>
        <div className='w-full h-full flex justify-center items-center'>
            <div className='w-[200px] mx-auto flex justify-center items-center'>
                <BsPlus/>
            </div>
        </div>
    </div>
    </div>
    </Link> 
    </>
  )
}

export default AddProduct
