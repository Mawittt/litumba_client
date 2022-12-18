import { useForm } from "react-hook-form"
import { RealEstateCreateFormProps } from "../types/types"
import { useNotifiers } from "../utils/hooks"
import {useState , useRef , useEffect} from "react"



export default function useRealEstateCreate(){
    const maxImages = 4
    const [previewImages, setPreviewImages] = useState<string[]>([])
    const {setWarning} = useNotifiers()
    const previewsForServer = useRef<File[]>([])
    const {register, handleSubmit, formState : {errors}, setValue , watch} = useForm<RealEstateCreateFormProps>()

    useEffect(()=>{
        handlePreviews(watch("previews"))
    },[watch("previews")])

    return {register , handleSubmit, errors , createRealEstate , deleteImage , previewImages}

    function createRealEstate(data : RealEstateCreateFormProps){
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