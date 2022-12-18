import { useForm } from "react-hook-form"
import { CulturalGroupsCreateFormProps } from "../types/types"
import {useState , useEffect} from "react"




export default function useCulturalGroupsCreate(){
    const [profile, setProfile] = useState<string>()
    const [cover, setCover] = useState<string>()
    const {register, handleSubmit, formState : {errors} , watch} = useForm<CulturalGroupsCreateFormProps>()

    useEffect(()=>{
        handleCover(watch("cover"))
        handleProfile(watch("profile"))
    },[watch("profile"), watch("cover")])

    return {register , handleSubmit, errors , createCulturalGroup , cover , profile}

    function createCulturalGroup(data : CulturalGroupsCreateFormProps){
        console.log(data)
    }
    function handleProfile(fileList : FileList){
        if(!fileList.length) return 
        const fileReader = new FileReader()
        fileReader.onload = ()=>{
            if(!fileReader.result) return
            setProfile(fileReader.result.toString())
        }
        fileReader.readAsDataURL(fileList[0])
    }
    function handleCover(fileList : FileList){
        if(!fileList.length) return 
        const fileReader = new FileReader()
        fileReader.onload = ()=>{
            if(!fileReader.result) return
            setCover(fileReader.result.toString())
        }
        fileReader.readAsDataURL(fileList[0])
    }
}