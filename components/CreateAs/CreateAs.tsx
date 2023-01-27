import Image from "next/image"
import { SelectionArrowIcon } from "../../assets/icons"
import Loader from "../../assets/Loader"
import { CreateAsProps } from "../../types/types"
import { cn } from "../../utils/fn"
import useCreateAs from "./useCreateAs"


export default function CreateAs(props: CreateAsProps) {
    const { isLoading, currentAuthor, otherAuthors, toggleViewOthers, viewOthers, updateCurrentAuthor, } = useCreateAs(props)
    return (
        <div className=" relative">
            <div>
                <h3 className="font-bold">Create as</h3>
                {isLoading ? <div><Loader /></div> : currentAuthor &&
                    <div className="flex items-center mt-1" onClick={toggleViewOthers}>
                        <Image src={currentAuthor.avatar} width={35} height={35} alt="current author" className={cn(currentAuthor.isBusiness ? "rounded-lg" : "rounded-full")} />
                        <SelectionArrowIcon className="ml-2" />
                    </div>}
            </div>
            {viewOthers &&
                <div className=" w-full bg-white rounded-lg shadow-comp_lg mx-2 my-2 flex flex-col justify-end overflow-hidden">
                    {otherAuthors.current.map((Author, index) => <div key={Author.id} className="flex items-center my-1" onClick={() => updateCurrentAuthor(index)}>
                        <Image src={Author.avatar} width={35} height={35} alt="current author" className={cn(Author.isBusiness ? "rounded-lg" : "rounded-full")} />
                        <p className="ml-2">{Author.name}</p>
                    </div>)}
                </div>}
        </div>
    )
}