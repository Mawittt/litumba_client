import {useSelector, useDispatch} from "react-redux"
import { selectAuthState, setAuthState , setUser , selectUser} from "./slice"


export default function useStore(){
    const dispatch = useDispatch()


    return {
        authState : useSelector(selectAuthState),
        setAuthState : (state : any) => { 
            dispatch(setAuthState(state))
        },
        user : useSelector(selectUser),
        setUser: (state : any)=>{
            dispatch(setUser(state))
        }
        // lets try something
    }
}