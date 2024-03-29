

import { ErrorMessage } from '@hookform/error-message'
import React from 'react'
import { servicesFormOptions } from '../../../../assets/constant'
import Loader from '../../../../assets/Loader'
import Button from '../../../../components/Button/Button'
import useServiceCreate from '../../../../pageUtils/useServiceCreate'
import useServiceUpdate from '../../../../pageUtils/useServiceUpdate'

const Update = () => {
    const { mutator, register, handleSubmit, errors, updateService } = useServiceUpdate()

    return (
        <div className="shadow-comp_lg rounded-lg py-4 px-4 mx-2 flex flex-col gap-4 my-6 mx-4 bg-white">
            <h3 className="font-bold text-2xl">Update this Service</h3>
            <p>please fill the below form and click the &quot;Update Service&quot; button to create a new job.</p>
            <div className="flex flex-col gap-2">
                <div className="font-bold">Name</div>
                <input type="text" className="text-input" {...register("name", { required: "The name is required" })} />
                <ErrorMessage name='name' errors={errors} />
            </div>
            <div className="flex flex-col gap-2">
                <div className="font-bold">Price (frs cfa)</div>
                <input type="number" className="text-input" {...register("price", { required: "The price is required" })} />
                <ErrorMessage name='price' errors={errors} />
            </div>
            <div className="flex flex-col gap-2">
                <div className="font-bold">Description</div>
                <textarea className="text-input h-[100px] rounded-lg" {...register("description", { required: "The description is required" })} />
                <ErrorMessage name='description' errors={errors} />
            </div>
            <div className="flex flex-col gap-2">
                <div className="font-bold">Niche</div>
                <select id="" className='text-input p-0' {...register("niche", { required: "The niche is required" })}>
                    <option value=""></option>
                    {servicesFormOptions.niches.map(niche => <option key={niche} value={niche}>{niche}</option>)}
                </select>
                <ErrorMessage name='niche' errors={errors} />
            </div>
            <div className="flex flex-col gap-2">
                <div className="font-bold">Country</div>
                <input type="text" className="text-input" {...register("country", { required: "The country is required" })} />
                <ErrorMessage name='country' errors={errors} />
            </div>
            <div className="flex flex-col gap-2">
                <div className="font-bold">City</div>
                <input type="text" className="text-input" {...register("city", { required: "The city is required" })} />
                <ErrorMessage name='city' errors={errors} />
            </div>
            {mutator.isLoading ? <div className='flex justify-center'><Loader /></div> : <Button label="Create service" onClick={handleSubmit(updateService)} />}
        </div>
    )
}

export default Update