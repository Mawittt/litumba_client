import { shoe_image } from '../../assets/images'
import { MyProductProps } from '../../types/types'

const useMyProducts = () => {
    const products: MyProductProps[] = [
        {
            image: shoe_image ,
            name: "air max 13",
            interested: 5
        },
    ]

    const more = true
    return { products , more }
}

export default useMyProducts