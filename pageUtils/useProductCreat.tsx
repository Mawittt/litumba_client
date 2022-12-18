import { useForm } from "react-hook-form"
import { ProductCreateFormProps } from "../types/types"
import { useEffect , useState , useRef } from "react"
import { useNotifiers } from "../utils/hooks"


export default function useProductCreate(){
    const maxImages = 4
    const [previewImages, setPreviewImages] = useState<string[]>([])
    const {setWarning} = useNotifiers()
    const previewsForServer = useRef<File[]>([])
    const {register, handleSubmit, formState : {errors}, watch , setValue} = useForm<ProductCreateFormProps>()
    useEffect(()=>{
        handlePreviews(watch("previews"))
    },[watch("previews")])

    return {register, handleSubmit, errors , createProduct , previewImages , deleteImage}


    function createProduct(data : ProductCreateFormProps){
        
        console.log(data)       
    }
    function handlePreviews(previews : FileList | null ){
        if(!previews) return
        if((previewsForServer?.current?.length + previews?.length) > maxImages) return setWarning({content : "please select a total of less than four Images."})
        for (const key in previews) {
            if (Object.prototype.hasOwnProperty.call(previews, key)) {
                const image = previews[key];
                const fileReader = new FileReader()
                fileReader.onload = ()=>{
                    setPreviewImages(images=>{
                        if(!fileReader.result) return images
                        images = images.concat(fileReader.result?.toString())
                        return images
                    })
                }
                fileReader.readAsDataURL(image)
                previewsForServer.current.push(image)

            }
        }
    }
    function deleteImage(id : number){
        previewsForServer.current = previewsForServer.current.filter((img,index)=> id != index)
        setPreviewImages(images=>{
            return images.filter((image,index)=> id != index)
        })
        if(!previewsForServer.current.length) setValue("previews",null)
    }
}