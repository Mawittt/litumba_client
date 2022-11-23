import AssetTopController from "../../components/AssetTopController/AssetTopController";
import Business from "../../components/Business/Business";
import useBusinesses from "../../pageUtils/useBusiness";



export default function Businesses() {
    const { businesses } = useBusinesses()
    return (
        <div>
            <AssetTopController />
            <div>
                {
                    businesses.map(business => <Business key={business._id} {...business} />)
                }
            </div>
        </div>
    )
}