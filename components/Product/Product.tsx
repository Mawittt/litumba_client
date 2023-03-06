import Image from 'next/image'
import React from 'react'
import { ContactIcon, LocationIcon } from '../../assets/icons'
import { ProductProps } from '../../types/types'
import { cn } from '../../utils/fn'
import useProduct from './useProduct'

const Product = (props: ProductProps) => {
    const { avatar, name, location, website, image, description, price, amount, isBrand, self, openConversation, openProduct } = useProduct(props)
    return (
        <div className=' py-4 px-2 shadow-comp_lg rounded-lg bg-white my-2'>
            <div className='flex justify-between w-full'>
                <div className="flex gap-2 items-center flex-wrap">
                    <div><Image src={avatar} alt={"author avatar"} width={64} height={64} className={cn("h-[64px] cursor-pointer object-cover", isBrand ? "rounded-lg" : "rounded-full")} onClick={openProduct} /></div>
                    <div >
                        <h3 className="font-bold text-blue-500  cursor-pointer" onClick={openProduct}>{name}</h3>
                        <div className='flex translate-x-[-5px]'>
                            <div className='h-[24px]'>
                                <LocationIcon />
                            </div>
                            <div>{location}</div>
                        </div>
                        <div>{website}</div>
                    </div>
                </div>
                <div className={cn(self ? "hidden" : "cursor-pointer")}>
                    <ContactIcon onClick={openConversation} />
                </div>
            </div>
            <div className='relative flex justify-center' >
                <img src={image} alt="product preview" width='100%' height='fit' className='max-h-[300px]  object-cover' onClick={openProduct} />
                <div className='absolute bg-white p-2 rounded-md text-blue-500 font-bold shadow-icon bottom-2 right-2' >{"+" + amount}</div>
            </div>
            <div className='flex gap-4 w-full justify-between mt-2 flex-wrap'>
                <div className='w-full overflow-hidden'>
                    <div className=' w-fit'>
                        {description}
                    </div>
                </div>
                <div className="py-1 px-4 bg-blue-500 w-max text-white rounded-lg whitespace-nowrap flex justify-center items-center" onClick={openProduct}>{price + " frs-cfa"}</div>
            </div>
        </div>
    )
}

export default Product