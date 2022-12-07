import Image from "next/image"
import { ContactIcon, EditIcon, LocationIcon } from "../../assets/icons"
import Button from "../../components/Button/Button"
import Job from "../../components/Job/Job"
import Product from "../../components/Product/Product"
import Service from "../../components/Service/Service"
import useBusinessDetails from "../../pageUtils/useBusinessDetails"
import useJobDetails from "../../pageUtils/useJobDetails"
import { cn } from "../../utils/fn"





export default function BusinessDetails() {

    const { services, products, jobs, details , goBack , gotoConversation , self , openBusinessEditor } = useBusinessDetails()

    return (
        <div className="w-full pb-4 px-4 flex flex-col gap-6">
            <div className="w-full h-[300px] relative">
                <Image src={details.cover} fill alt="cover image" />
            </div>
            <div className='flex justify-between w-full flex-wrap'>
                <div className="flex gap-2 items-center flex-wrap">
                    <div><Image src={details.avatar} alt={"author avatar"} width={64} height={64} className={"h-[64px] "} /></div>
                    <div >
                        <h3 className="font-bold ">{details.name}</h3>
                        <div>{details.email}</div>
                        <div>{details.website}</div>
                    </div>
                </div>
                <div className="flex flex-col justify-between items-end w-full flex-1">
                    <div className="cursor-pointer">{self ? <EditIcon onClick={openBusinessEditor} /> : <ContactIcon onClick={gotoConversation}/>}</div>
                    <div className='flex translate-x-[-5px] w-[max-content]'>
                        <div className='h-[24px]'>
                            <LocationIcon />
                        </div>
                        <div>{details.location}</div>
                    </div>
                </div>
            </div>
            <div className={cn(self ? "hidden" : "")}>
                <Button label="Leave a review" />
            </div>
            <div>
                {details.description}
            </div>
            <div className="flex flex-col gap-4">
                <div>
                    <div>Price</div>
                    <div className="font-bold">{details.phone}</div>
                </div>
                <div>
                    <div>Niche</div>
                    <div className="font-bold">{details.niche}</div>
                </div>
                <div className="flex items-center gap-2">
                    <div>
                        Available
                    </div>
                    <div className={
                        cn(
                            "w-4 h-4 rounded-full bg-red-500",
                            details.available ? "bg-green-500" : "bg-red-500"
                        )
                    }></div>
                </div>
            </div>
            <div>
                <h2 className="font-bold mb-4">Services</h2>
                <div className="flex flex-col gap-2">
                    {
                        services.map(service => <Service key={service._id} {...service} />)
                    }
                </div>
            </div>
            <div>
                <h2 className="font-bold mb-4">Products</h2>
                <div className="flex flex-col gap-2">
                    {
                        products.map( product=> <Product key={product._id} {...product} />)
                    }
                </div>
            </div>
            <div>
                <h2 className="font-bold mb-4">Jobs</h2>
                <div className="flex flex-col gap-2">
                    {
                        jobs.map( job=> <Job key={job._id} {...job} />)
                    }
                </div>
            </div>
                <Button label="Go back" full onClick={goBack}/>
        </div>
    )
}