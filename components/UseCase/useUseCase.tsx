import { UseCaseProps } from "../../types/types";



export default function useUseCase ({...useCase} : UseCaseProps){
    return {useCase}
}