import React from 'react'
import Button from '../Button/Button'
import MyProduct from '../MyProduct/MyProduct'
import useMyProducts from './useMyProducts'

const MyProducts = () => {
        const {products , more} = useMyProducts()

    return (
        <div className="w-full shadow-comp_lg h-fit p-2 rounded-lg">
            <h3 className="font-bold">My Products</h3>
            {products.map((product, index) => <MyProduct {...product} key={index} />)}
            {more && <Button label="More" full />}
        </div>
    )
}

export default MyProducts