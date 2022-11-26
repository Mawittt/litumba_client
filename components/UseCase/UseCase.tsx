import Image from "next/image"
import { UseCaseProps } from "../../types/types"
import useUseCase from "./useUseCase"




export default function UseCase(props : UseCaseProps){
    const {useCase} = useUseCase(props)
    return (
        <div className="grid grid-cols-[minmax(0px,230px)_auto] shadow-comp_lg rounded-sm py-2 px-2">
            <div className="relative w-full min-w[150px] aspect-square box-border">
                <Image src={useCase.image} fill alt="useCase image" className="object-cover" />
            </div>
            <div className="w-full px-2">
                <h3 className="font-bold ">{useCase.title}</h3>
                <p>{useCase.description}</p>
            </div>
        </div>
    )
}