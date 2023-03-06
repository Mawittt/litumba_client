import Image from "next/image";
import { ContactIcon } from "../../assets/icons";
import { OtherProductProps } from "../../types/types";
import { cn } from "../../utils/fn";
import useOtherProduct from "./useOtherProduct";





export default function OtherProduct(props: OtherProductProps) {
    const { product, openProduct } = useOtherProduct(props)

    return (
        <div className=" py-4 px-2 shadow-comp_lg rounded-lg">
            <div className='flex justify-between w-full'>
                <div className="flex gap-2 items-center">
                    <div><Image src={product.image} alt={"author avatar"} width={64} height={64} className={"h-[64px] rounded-md cursor-pointer object-cover"} onClick={openProduct} /></div>
                    <div >
                        <h3 className="font-bold text-blue-500 cursor-pointer" onClick={openProduct}>{product.name}</h3>
                        <div>{product.price}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}