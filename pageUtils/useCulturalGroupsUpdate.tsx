import { useForm } from "react-hook-form"
import { CulturalGroupsUpdateFormProps, CulturalGroupsUpdateInitialValuesProps } from "../types/types"
import {useState , useEffect , useRef} from "react"
import { group_avatar } from "../assets/avatars"
import { group_image_1 } from "../assets/images"




export default function useCulturalGroupsUpdate(){
    const [profile, setProfile] = useState<string>("")
    const [cover, setCover] = useState<string>("")
    const profileFromServer = useRef<string>("")
    const coverFromServer = useRef<string>("")
    const {register, handleSubmit, formState : {errors} , watch , setValue} = useForm<CulturalGroupsUpdateFormProps>()

    useEffect(()=>{
        handleCover(watch("cover"))
        handleProfile(watch("profile"))
    },[watch("profile"), watch("cover")])

    useEffect(()=>{
        setInitialValues(getData())
    },[])

    return {register , handleSubmit, errors , updateCulturalGroup , cover , profile , watch}

    function updateCulturalGroup(data : CulturalGroupsUpdateFormProps){
        console.log(data)
        console.log(profileFromServer)
        console.log(coverFromServer)
    }
    function handleProfile(fileList : FileList){
        if(!fileList.length) return 
        const fileReader = new FileReader()
        fileReader.onload = ()=>{
            if(!fileReader.result) return
            setProfile(fileReader.result.toString())
            profileFromServer.current = ''
        }
        fileReader.readAsDataURL(fileList[0])
    }
    function handleCover(fileList : FileList){
        if(!fileList.length) return 
        const fileReader = new FileReader()
        fileReader.onload = ()=>{
            if(!fileReader.result) return
            setCover(fileReader.result.toString())
            coverFromServer.current = ""
        }
        fileReader.readAsDataURL(fileList[0])
    }
    function setInitialValues(data : CulturalGroupsUpdateInitialValuesProps ){
        setValue("city",data.city)
        setValue("country",data.country)
        setValue("name",data.name)
        setValue("description",data.description)
        setValue("members",data.members)
        setValue("profile",watch("profile"))
        setValue("cover",watch("cover"))
        setProfile(data.profile)
        setCover(data.cover)
        profileFromServer.current = data.profile
        coverFromServer.current = data.cover
    }
    function getData(): CulturalGroupsUpdateInitialValuesProps{
        return{
            city : "douala",
            country : "cameroon",
            name : 'mockpe',
            description  : "this is the generative principle",
            members : 85,
            profile : group_avatar,
            cover : group_image_1
        }
    }

}