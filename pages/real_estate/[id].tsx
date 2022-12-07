import { EditIcon, LikeIcon, LocationIcon } from "../../assets/icons"
import Button from "../../components/Button/Button"
import OtherRealEstate from "../../components/OtherRealEstate/OtherRealEstate"
import ProductPreviewer from "../../components/ProductPreviewer/ProductPreviewer"
import useRealEstateDetails from "../../pageUtils/useRealEstateDetails"
import { cn } from "../../utils/fn"








export default function ProductDetail() {

    const { details, otherRealEstate, openBrand, openConversation, goBack ,openRealEstateEditor , self } = useRealEstateDetails()

    return (
        <div className="pb-6">
            <ProductPreviewer selectedImage={details.selectedPreview} allImages={details.previews} />
            <div className="gap-4 flex flex-col w-full py-4 px-2">
                {self ?
                    <div className="flex justify-end">
                        <EditIcon onClick={openRealEstateEditor}/>
                    </div> :
                    <div className="flex justify-between w-full items-center">
                        <Button label="Contact" onClick={openConversation} className="cursor_pointer" />
                        <LikeIcon />
                    </div >
                }
                <div className="flex flex-col gap-2">
                    <h3 className="font-bold">{details.name}</h3>
                    <p>{details.description}</p>
                </div>
                <h3 className="font-bold text-blue-500">{details.price}</h3>
                <div className='flex translate-x-[-5px]'>
                    <div className='h-[24px]'>
                        <LocationIcon />
                    </div>
                    <div>{details.location}</div>
                </div>
                <div>
                    <span>Remaining samples: </span> <strong>{details.amount}</strong>
                </div>
                <div className="flex items-center gap-2">
                    <div>
                        Available
                    </div>
                    <div className={
                        cn(
                            "w-4 h-4 rounded-full bg-red-500",
                            details.available ? "bg-green-500" : "bg-red-500"
                        )
                    }></div>
                </div>
            </div>
            <div className="gap-4 flex flex-col w-full py-4 px-2">
                <h3><strong>Other products from brand</strong></h3>
                <div className="flex flex-col gap-2">
                    {otherRealEstate.map(product => <OtherRealEstate key={product._id} {...product} />)}
                </div>
            </div>
            <div className="flex flex-col gap-2 px-2">
                <Button label="Go to brand" full onClick={openBrand} />
                <Button label="Go back" full onClick={goBack} />
            </div>
        </div>
    )
}