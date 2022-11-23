import Button from "../Button/Button"
import useProductServiceToggle from "./useProductServiceToggle"




export default function ProductServiceToggle(){
    const {isProducts , isServices , showProducts , showServices} = useProductServiceToggle()
    return (
        <div className="flex my-6 justify-center gap-4">
            <Button label="Products" colored={isProducts} full />
            <Button label="Services" colored={isServices} full />
        </div>
    )
}