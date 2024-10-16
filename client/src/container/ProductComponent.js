import React from 'react'
import { useSelector } from 'react-redux';

const ProductComponent = () => {
  const products = useSelector((state) => state.allReducers.products);
  //const {id, title} = products[0];
  return (
    <div>
      <div>
        <div>
          <div></div>
          <div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductComponent;