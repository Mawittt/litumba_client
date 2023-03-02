import { ErrorMessage } from '@hookform/error-message'
import Image from 'next/image'
import React from 'react'
import { productFormOptions } from '../../../../assets/constant'
import { AddImageIcon, DeleteIcon } from '../../../../assets/icons'
import Button from '../../../../components/Button/Button'
import useProductUpdate from '../../../../pageUtils/useProductUpdate'


const ProductsUpdate = () => {
    const { previewServerImages, deleteServerImage, register, handleSubmit, errors, UpdateProduct, previewImages, deleteImage } = useProductUpdate()
    return (
        <div className="shadow-comp_lg rounded-lg py-4 px-4 mx-4 flex flex-col gap-4 my-6 bg-white">
            <h3 className="font-bold text-2xl">Update a Product</h3>
            <p>please fill the below form and click the &quot;Update Product&quot; button to create a new job.</p>
            <div>
                <Button label="add previews" icon={<AddImageIcon />} inputLabel={"previews"} />
                <div className='flex gap-1 relative flex-wrap mt-2'>
                    {previewServerImages.map((image, index) =>
                        <div className='group flex-1 min-w-[48%] aspect-square relative cursor-pointer overflow-hidden rounded-sm hover:rounded-lg transition-all duration-[0.2s]' key={index}>
                            <Image src={image} fill alt='preview img' className='object-cover group-hover:scale-110 transition-all duration-[1s] ease-out' />
                            <div className=' group-hover:opacity-100 transition-all duration-[0.5s] opacity-0 absolute top-0 left-0 w-full h-full bg-[#00000098] flex justify-center items-center'>
                                <DeleteIcon onClick={() => deleteServerImage(index)} className="scale-0 group-hover:scale-100 transition delay-75" />
                            </div>
                        </div>
                    )}
                    {previewImages.map((image, index) =>
                        <div className='group flex-1 min-w-[48%] aspect-square relative cursor-pointer overflow-hidden rounded-sm hover:rounded-lg transition-all duration-[0.2s]' key={index}>
                            <Image src={image} fill alt='preview img' className='object-cover group-hover:scale-110 transition-all duration-[1s] ease-out' />
                            <div className=' group-hover:opacity-100 transition-all duration-[0.5s] opacity-0 absolute top-0 left-0 w-full h-full bg-[#00000098] flex justify-center items-center'>
                                <DeleteIcon onClick={() => deleteImage(index)} className="scale-0 group-hover:scale-100 transition delay-75" />
                            </div>
                        </div>
                    )}
                </div>
                <input type="file" id="previews" {...register("previews")} className="hidden" multiple accept='image/*' />
            </div>
            <div className="flex flex-col gap-2">
                <div className="font-bold">Name</div>
                <input type="text" className="text-input" {...register("name", { required: "The name is required" })} />
                <ErrorMessage name='name' errors={errors} />
            </div>
            <div className="flex flex-col gap-2">
                <div className="font-bold">Price(frs cfa)</div>
                <input type="number" className="text-input" {...register("price", { required: "The price is required" })} />
                <ErrorMessage name='price' errors={errors} />
            </div>
            <div className="flex flex-col gap-2">
                <div className="font-bold">Quantity</div>
                <input type="number" className="text-input" {...register("quantity", { required: "The Quantity is required" })} />
                <ErrorMessage name='quantity' errors={errors} />
            </div>
            <div className="flex flex-col gap-2">
                <div className="font-bold">Description</div>
                <textarea className="text-input h-[100px] rounded-lg" {...register("description", { required: "The description is required" })} />
                <ErrorMessage name='description' errors={errors} />
            </div>
            <div className="flex flex-col gap-2">
                <div className="font-bold">Niche</div>
                <select id="" className='text-input p-0' {...register("niche", { required: "The niche is required" })} >
                    <option value=""></option>
                    {productFormOptions.niches.map(niche => <option value={niche} key={niche}>{niche}</option>)}
                </select>
                <ErrorMessage name='niche' errors={errors} />
            </div>
            <div className="flex flex-col gap-2">
                <div className="font-bold">Brand</div>
                <input type="text" className="text-input" {...register("brand", { required: "The brand is required" })} />
                <ErrorMessage name='brand' errors={errors} />
            </div>
            <div className="flex flex-col gap-2">
                <div className="font-bold">Country</div>
                <input type="text" className="text-input" {...register("country", { required: "The Country is required" })} />
                <ErrorMessage name='country' errors={errors} />
            </div>
            <div className="flex flex-col gap-2">
                <div className="font-bold">City</div>
                <input type="text" className="text-input" {...register("city", { required: "The city is required" })} />
                <ErrorMessage name='city' errors={errors} />
            </div>
            <Button label="Update Product" onClick={handleSubmit(UpdateProduct)} />
        </div>
    )
}

export default ProductsUpdate