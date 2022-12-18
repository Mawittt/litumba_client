import AssetTopController from "../../components/AssetTopController/AssetTopController";
import Business from "../../components/Business/Business";
import useBusinesses from "../../pageUtils/useBusiness";



export default function Businesses() {
    const { businesses , searchBusiness } = useBusinesses()
    return (
        <div className="py-4 px-2">
            <AssetTopController searchFunction={searchBusiness} />
            <div>
                {
                    businesses.map(business => <Business key={business._id} {...business} />)
                }
            </div>
        </div>
    )
}