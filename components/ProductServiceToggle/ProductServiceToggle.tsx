import Button from "../Button/Button"
import useProductServiceToggle from "./useProductServiceToggle"




export default function ProductServiceToggle(){
    const {isProducts , isServices , showProducts , showServices} = useProductServiceToggle()
    return (
        <div className="flex justify-center gap-4 py-6 px-4 shadow-comp_lg rounded-lg" >
            <Button label="Products" colored={isProducts} full onClick={showProducts}/>
            <Button label="Services" colored={isServices} full onClick={showServices}/>
        </div>
    )
}