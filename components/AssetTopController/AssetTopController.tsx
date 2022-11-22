import { CreateIcon, FilterIcon, SearchIcon } from "../../assets/icons"
import useAssetTopController from "./useAssetTopController"






export default function AssetTopController() {
    const {} = useAssetTopController()
    return (
        <div className="py-4 px-2 flex flex-col items-center gap-6 shadow-comp_lg rounded-lg">
            <div className="flex gap-4 items-center w-full">
                <input type="text" className="text-input" />
                <SearchIcon />
            </div>
            <div className="flex gap-6 text-blue-500">
                <div className="flex border-solid border-blue-500 border-[1.5px] rounded-full px-2 py-1 gap-2">
                    <div className="h-[24px]">
                        <FilterIcon />
                    </div>
                    <div>
                        Filters
                    </div>
                </div>
                <div className="flex border-solid border-blue-500 border-[1.5px] rounded-full px-2 py-1 gap-2">
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