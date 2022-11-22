import Image from "next/image";
import { MenuIcon } from "../../assets/icons";
import useMyProduct from "./useMyProduct";




export default function MyProduct(){
    const {image, name , interested , openProduct} = useMyProduct()
    return (
        <div className="flex w-full gap-3 h-fit p-2">
            <Image src={image} onClick={openProduct} alt="" height={64} width={64} className="h-[64px] rounded-lg cursor-pointer"/>
            <div className="flex w-full justify-between items-center">
                <div>
                    <div className="font-bold cursor-pointer" onClick={openProduct}>{name}</div>
                    <div className="text-bc_5"><span>Interested: </span><strong>{interested}</strong></div>
                </div>
                <div className="cursor-pointer">
                <MenuIcon onClick={openProduct} />
                </div>
            </div>
        </div>
    )
}