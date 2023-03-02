import { EditIcon, LikeIcon, LocationIcon } from "../../../assets/icons"
import Loader from "../../../assets/Loader"
import Button from "../../../components/Button/Button"
import OtherProduct from "../../../components/OtherProduct/OtherProduct"
import ProductPreviewer from "../../../components/ProductPreviewer/ProductPreviewer"
import useProductDetails from "../../../pageUtils/useProductDetails"
import { cn } from "../../../utils/fn"







export default function ProductDetail() {

    const { details, isLoading, otherProducts, openBrand, openConversation, goBack, openBusinessEditor, self } = useProductDetails()

    return (
        <div className="my-6 mx-4 rounded-lg overflow-hidden bg-white" key={details._id} id="product-container">
            {
                isLoading ? <div className="flex flex-col items-center mt-6">
                    <Loader />
                    <p className="mt-4">Loading Product</p>
                </div> :
                    <>
                        <ProductPreviewer selectedImage={details.selectedPreview} allImages={details.previews} />
                        <div className="gap-4 flex flex-col w-full py-4 px-4">
                            {self ?
                                <div className="flex justify-end">
                                    <EditIcon onClick={openBusinessEditor} />
                                </div> :
                                <div className="flex justify-between w-full items-center">
                                    <Button label="Contact" onClick={openConversation} className="cursor_pointer" />
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
                                {otherProducts.map(product => <OtherProduct key={product._id} {...product} />)}
                            </div>
                        </div>
                        <div className="flex flex-col gap-2 px-2">
                            <Button label="Go to author" full onClick={openBrand} />
                            <Button label="Go back" full onClick={goBack} />
                        </div>
                    </>}
        </div>
    )
}