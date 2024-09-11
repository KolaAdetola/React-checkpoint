import React from 'react'
import product from './product'

const Price = () => {
  return (
    <p className='text-[25px] absolute top-[53%] left-[55%] font-medium text-right'>Price:{product.price}</p>
  )
}

export default Price