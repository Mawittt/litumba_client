import { useState } from "react";
import { ProductPreviewerProps } from "../../types/types";





export default function useProductPreviewer({selectedImage , allImages} : ProductPreviewerProps ){
    const [selected, setSelected] = useState<typeof selectedImage>(selectedImage)
    const others = allImages


    return {selected , others , isSelected ,setImage}

    function isSelected(img: string){
        return selected === img
    }

    function setImage(image : string){
        setSelected(image)
    }
}