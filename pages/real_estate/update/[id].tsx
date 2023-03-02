import { ErrorMessage } from '@hookform/error-message'
import Image from 'next/image'
import React from 'react'
import { RealEstateFormOptions } from '../../../assets/constant'
import { AddImageIcon, DeleteIcon } from '../../../assets/icons'
import Button from '../../../components/Button/Button'
import useRealEstateUpdate from '../../../pageUtils/useRealEstateUpdate'



const RealEstateCreate = () => {
    const { previewServerImages, deleteServerImage, register, handleSubmit, errors, updateRealEstate, previewImages, deleteImage, watch } = useRealEstateUpdate()

    return (
        <div className="shadow-comp_lg rounded-lg py-4 px-2 mx-4 flex flex-col gap-4 my-6 bg-white">
            <h3 className="font-bold text-2xl">Update Estate</h3>
            <p>please fill the below form and click the &quot;Create Estate&quot; button to create a new job.</p>
            <div>
                <Button label="add previews" icon={<AddImageIcon />} inputLabel={"previews"} />
                <ErrorMessage name='previews' errors={errors} as="div" />
                <div className='flex gap-1 relative flex-wrap mt-2'>
                    {previewServerImages.map((image, index) =>
                        <div key={index} className='group flex-1 min-w-[48%] aspect-square relative cursor-pointer overflow-hidden rounded-sm hover:rounded-lg transition-all duration-[0.2s]'>
                            <Image src={image} fill alt='preview img' className='object-cover group-hover:scale-110 transition-all duration-[1s] ease-out' />
                            <div className=' group-hover:opacity-100 transition-all duration-[0.5s] opacity-0 absolute top-0 left-0 w-full h-full bg-[#00000098] flex justify-center items-center'>
                                <DeleteIcon onClick={() => deleteServerImage(index)} className="scale-0 group-hover:scale-100 transition delay-75" />
                            </div>
                        </div>
                    )}
                    {previewImages.map((image, index) =>
                        <div key={index} className='group flex-1 min-w-[48%] aspect-square relative cursor-pointer overflow-hidden rounded-sm hover:rounded-lg transition-all duration-[0.2s]'>
                            <Image src={image} fill alt='preview img' className='object-cover group-hover:scale-110 transition-all duration-[1s] ease-out' />
                            <div className=' group-hover:opacity-100 transition-all duration-[0.5s] opacity-0 absolute top-0 left-0 w-full h-full bg-[#00000098] flex justify-center items-center'>
                                <DeleteIcon onClick={() => deleteImage(index)} className="scale-0 group-hover:scale-100 transition delay-75" />
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <div className="flex flex-col gap-2">
                <div className="font-bold">Name</div>
                <input type="text" className="text-input" {...register("name", { required: "The name is required" })} value={watch("name")} />
                <ErrorMessage name='name' errors={errors} />
            </div>
            <div className="flex flex-col gap-2">
                <div className="font-bold">type</div>
                <select className="text-input p-0" {...register("type", { required: "The type is required" })} value={watch("type")} >
                    <option value=""></option>
                    {RealEstateFormOptions.types.map(type => <option value={type} key={type}>{type}</option>)}
                </select>
                <ErrorMessage name='type' errors={errors} />
            </div>
            <div className="flex flex-col gap-2">
                <div className="font-bold">Price</div>
                <input type="number" className="text-input" {...register("price", { required: "price" })} value={watch("price")} />
                <ErrorMessage name='price' errors={errors} />
            </div>
            <div className="flex flex-col gap-2">
                <div className="font-bold">Description</div>
                <textarea className="text-input h-[100px] rounded-lg" {...register("description", { required: "The description is required" })} value={watch("description")} />
                <ErrorMessage name='description' errors={errors} />
            </div>
            <div className="flex flex-col gap-2">
                <div className="font-bold">Country</div>
                <input type="text" className="text-input" {...register("country", { required: "The country is required" })} value={watch("country")} />
                <ErrorMessage name='country' errors={errors} />
            </div>
            <div className="flex flex-col gap-2">
                <div className="font-bold">City</div>
                <input type="text" className="text-input" {...register("city", { required: "The city is required" })} value={watch("city")} />
                <ErrorMessage name='city' errors={errors} />
            </div>
            <input type="file" id="previews" {...register("previews")} className="hidden" multiple accept='image/*' />
            <Button label="Update estate" onClick={handleSubmit(updateRealEstate)} />
        </div>
    )
}

export default RealEstateCreate