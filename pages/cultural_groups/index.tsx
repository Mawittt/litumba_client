import AssetTopController from "../../components/AssetTopController/AssetTopController";
import CulturalGroup from "../../components/CulturalGroup/CulturalGroup";
import useCulturalGroups from "../../pageUtils/useCulturalGroups";





export default function(){
    const {groups} = useCulturalGroups()
    return (
        <div className="flex flex-col gap-4 py-4 px-2">
            <AssetTopController />
            <div className="flex flex-col gap-4">
                {groups.map(group=><CulturalGroup key={group._id}  {...group}/>)}
            </div>
        </div>
    )
}