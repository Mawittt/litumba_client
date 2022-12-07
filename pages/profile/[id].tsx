




import Image from "next/image"
import { ContactIcon, LocationIcon } from "../../assets/icons"
import Business from "../../components/Business/Business"
import Button from "../../components/Button/Button"
import Job from "../../components/Job/Job"
import Product from "../../components/Product/Product"
import useUserProfile from "../../pageUtils/useUserProfile"
import { cn } from "../../utils/fn"





export default function Profile() {

    const { details , businesses , products , jobs} = useUserProfile()

    return (
        <div >
            <div className="w-full h-[300px] relative">
                <Image src={details.cover} fill alt="cover image" className="object-cover" />
            </div>
            <div className="flex flex-col gap-4 py-4 px-2 pb-6">
                <div className='flex justify-between w-full'>
                    <div className="flex gap-2 items-center">
                        <div><Image src={details.avatar} alt={"author avatar"} width={64} height={64} className={"h-[64px]"} /></div>
                        <div >
                            <h3 className="font-bold text-blue-500">{details.name}</h3>
                            <div>{details.email}</div>
                            <div>{details.profession}</div>
                        </div>
                    </div>
                    <div className="flex flex-col h-full justify-between items-end">
                        <Button label="follow" />
                        <div className='flex translate-x-[-5px]'>
                            <div className='h-[24px]'>
                                <LocationIcon />
                            </div>
                            <div>{details.location}</div>
                        </div>
                    </div>
                </div>
                <div>
                    <Button label="send message" />
                </div>
                <div>{details.description}</div>
                <div className="flex flex-col gap-4">
                    <div>
                        <div>Phone</div>
                        <div className="font-bold">{details.phone}</div>
                    </div>
                    <div>
                        <div>Country</div>
                        <div className="font-bold">{details.country}</div>
                    </div>
                    <div>
                        <div>City</div>
                        <div className="font-bold">{details.city}</div>
                    </div>
                    <div className="flex items-center gap-2">
                        <div>
                            Online
                        </div>
                        <div className={
                            cn(
                                "w-4 h-4 rounded-full bg-red-500",
                                details.online
                                    ? "bg-green-500" : "bg-red-500"
                            )
                        }></div>
                    </div>
                </div>
                <div>
                    <h2 className="font-bold text-2xl">Businesses</h2>
                    <div>
                        {businesses.map(business=><Business key={business._id} {...business} />)}
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <h2 className="font-bold text-2xl">Products</h2>
                    <div className="flex flex-col gap-4">
                        {products.map(product=><Product key={product._id} {...product} />)}
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <h2 className="font-bold text-2xl">Jobs</h2>
                    <div className="flex flex-col gap-4">
                        {jobs.map(job=><Job key={job._id} {...job} />)}
                    </div>
                </div>
                <Button label="Go back" />

            </div>
        </div>
    )
}
