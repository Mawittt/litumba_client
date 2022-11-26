import Image from "next/image";
import { ContactIcon } from "../../assets/icons";
import { OtherProductProps } from "../../types/types";
import useOtherProduct from "./useOtherProduct";





export default function OtherProduct(props : OtherProductProps){
    const {product} = useOtherProduct(props)
    
    return (
        <div className=" py-4 px-2 shadow-comp_lg rounded-lg">
              <div className='flex justify-between w-full'>
                <div className="flex gap-2 items-center">
                    <div><Image src={product.image} alt={"author avatar"} width={64} height={64} className={"h-[64px] rounded-md"} /></div>
                    <div >
                        <h3 className="font-bold text-blue-500">{product.name}</h3>
                        <div>{product.price}</div>
                    </div>
                </div>
                <div>
                    <ContactIcon />
                </div>
            </div>
        </div>
    )
}