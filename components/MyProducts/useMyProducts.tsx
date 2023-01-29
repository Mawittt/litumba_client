import { shoe_image } from '../../assets/images'
import { MyProductProps } from '../../types/types'

const useMyProducts = ({ products }: { products: MyProductProps[] }) => {

    return { products }
}

export default useMyProducts