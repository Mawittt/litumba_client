import { brand_avatar_1, brand_avatar_2 } from "../../assets/avatars"
import useStore from "../../store/useStore"
import { MyBusinessProps } from "../../types/types"



export default function useMyBusinesses({ businesses }: { businesses: MyBusinessProps[] }) {
    return { businesses }
}