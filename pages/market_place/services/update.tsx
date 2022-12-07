import React from 'react'
import { AddImageIcon } from '../../../assets/icons'
import Button from '../../../components/Button/Button'

const Create = () => {
  return (
    <div className="shadow-comp_lg rounded-lg py-4 px-2 mx-2 flex flex-col gap-4">
            <h3 className="font-bold text-2xl">Create a Product</h3>
            <p>please fill the below form and click the &quot;Create Job&quot; button to create a new job.</p>
            <div>
                <Button label="add previews" icon={<AddImageIcon />} />
            </div>
            <div className="flex flex-col gap-2">
                <div className="font-bold">Name</div>
                <input type="text" className="text-input" />
            </div>
            <div className="flex flex-col gap-2">
                <div className="font-bold">Price</div>
                <input type="text" className="text-input" />
            </div>
            <div className="flex flex-col gap-2">
                <div className="font-bold">Quantity</div>
                <input type="text" className="text-input" />
            </div>
            <div className="flex flex-col gap-2">
                <div className="font-bold">Description</div>
                <textarea className="text-input h-[100px] rounded-lg" />
            </div>
            <div className="flex flex-col gap-2">
                <div className="font-bold">Niche</div>
                <select name="" id="" className='text-input p-0'></select>
            </div>
            <div className="flex flex-col gap-2">
                <div className="font-bold">Brand</div>
                <input type="text" className="text-input" />
            </div>
            <div className="flex flex-col gap-2">
                <div className="font-bold">Country</div>
                <input type="text" className="text-input" />
            </div>
            <div className="flex flex-col gap-2">
                <div className="font-bold">City</div>
                <input type="text" className="text-input" />
            </div>
            <Button label="Create Product" />
        </div>
  )
}

export default Create