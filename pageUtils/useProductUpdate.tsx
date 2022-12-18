import { useForm } from "react-hook-form"
import { ProductCreateFormProps, ProductUpdateInitialProps } from "../types/types"
import { useEffect , useState , useRef } from "react"
import { useNotifiers } from "../utils/hooks"
import { image_1, image_3, image_31, shoe_image, shoe_image_1, shoe_image_2, shoe_image_3 } from "../assets/images"


export default function useProductUpdate(){
    const maxImages = 4
    const [previewImages, setPreviewImages] = useState<string[]>([])
    const [previewServerImages, setPreviewServerImages] = useState<string[]>([])
    const {setWarning} = useNotifiers()
    const previewsForServer = useRef<File[]>([])
    const {register, handleSubmit, formState : {errors}, watch , setValue} = useForm<ProductCreateFormProps>()
    useEffect(()=>{
        handlePreviews(watch("previews"))
    },[watch("previews")])
    useEffect(()=>{
        const data = getData()
        setInitialValues(data)
    },[])

    return {previewServerImages , deleteServerImage , register, handleSubmit, errors , UpdateProduct , previewImages , deleteImage}


    function UpdateProduct(data : ProductCreateFormProps){
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
    function setInitialValues(data : ProductUpdateInitialProps ){
        setValue("brand",data.brand)
        setValue("name",data.name)
        setValue("price",data.price)
        setValue("quantity",data.quantity)
        setValue("description",data.description)
        setValue("niche",data.niche)
        setValue("country",data.country)
        setValue("city",data.city)

        setPreviewServerImages(data.previews)

    }
    function getData() : ProductUpdateInitialProps {
        return {
            previews : [shoe_image_1 , shoe_image_2 , shoe_image_3 , shoe_image ],
            name : "air pro max",
            price : "500",
            quantity : "5",
            description : "this is the type of project that we would like to be working on all the times",
            niche : "dressing",
            brand : "koala",
            country : "cameroon",
            city : "Douala" 
        }
    }
}