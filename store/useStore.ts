import {useSelector, useDispatch} from "react-redux"
import { selectAuthState, setAuthState } from "./slice"


export default function useStore(){
    const dispatch = useDispatch()


    return {
        authState : useSelector(selectAuthState),
        setAuthState : (state : any) => { 
            dispatch(setAuthState(state))
        }
        // lets try something
    }
}