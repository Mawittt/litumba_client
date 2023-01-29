import Image from "next/image";
import { MenuIcon } from "../../assets/icons";
import { MyProductProps } from "../../types/types";
import useMyProduct from "./useMyProduct";




export default function MyProduct(props: MyProductProps) {
    const { image, name, openProduct } = useMyProduct(props)
    return (
        <div className="flex w-full gap-3 h-fit p-2">
            <Image src={image} onClick={openProduct} alt="" height={64} width={64} className="h-[64px] rounded-lg cursor-pointer" />
            <div className="flex w-full justify-between items-center">
                <div>
                    <div className="font-bold cursor-pointer" onClick={openProduct}>{name}</div>
                </div>
                <div className="cursor-pointer">
                    <MenuIcon onClick={openProduct} />
                </div>
            </div>
        </div>
    )
}