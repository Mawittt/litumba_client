import { ProductPreviewerProps } from "../../types/types"
import { cn } from "../../utils/fn"
import useProductPreviewer from "./useProductPreviewer"




export default function ProductPreviewer(props : ProductPreviewerProps){
    const {selected , others ,isSelected,setImage} = useProductPreviewer(props)
    return(
        <div className="w-full h-[300px] relative ">
            <img src={selected} alt="" className="w-full h-full object-cover cursor-pointer hover:opacity-80 transition-all active:opacity-100"/>
            <div className="flex flex-col absolute top-0 bottom-0 my-auto h-fit right-2 gap-2">
                {others.map((image, id)=><img key={id} src={image} alt="preview image" className={cn(
                    "w-[64px] h-[64px] object-cover rounded-md border-solid cursor-pointer ",
                    isSelected(image) ? "border-blue-500 border-[2px]" : "border-white shadow-icon border-[2px] hover:border-blue-300 transition-all"
                )}
                onClick={()=>setImage(image)}
                />)}
            </div>
        </div>
    )
}