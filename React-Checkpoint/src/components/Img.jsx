import React from 'react'
import product from './product'

const Img = () => {
  return (
    <img src={product.imgUrl} alt="" className='w-full h-[220px]'/>
  )
}

export default Img