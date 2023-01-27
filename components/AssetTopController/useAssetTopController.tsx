import { useEffect, useRef } from "react"
import { useForm } from "react-hook-form"
import { ROUTES } from "../../assets/constant"
import { AssetTopControllerProps, TopAssetsSearchFormProps } from "../../types/types"
import { useNavigate } from "../../utils/hooks"





export default function useAssetTopController({ searchFunction }: AssetTopControllerProps) {

    const { navigate, router } = useNavigate()
    const { register, handleSubmit, watch } = useForm({
        defaultValues: {
            searchString: ''
        }
    })
    const loaded = useRef(false)


    useEffect(() => {
        const timeOut = setTimeout(() => {
            const data = {
                searchString: watch('searchString') || " "
            }
            if (loaded.current) searchFunction?.(data)
            loaded.current = true

        }, 700);
        return () => clearTimeout(timeOut)
    }, [watch('searchString')])

    return { openCreate, openFilters, isGroups, isLitumbaHub, register, handleSubmit, search, }

    function openFilters() {
        navigate(router.pathname + "/filters")
    }
    function openCreate() {
        navigate(router.pathname + "/create")
    }
    function isGroups() {
        return router.pathname.includes(ROUTES.cultural_groups.index)
    }
    function isLitumbaHub() {
        return router.pathname.includes(ROUTES.litumba_hub.index)
    }
    function search(data: TopAssetsSearchFormProps) {
        searchFunction?.(data)
    }
}