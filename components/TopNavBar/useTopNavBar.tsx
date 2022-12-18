import { avatar_1 } from "../../assets/avatars"
import { ROUTES } from "../../assets/constant"
import { useMenuToggle, useNavigate, usePage } from "../../utils/hooks"


export default function useTopNavBar(){

    const image = avatar_1
    const {page } = usePage()
    const {openMenu} = useMenuToggle()
    const route = getRoute()
    const {router} = useNavigate()

    return {openProfile , openMenu , isBack , image , route , goBack }

    function openProfile(){
        console.log("opening profile")
    }
    function isBack(){
        if(router.pathname === ROUTES.home) return false
        if(router.pathname === ROUTES.jobs.index) return false
        if(router.pathname === ROUTES.businesses.index) return false
        if(router.pathname === ROUTES.market_place.products.index) return false
        if(router.pathname === ROUTES.market_place.services.index) return false
        if(router.pathname === ROUTES.real_estate.index) return false
        if(router.pathname === ROUTES.cultural_groups.index) return false
        if(router.pathname === ROUTES.litumba_hub.index) return false
        return true
    }
    function goBack(){
        router.back()
    }
    function getRoute(){

        if(page === ROUTES.home.replace('/',"")) return "Home"
        else if(page === ROUTES.jobs.index.replace("/","")) return "Jobs"
        else if(page === ROUTES.jobs.filters.replace("/","")) return "Jobs/Filters"
        else if(page === ROUTES.jobs.create.replace("/","")) return "Jobs/Create"
        else if(page === ROUTES.jobs.update.replace("/","")) return "Jobs/Update"
        else if(page.includes(ROUTES.jobs.index.replace("/",""))) return "Jobs/Details"
        else if(page === (ROUTES.businesses.index.replace("/",""))) return "Businesses"
        else if(page === (ROUTES.businesses.filters.replace("/",""))) return "Businesses/Filters"
        else if(page === (ROUTES.businesses.create.replace("/",""))) return "Businesses/Create"
        else if(page === (ROUTES.businesses.update.replace("/",""))) return "Businesses/Update"
        else if(page.includes(ROUTES.businesses.index.replace("/",""))) return "Businesses/Details"
        else if(page === (ROUTES.market_place.products.index.replace("/",""))) return "M.P/Products"
        else if(page === (ROUTES.market_place.products.filters.replace("/",""))) return "Products/Filters"
        else if(page === (ROUTES.market_place.products.create.replace("/",""))) return "Products/Create"
        else if(page === (ROUTES.market_place.products.update.replace("/",""))) return "Products/Update"
        else if(page.includes(ROUTES.market_place.products.index.replace("/",""))) return "Product/Details"
        else if(page === (ROUTES.market_place.services.index.replace("/",""))) return "M.P/Services"
        else if(page === (ROUTES.market_place.services.filters.replace("/",""))) return "Services/Filters"
        else if(page === (ROUTES.market_place.services.create.replace("/",""))) return "Services/Create"
        else if(page === (ROUTES.market_place.services.update.replace("/",""))) return "Services/Update"
        else if(page.includes(ROUTES.market_place.services.caseStudy.update.replace("/",""))) return "Case study/Update"
        else if(page.includes(ROUTES.market_place.services.caseStudy.index.replace("/",""))) return "Case study"
        else if(page.includes(ROUTES.market_place.services.index.replace("/",""))) return "Services/Details"
        else if(page === (ROUTES.cultural_groups.index.replace("/",""))) return "Cultural Groups"
        else if(page === (ROUTES.cultural_groups.filters.replace("/",""))) return "Businesses/Filters"
        else if(page === (ROUTES.cultural_groups.create.replace("/",""))) return "Group/Create"
        else if(page === (ROUTES.cultural_groups.update.replace("/",""))) return "Businesses/Update"
        else if(page.includes(ROUTES.cultural_groups.index.replace("/",""))) return "Group/Details"
        else if(page === (ROUTES.real_estate.index.replace("/",""))) return "Real Estate"
        else if(page === (ROUTES.real_estate.filters.replace("/",""))) return "R.E /Filters"
        else if(page === (ROUTES.real_estate.create.replace("/",""))) return "R.E /Create"
        else if(page === (ROUTES.real_estate.update.replace("/",""))) return "R.E /Update"
        else if(page.includes(ROUTES.real_estate.index.replace("/",""))) return "R.E /Details"
        else if(page.includes(ROUTES.post_details.replace("/",""))) return "Post/Comments"
        else if(page.includes(ROUTES.notification.replace("/",""))) return "Notifications"
        else if(page.includes(ROUTES.conversations.replace("/",""))) return "Conversations"
        else if(page.includes(ROUTES.settings.replace("/",""))) return "Settings"
        else if(page.includes(ROUTES.followers.replace("/",""))) return "Followers"
        else if(page.includes(ROUTES.following.replace("/",""))) return "Following"
        else return page
    }
}