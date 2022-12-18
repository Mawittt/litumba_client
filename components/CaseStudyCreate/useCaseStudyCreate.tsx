import { useForm } from "react-hook-form"
import { CaseStudyUpdateFormProps, CaseStudyUpdateInitialStateProps } from "../../types/types"
import { useState , useEffect } from "react"
import { consulting_image_1 } from "../../assets/images"


export default function useCaseStudyCreate(){
    const [preview, setPreview] = useState<string>()
    const {register, handleSubmit , formState : {errors} , watch } = useForm<CaseStudyUpdateFormProps>()
    useEffect(()=>{
        handlePreview(watch("preview"))
    },[watch("preview")])
 

    
    return {register , handleSubmit, errors , watch , createCaseStudy , preview}


    function createCaseStudy(data : CaseStudyUpdateFormProps){
        console.log(data)
    }
    function handlePreview(data : FileList){
        if(!data.length) return
        const fileReader = new FileReader()
        fileReader.onload = ()=>{
            setPreview(fileReader.result?.toString())
        }
        fileReader.readAsDataURL(data[0])
    }
}