import Image from "next/image"
import { avatar_1, avatar_2, avatar_3, brand_avatar_1, brand_avatar_2, brand_avatar_3, group_avatar } from "../assets/avatars"
import { AddImageIcon, BackIcon, BusinessesIcon, CommentsIcon, ContactIcon, CreateIcon, FilterIcon, HomeIcon, JobsIcon, LeftArrowIcon, LikeIcon, LocationIcon, MarketPlaceIcon, MenuIcon, MessagesIcon , MoreIcon, NotificationIcon, RealEstateIcon, RightIcon, SearchIcon, SettingsIcon, StarIcon } from "../assets/icons"
import { business_image_1, consulting_image_1, consulting_image_2, consulting_image_3, group_image_1, image_1, image_3, image_31, person_cover_image, post_add_asset_icon, post_add_image_icon, post_add_video_icon, profile_image_for_background, realEstate_1, realEstate_2, realEstate_3, shoe_image, shoe_image_1, shoe_image_2, sign_up_names_image } from "../assets/images"
import { logo_dark, logo_light } from "../assets/logos"
import FooterNav from "../components/FooterNav/FooterNav"
import ProfilePreview from "../components/ProfilePreview/ProfilePreview"
import TopNavBar from "../components/TopNavBar/TopNavBar"


export default function test(){
    function click(){
        console.log("clicked")
    }
    function click2(){
        console.log("clicked")
    }
    function homeClick(){
        console.log("clicked")
    }
    return(
        <>
            <div className=" w-[100vw] h-[100vh] flex justify-center p-10">
                
                <ProfilePreview />
                {/* <TopNavBar /> */}
                {/* <FooterNav /> */}
                {/* <Image src={business_image_1} alt="business_image_1"/>                
                <Image src={consulting_image_1} alt="consulting_image_1"/>                
                <Image src={consulting_image_2} alt="consulting_image_1"/>                
                <Image src={consulting_image_3} alt="consulting_image_1"/>                
                <Image src={group_image_1} alt="consulting_image_1"/>                
                <Image src={image_1} alt="consulting_image_1"/>                
                <Image src={image_3} alt="consulting_image_1"/>                
                <Image src={image_31} alt="consulting_image_1"/>                
                <Image src={person_cover_image} alt="consulting_image_1"/>                
                <Image src={post_add_asset_icon} alt="consulting_image_1"/>                
                <Image src={post_add_image_icon} alt="consulting_image_1"/>                
                <Image src={post_add_video_icon} alt="consulting_image_1"/>                
                <Image src={profile_image_for_background} alt="consulting_image_1"/>      
                <Image src={realEstate_1} alt="consulting_image_1"/>      
                <Image src={realEstate_2} alt="consulting_image_1"/>      
                <Image src={realEstate_3} alt="consulting_image_1"/>      
                <Image src={shoe_image} alt="consulting_image_1"/>      
                <Image src={shoe_image_1} alt="consulting_image_1"/>      
                <Image src={shoe_image_2} alt="consulting_image_1"/>      
                <Image src={sign_up_names_image} alt="consulting_image_1"/>       */}
                {/* <Image src={logo_light} alt="logo Light"/> */}
                {/* <Image src={logo_dark} alt="logo dark"/> */}
            </div>
            {/* <HomeIcon onClick={homeClick}/> */}
            {/* <Image src={avatar_1} alt={"avatar 1"} priority/> */}
            {/* <Image src={avatar_2} alt={"avatar 2"} /> */}
            {/* <Image src={avatar_3} alt={"avatar 3"} /> */}
            {/* <Image src={brand_avatar_1} alt={"brand avatar 1"} /> */}
            {/* <Image src={brand_avatar_2} alt={"brand avatar 2"} /> */}
            {/* <Image src={brand_avatar_3} alt={"brand avatar 3"} /> */}
            {/* <Image src={group_avatar} alt={"group avatar"} /> */}
            {/* <JobsIcon  onClick={click}></JobsIcon> */}
            {/* <MarketPlaceIcon selected onClick={click}/> */}
            {/* <BusinessesIcon selected onClick={click}/> */}
            {/* <RealEstateIcon selected onClick={click}/> */}
            {/* <CulturalGroups selected onClick={click}/> */}
            {/* <LitumbaHub selected onClick={click}/> */}
            {/* <MoreIcon selected onClick={click}/> */}
            {/* <MenuIcon selected onClick={click}/> */}
            {/* <LikeIcon selected onClick={click}/> */}
            {/* <CommentsIcon onClick={click}/> */}
            {/* <NotificationIcon selected onClick={click2}/> */}
            {/* <MessagesIcon  onClick={click}/> */}
            {/* <SettingsIcon selected onClick={click}/> */}
            {/* <SearchIcon onClick={click}/> */}
            {/* <FilterIcon onClick={click} /> */}
            {/* <CreateIcon onClick={click}/> */}
            {/* <LocationIcon onClick={click}/> */}
            {/* <ContactIcon onClick={click}/> */}
            {/* <StarIcon onClick={click}/> */}
            {/* <AddImageIcon onClick={click}/> */}
            {/* <LeftArrowIcon onClick={click}/> */}
            {/* <RightIcon onClick={click}/> */}
            {/* <BackIcon onClick={click}/> */}
          
        </>
    )
}

