import Loader from "../../assets/Loader";
import AssetTopController from "../../components/AssetTopController/AssetTopController";
import CulturalGroup from "../../components/CulturalGroup/CulturalGroup";
import useCulturalGroups from "../../pageUtils/useCulturalGroups";
import { cn } from "../../utils/fn";





export default function CulturalGroups() {
    const { isSuccess, isRefetching, isLoading, groups, searchGroup, canNext, canPrev, openNext, openPrev } = useCulturalGroups()
    return (
        <div className="flex flex-col gap-4 px-2 my-6 mx-4">
            <AssetTopController searchFunction={searchGroup} />
            {isSuccess && isRefetching && <div className="flex justify-center"><Loader /></div>}
            <div className="flex flex-col gap-4">
                {isLoading ? <div className="flex flex-col items-center mt-6 ">
                    <Loader />
                    <p className="mt-2">Loading Cultural Groups</p>
                </div> : groups.map(group => <CulturalGroup key={group.id}  {...group} />)}
            </div>
            {!!groups.length && <div className="flex justify-center shadow-comp_lg bg-white">
                <div onClick={openPrev} className={cn("m-4 w-[50px] aspect-square rounded-full text-white flex justify-center items-center shadow-icon", canPrev() ? "bg-blue-500 cursor-pointer" : "bg-blue-300 cursor-not-allowed")}>Prev</div>
                <div onClick={openNext} className={cn("m-4 w-[50px] aspect-square rounded-full text-white flex justify-center items-center shadow-icon", canNext() ? "bg-blue-500 cursor-pointer" : "bg-blue-300 cursor-not-allowed")}>Next</div>
            </div>}
        </div>
    )
}