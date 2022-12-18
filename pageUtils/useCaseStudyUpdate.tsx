import { useForm } from "react-hook-form"
import { CaseStudyUpdateFormProps, CaseStudyUpdateInitialStateProps } from "../types/types"
import { useState , useEffect } from "react"
import { consulting_image_1 } from "../assets/images"


export default function useCaseStudyUpdate(){
    const [preview, setPreview] = useState<string>()
    const {register, handleSubmit , formState : {errors} , watch , setValue} = useForm<CaseStudyUpdateFormProps>()
    useEffect(()=>{
        handlePreview(watch("preview"))
    },[watch("preview")])
    useEffect(()=>{
        setInitialValues(getData())
    },[])

    
    return {register , handleSubmit, errors , watch , updateCaseStudy , preview}


    function updateCaseStudy(data : CaseStudyUpdateFormProps){
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
    function setInitialValues(data : CaseStudyUpdateInitialStateProps){
        setValue("title", data.title)
        setValue("description",data.description)
        
        setPreview(data.preview)
    }

    function getData(): CaseStudyUpdateInitialStateProps{
        return {
            preview : consulting_image_1,
            title : "the odein project",
            description :  "this is a project where we had alot of things to do and say about the odein",
            _id : 5
        }
    }
}