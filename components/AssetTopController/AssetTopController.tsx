import { CreateIcon, FilterIcon, SearchIcon } from "../../assets/icons"
import { AssetTopControllerProps, TopAssetsSearchFormProps } from "../../types/types"
import { cn } from "../../utils/fn"
import useAssetTopController from "./useAssetTopController"






export default function AssetTopController(props: AssetTopControllerProps) {
    const { openCreate, openFilters, isGroups, isLitumbaHub, register, handleSubmit, search } = useAssetTopController(props)
    return (
        <div className="py-4 px-2 flex flex-col items-center gap-6 shadow-comp_lg rounded-lg">
            <form className="flex gap-4 items-center w-full" onSubmit={handleSubmit(search)}>
                <input type="text" className="text-input" {...register("searchString")} />
                <SearchIcon onClick={handleSubmit(search)} />
            </form>
            <div className="flex gap-6 text-blue-500 w-full justify-center max-[260px]:gap-1">
                <div className={cn("flex border-solid border-blue-500 border-[1.5px] rounded-full px-2 py-1 gap-2 cursor-pointer", isGroups() ? "hidden" : "")} onClick={openFilters}>
                    <div className="h-[24px]">
                        <FilterIcon />
                    </div>
                    <div>
                        Filters
                    </div>
                </div>
                <div className={cn("flex border-solid border-blue-500 border-[1.5px] rounded-full px-2 py-1 gap-2 cursor-pointer", isLitumbaHub() ? "hidden" : "")} onClick={openCreate}>
                    <div className="h-[24px]">
                        <CreateIcon />
                    </div>
                    <div>
                        Create
                    </div>
                </div>
            </div>
        </div>
    )
}