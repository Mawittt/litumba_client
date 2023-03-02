import React from 'react'
import { MyProductProps } from '../../types/types'
import Button from '../Button/Button'
import MyProduct from '../MyProduct/MyProduct'
import useMyProducts from './useMyProducts'

const MyProducts = (props: { products: MyProductProps[] }) => {
    const { products } = useMyProducts(props)

    return (
        <div className="w-full shadow-comp_lg h-fit p-2 rounded-lg bg-white">
            <h3 className="font-bold">My Products</h3>
            {products.map((product, index) => <MyProduct {...product} key={index} />)}
        </div>
    )
}

export default MyProducts