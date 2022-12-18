
import { useForm } from "react-hook-form"
import { RealEstateUpdateFormProps, RealEstateUpdateInitialValuesProps } from "../types/types"
import { useNotifiers } from "../utils/hooks"
import {useState , useRef , useEffect} from "react"
import { business_image_1, realEstate_1, realEstate_2, realEstate_3 } from "../assets/images"



export default function useRealEstateUpdate(){
    const maxImages = 4
    const [previewImages, setPreviewImages] = useState<string[]>([])
    const [previewServerImages, setPreviewServerImages] = useState<string[]>([])
    const {setWarning} = useNotifiers()
    const previewsForServer = useRef<File[]>([])
    const {register, handleSubmit, formState : {errors}, setValue , watch} = useForm<RealEstateUpdateFormProps>()

    useEffect(()=>{
        handlePreviews(watch("previews"))
    },[watch("previews")])
    useEffect(()=>{
        setInitialValues(getData())
    },[])

    return { previewServerImages, deleteServerImage , register , handleSubmit, errors , updateRealEstate , deleteImage , previewImages , watch , }

    function updateRealEstate(data : RealEstateUpdateFormProps){
        console.log(data)
    }
    function handlePreviews(previews : FileList | null ){
        if(!previews) return
        if((previewsForServer?.current?.length + previews?.length + previewServerImages.length) > maxImages) return setWarning({content : "please select a total of less than four Images."})
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
    function deleteServerImage(id : number){
        setPreviewServerImages(images=>{
            return images.filter((image,index)=> id != index)
        })
        if(!previewServerImages.length) setValue("previews",null)
    }
    function setInitialValues(data : RealEstateUpdateInitialValuesProps){
        setValue("city",data.city)
        setValue("type",data.type)
        setValue("name",data.name)
        setValue("price",data.price)
        setValue("description",data.description)
        setValue("country",data.country)

        setPreviewServerImages(data.previews)
        
    }
    function getData(): RealEstateUpdateInitialValuesProps{
        return {
            city : "douala",
            type : "hall",
            name : "villa duplex molyko",
            price : 500000,
            description : "this is the best thing that I could do",
            country : "cameroon",
            previews : [realEstate_1, realEstate_2, realEstate_3 , business_image_1]
        }
    }
} 