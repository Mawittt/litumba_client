import { IconProps } from "../types/types"
import { cn } from "../utils/fn"


const primaryColor = "#3C82F6"

export const HomeIcon = ({ selected, onClick, className }: IconProps) => <svg onClick={onClick} className={className} width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 11H1L1.5 10.5L12 1L23 11H20V18.5H14.0769H10H4V11Z" fill={cn(selected ? primaryColor : "white")} />
    <path d="M1 11L0.46967 10.4697C0.255171 10.6842 0.191005 11.0068 0.30709 11.287C0.423176 11.5673 0.696653 11.75 1 11.75L1 11ZM4 11H4.75C4.75 10.5858 4.41421 10.25 4 10.25V11ZM4 18.5H3.25C3.25 18.9142 3.58579 19.25 4 19.25V18.5ZM20 18.5V19.25C20.4142 19.25 20.75 18.9142 20.75 18.5H20ZM20 11V10.25C19.5858 10.25 19.25 10.5858 19.25 11H20ZM23 11V11.75C23.3099 11.75 23.5878 11.5595 23.6995 11.2704C23.8113 10.9814 23.7338 10.6535 23.5045 10.445L23 11ZM12 1L12.5045 0.445045C12.2189 0.185444 11.783 0.184926 11.4968 0.443848L12 1ZM14 13L14.7499 12.9895C14.7442 12.5794 14.4101 12.25 14 12.25V13ZM10 13V12.25C9.58579 12.25 9.25 12.5858 9.25 13H10ZM1.5 10.5L0.996815 9.94385L0.98292 9.95642L0.96967 9.96967L1.5 10.5ZM1 11.75H4V10.25H1V11.75ZM3.25 11V18.5H4.75V11H3.25ZM20.75 18.5V11H19.25V18.5H20.75ZM20 11.75H23V10.25H20V11.75ZM23.5045 10.445L12.5045 0.445045L11.4955 1.55496L22.4955 11.555L23.5045 10.445ZM4 19.25H10V17.75H4V19.25ZM10 19.25H14.0769V17.75H10V19.25ZM14.0769 19.25H20V17.75H14.0769V19.25ZM14.8269 18.4895L14.7499 12.9895L13.2501 13.0105L13.327 18.5105L14.8269 18.4895ZM14 12.25H10V13.75H14V12.25ZM9.25 13V18.5H10.75V13H9.25ZM11.4968 0.443848L0.996815 9.94385L2.00318 11.0562L12.5032 1.55615L11.4968 0.443848ZM0.96967 9.96967L0.46967 10.4697L1.53033 11.5303L2.03033 11.0303L0.96967 9.96967Z" fill="#2F8CE9" />
</svg>

export const JobsIcon = ({ selected, onClick, className }: IconProps) => <svg onClick={onClick} className={className} width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7 5H3C2.46957 5 1.96086 5.21071 1.58579 5.58579C1.21071 5.96086 1 6.46957 1 7V17C1 17.5304 1.21071 18.0391 1.58579 18.4142C1.96086 18.7893 2.46957 19 3 19H19C19.5304 19 20.0391 18.7893 20.4142 18.4142C20.7893 18.0391 21 17.5304 21 17V7C21 6.46957 20.7893 5.96086 20.4142 5.58579C20.0391 5.21071 19.5304 5 19 5H15M7 5V1.6C7 1.44087 7.06321 1.28826 7.17574 1.17574C7.28826 1.06321 7.44087 1 7.6 1H14.4C14.5591 1 14.7117 1.06321 14.8243 1.17574C14.9368 1.28826 15 1.44087 15 1.6V5M7 5H15H7Z" fill={cn(selected ? primaryColor : "white")} />
    <path d="M7 5H3C2.46957 5 1.96086 5.21071 1.58579 5.58579C1.21071 5.96086 1 6.46957 1 7V17C1 17.5304 1.21071 18.0391 1.58579 18.4142C1.96086 18.7893 2.46957 19 3 19H19C19.5304 19 20.0391 18.7893 20.4142 18.4142C20.7893 18.0391 21 17.5304 21 17V7C21 6.46957 20.7893 5.96086 20.4142 5.58579C20.0391 5.21071 19.5304 5 19 5H15M7 5V1.6C7 1.44087 7.06321 1.28826 7.17574 1.17574C7.28826 1.06321 7.44087 1 7.6 1H14.4C14.5591 1 14.7117 1.06321 14.8243 1.17574C14.9368 1.28826 15 1.44087 15 1.6V5M7 5H15" stroke="#2F8CE9" strokeWidth="1.5" />
</svg>

export const MarketPlaceIcon = ({ selected, onClick, className }: IconProps) => <svg onClick={onClick} className={className} width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6.125 7.7785H11V1.547H6.929L6.125 7.7785Z" fill={cn(selected ? primaryColor : "white")} stroke="#2F8CE9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M6.929 1.547H3.571C3.34758 1.54706 3.13062 1.62193 2.95472 1.75968C2.77882 1.89743 2.65412 2.09011 2.6005 2.307L1.25 7.7785H6.125M11 7.7785C11 8.42496 10.7432 9.04495 10.2861 9.50207C9.82895 9.95919 9.20897 10.216 8.5625 10.216C7.91603 10.216 7.29605 9.95919 6.83893 9.50207C6.38181 9.04495 6.125 8.42496 6.125 7.7785M6.125 7.7785C6.125 8.42496 5.86819 9.04495 5.41107 9.50207C4.95395 9.95919 4.33397 10.216 3.6875 10.216C3.04103 10.216 2.42105 9.95919 1.96393 9.50207C1.50681 9.04495 1.25 8.42496 1.25 7.7785M15.875 7.7785H11V1.547H15.071L15.875 7.7785ZM15.071 1.547H18.429C18.6524 1.54706 18.8694 1.62193 19.0453 1.75968C19.2212 1.89743 19.3459 2.09011 19.3995 2.307L20.75 7.7785H15.875M11 7.7785C11 8.42496 11.2568 9.04495 11.7139 9.50207C12.171 9.95919 12.791 10.216 13.4375 10.216C14.084 10.216 14.704 9.95919 15.1611 9.50207C15.6182 9.04495 15.875 8.42496 15.875 7.7785M15.875 7.7785C15.875 8.42496 16.1318 9.04495 16.5889 9.50207C17.046 9.95919 17.666 10.216 18.3125 10.216C18.959 10.216 19.579 9.95919 20.0361 9.50207C20.4932 9.04495 20.75 8.42496 20.75 7.7785" fill={cn(selected ? primaryColor : "white")} />
    <path d="M6.929 1.547H3.571C3.34758 1.54706 3.13062 1.62193 2.95472 1.75968C2.77882 1.89743 2.65412 2.09011 2.6005 2.307L1.25 7.7785M1.25 7.7785H6.125M1.25 7.7785C1.25 8.42496 1.50681 9.04495 1.96393 9.50207C2.42105 9.95919 3.04103 10.216 3.6875 10.216C4.33397 10.216 4.95395 9.95919 5.41107 9.50207C5.86819 9.04495 6.125 8.42496 6.125 7.7785M6.125 7.7785C6.125 8.42496 6.38181 9.04495 6.83893 9.50207C7.29605 9.95919 7.91603 10.216 8.5625 10.216C9.20897 10.216 9.82895 9.95919 10.2861 9.50207C10.7432 9.04495 11 8.42496 11 7.7785M11 7.7785H15.875M11 7.7785V1.547H15.071M11 7.7785C11 8.42496 11.2568 9.04495 11.7139 9.50207C12.171 9.95919 12.791 10.216 13.4375 10.216C14.084 10.216 14.704 9.95919 15.1611 9.50207C15.6182 9.04495 15.875 8.42496 15.875 7.7785M15.875 7.7785L15.071 1.547M15.875 7.7785H20.75M15.875 7.7785C15.875 8.42496 16.1318 9.04495 16.5889 9.50207C17.046 9.95919 17.666 10.216 18.3125 10.216C18.959 10.216 19.579 9.95919 20.0361 9.50207C20.4932 9.04495 20.75 8.42496 20.75 7.7785M15.071 1.547H18.429C18.6524 1.54706 18.8694 1.62193 19.0453 1.75968C19.2212 1.89743 19.3459 2.09011 19.3995 2.307L20.75 7.7785" stroke="#2F8CE9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M2.6625 9.98849V17.4535C2.6625 17.7187 2.76786 17.9731 2.95539 18.1606C3.14293 18.3481 3.39728 18.4535 3.6625 18.4535H18.3375C18.6027 18.4535 18.8571 18.3481 19.0446 18.1606C19.2321 17.9731 19.3375 17.7187 19.3375 17.4535V9.98849" fill={cn(selected ? primaryColor : "white")} />
    <path d="M2.6625 9.98849V17.4535C2.6625 17.7187 2.76786 17.9731 2.95539 18.1606C3.14293 18.3481 3.39728 18.4535 3.6625 18.4535H18.3375C18.6027 18.4535 18.8571 18.3481 19.0446 18.1606C19.2321 17.9731 19.3375 17.7187 19.3375 17.4535V9.98849" stroke="#2F8CE9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
</svg>

export const BusinessesIcon = ({ selected, onClick, className }: IconProps) => <svg onClick={onClick} className={className} width="22" height="24" viewBox="0 0 22 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7.25 19.5V22.5ZM2.75 1.5H11.75C12.1478 1.5 12.5294 1.65804 12.8107 1.93934C13.092 2.22064 13.25 2.60218 13.25 3V22.3125C13.25 22.3622 13.2302 22.4099 13.1951 22.4451C13.1599 22.4802 13.1122 22.5 13.0625 22.5H1.25V3C1.25 2.60218 1.40804 2.22064 1.68934 1.93934C1.97064 1.65804 2.35218 1.5 2.75 1.5V1.5ZM14 9H19.25C19.6478 9 20.0294 9.15804 20.3107 9.43934C20.592 9.72064 20.75 10.1022 20.75 10.5V22.5H13.25V9.75C13.25 9.55109 13.329 9.36032 13.4697 9.21967C13.6103 9.07902 13.8011 9 14 9Z" fill={cn(selected ? primaryColor : "white")} />
    <path d="M7.25 19.5V22.5M2.75 1.5H11.75C12.1478 1.5 12.5294 1.65804 12.8107 1.93934C13.092 2.22064 13.25 2.60218 13.25 3V22.3125C13.25 22.3622 13.2302 22.4099 13.1951 22.4451C13.1599 22.4802 13.1122 22.5 13.0625 22.5H1.25V3C1.25 2.60218 1.40804 2.22064 1.68934 1.93934C1.97064 1.65804 2.35218 1.5 2.75 1.5V1.5ZM14 9H19.25C19.6478 9 20.0294 9.15804 20.3107 9.43934C20.592 9.72064 20.75 10.1022 20.75 10.5V22.5H13.25V9.75C13.25 9.55109 13.329 9.36032 13.4697 9.21967C13.6103 9.07902 13.8011 9 14 9Z" stroke="#2F8CE9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
</svg>

export const RealEstateIcon = ({ selected, onClick, className }: IconProps) => <svg onClick={onClick} className={className} width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1 20V2C1 2 1 1 2 1C3 1 3.5 2 3.5 2H17.5C17.5 2 19.5 2 19.5 3C19.5 4 17.5 4 17.5 4V16H3.5V20H1Z" fill={cn(selected ? primaryColor : "white")} />
    <path d="M3.5 16V20H1V2C1 2 1 1 2 1C3 1 3.5 2 3.5 2H17.5C17.5 2 19.5 2 19.5 3C19.5 4 17.5 4 17.5 4M3.5 16V4H17.5M3.5 16H17.5V4M7.5 12V9L10.5 7L13.5 9V12H11.5V10H9.5V12H7.5Z" stroke="#2F8CE9" strokeWidth="1.5" strokeLinejoin="round" />
</svg>

export const CulturalGroupsIcon = ({ selected, onClick, className }: IconProps) => <svg onClick={onClick} className={className} width="24" height="17" viewBox="0 0 24 17" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1 16H6.58499V13.3482C6.58499 12.6379 6.68898 11.9544 6.88109 11.3153C6.28525 10.8898 5.57495 10.6429 4.81236 10.6429C2.70685 10.6429 1 12.5257 1 14.8482V16Z" fill={cn(selected ? primaryColor : "white")} />
    <path d="M23 16V14.8482C23 12.5257 21.2931 10.6429 19.1876 10.6429C18.7193 10.6429 18.2706 10.736 17.8561 10.9065C18.1353 11.6597 18.2892 12.4841 18.2892 13.3482V16H23Z" fill={cn(selected ? primaryColor : "white")} />
    <path d="M6.58499 16H8.62472H15.521H18.2892V13.3482C18.2892 12.4841 18.1353 11.6597 17.8561 10.9065C16.9832 8.55185 14.8858 6.89286 12.4371 6.89286C9.84897 6.89286 7.65326 8.74613 6.88109 11.3153C6.68898 11.9544 6.58499 12.6379 6.58499 13.3482V16Z" fill={cn(selected ? primaryColor : "white")} />
    <path d="M21.6402 7.48214C21.6402 8.96148 20.553 10.1607 19.2119 10.1607C17.8708 10.1607 16.7837 8.96148 16.7837 7.48214C16.7837 6.00281 17.8708 4.80357 19.2119 4.80357C20.553 4.80357 21.6402 6.00281 21.6402 7.48214Z" fill={cn(selected ? primaryColor : "white")} />
    <path d="M14.8411 3.67857C14.8411 5.15791 13.7539 6.35714 12.4128 6.35714C11.0717 6.35714 9.98455 5.15791 9.98455 3.67857C9.98455 2.19924 11.0717 1 12.4128 1C13.7539 1 14.8411 2.19924 14.8411 3.67857Z" fill={cn(selected ? primaryColor : "white")} />
    <path d="M7.21634 7.48214C7.21634 8.96148 6.12917 10.1607 4.78808 10.1607C3.44699 10.1607 2.35982 8.96148 2.35982 7.48214C2.35982 6.00281 3.44699 4.80357 4.78808 4.80357C6.12917 4.80357 7.21634 6.00281 7.21634 7.48214Z" fill={cn(selected ? primaryColor : "white")} />
    <path d="M8.62472 16C5.64708 16 3.97764 16 1 16M8.62472 16H6.58499M8.62472 16H15.521M1 16V14.8482C1 12.5257 2.70685 10.6429 4.81236 10.6429C5.57495 10.6429 6.28525 10.8898 6.88109 11.3153M1 16H6.58499M23 16V14.8482C23 12.5257 21.2931 10.6429 19.1876 10.6429C18.7193 10.6429 18.2706 10.736 17.8561 10.9065M23 16H15.521M23 16H18.2892M15.521 16C15.4405 16 15.3753 15.928 15.3753 15.8393M15.521 16H18.2892M18.2892 16V13.3482C18.2892 12.4841 18.1353 11.6597 17.8561 10.9065M18.2892 16H6.58499M6.58499 16V13.3482C6.58499 12.6379 6.68898 11.9544 6.88109 11.3153M17.8561 10.9065C16.9832 8.55185 14.8858 6.89286 12.4371 6.89286C9.84897 6.89286 7.65326 8.74613 6.88109 11.3153M14.8411 3.67857C14.8411 5.15791 13.7539 6.35714 12.4128 6.35714C11.0717 6.35714 9.98455 5.15791 9.98455 3.67857C9.98455 2.19924 11.0717 1 12.4128 1C13.7539 1 14.8411 2.19924 14.8411 3.67857ZM7.21634 7.48214C7.21634 8.96148 6.12917 10.1607 4.78808 10.1607C3.44699 10.1607 2.35982 8.96148 2.35982 7.48214C2.35982 6.00281 3.44699 4.80357 4.78808 4.80357C6.12917 4.80357 7.21634 6.00281 7.21634 7.48214ZM21.6402 7.48214C21.6402 8.96148 20.553 10.1607 19.2119 10.1607C17.8708 10.1607 16.7837 8.96148 16.7837 7.48214C16.7837 6.00281 17.8708 4.80357 19.2119 4.80357C20.553 4.80357 21.6402 6.00281 21.6402 7.48214Z" stroke="#2F8CE9" strokeWidth="1.5" />
</svg>

export const LitumbaHubIcon = ({ selected, onClick, className }: IconProps) => <svg onClick={onClick} className={className} width="16" height="13" viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2.4 11.3929H6.95V12.75H2.4H0.25V0.25H2.15V11.1429V11.3929H2.4ZM10.15 6.80952V12.75H8.25V0.25H10.15V4.95238V5.20238H10.4H13.6H13.85V4.95238V0.25H15.75V12.75H13.85V6.80952V6.55952H13.6H10.4H10.15V6.80952Z" fill={cn(selected ? primaryColor : "white")} stroke="#2F8CE9" strokeWidth="1" />
</svg>

export const MoreIcon = ({ selected, onClick, className }: IconProps) => <svg className={className} onClick={onClick} width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g filter="url(#filter0_ddddd_28_103)" >
        <path d="M5.5 12C5.5 11.6022 5.65804 11.2206 5.93934 10.9393C6.22064 10.658 6.60218 10.5 7 10.5C7.39782 10.5 7.77936 10.658 8.06066 10.9393C8.34196 11.2206 8.5 11.6022 8.5 12C8.5 12.3978 8.34196 12.7794 8.06066 13.0607C7.77936 13.342 7.39782 13.5 7 13.5C6.60218 13.5 6.22064 13.342 5.93934 13.0607C5.65804 12.7794 5.5 12.3978 5.5 12ZM13.5 12C13.5 11.6022 13.658 11.2206 13.9393 10.9393C14.2206 10.658 14.6022 10.5 15 10.5C15.3978 10.5 15.7794 10.658 16.0607 10.9393C16.342 11.2206 16.5 11.6022 16.5 12C16.5 12.3978 16.342 12.7794 16.0607 13.0607C15.7794 13.342 15.3978 13.5 15 13.5C14.6022 13.5 14.2206 13.342 13.9393 13.0607C13.658 12.7794 13.5 12.3978 13.5 12ZM21.5 12C21.5 11.6022 21.658 11.2206 21.9393 10.9393C22.2206 10.658 22.6022 10.5 23 10.5C23.3978 10.5 23.7794 10.658 24.0607 10.9393C24.342 11.2206 24.5 11.6022 24.5 12C24.5 12.3978 24.342 12.7794 24.0607 13.0607C23.7794 13.342 23.3978 13.5 23 13.5C22.6022 13.5 22.2206 13.342 21.9393 13.0607C21.658 12.7794 21.5 12.3978 21.5 12Z" fill={selected ? primaryColor : "white"} stroke={primaryColor} />
    </g>
    <defs>
        <filter id="filter0_ddddd_28_103" x="-2" y="-1" width="34" height="42" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_28_103" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset dy="1" />
            <feGaussianBlur stdDeviation="1" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
            <feBlend mode="normal" in2="effect1_dropShadow_28_103" result="effect2_dropShadow_28_103" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset dy="3" />
            <feGaussianBlur stdDeviation="1.5" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.09 0" />
            <feBlend mode="normal" in2="effect2_dropShadow_28_103" result="effect3_dropShadow_28_103" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset dy="7" />
            <feGaussianBlur stdDeviation="2" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
            <feBlend mode="normal" in2="effect3_dropShadow_28_103" result="effect4_dropShadow_28_103" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset dy="12" />
            <feGaussianBlur stdDeviation="2.5" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.01 0" />
            <feBlend mode="normal" in2="effect4_dropShadow_28_103" result="effect5_dropShadow_28_103" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect5_dropShadow_28_103" result="shape" />
        </filter>
    </defs>
</svg>

export const MenuIcon = ({ selected, onClick, className }: IconProps) => <svg className={className} onClick={onClick} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M11 4.5C11 5.32843 11.6716 6 12.5 6C13.3284 6 14 5.32843 14 4.5C14 3.67157 13.3284 3 12.5 3C11.6716 3 11 3.67157 11 4.5Z" fill={selected ? primaryColor : "white"} stroke={primaryColor} />
    <path d="M11 12.5C11 13.3284 11.6716 14 12.5 14C13.3284 14 14 13.3284 14 12.5C14 11.6716 13.3284 11 12.5 11C11.6716 11 11 11.6716 11 12.5Z" fill={selected ? primaryColor : "white"} stroke={primaryColor} />
    <path d="M11 20.5C11 21.3284 11.6716 22 12.5 22C13.3284 22 14 21.3284 14 20.5C14 19.6716 13.3284 19 12.5 19C11.6716 19 11 19.6716 11 20.5Z" fill={selected ? primaryColor : "white"} stroke={primaryColor} />
</svg>

export const LikeIcon = ({ selected, onClick, className }: IconProps) => <svg onClick={onClick} className={className} width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0.75 10.0336H3.03641L3.10424 18.5649H0.75V10.0336ZM4.60429 18.5649L4.53128 9.38236L6.51668 2.19423L6.51682 2.19372C6.75048 1.34543 7.53226 0.750017 8.41406 0.750022L8.41685 0.750012C8.65598 0.749122 8.89275 0.797282 9.11254 0.891514C9.33232 0.985747 9.53044 1.12405 9.69466 1.29788L9.69578 1.29906C10.0331 1.6546 10.2052 2.11623 10.1821 2.60826C10.1821 2.60832 10.1821 2.60839 10.1821 2.60845L10.0415 5.48766L10.0031 6.27424H10.7906L16.4109 6.27424L16.4116 6.27424C16.5606 6.2741 16.7069 6.31376 16.8353 6.38911C17.5656 6.81747 18 7.57443 18 8.34611C18 8.84437 17.8364 9.32328 17.5402 9.71462L17.3105 10.0181L17.4199 10.3827C17.4823 10.5908 17.5154 10.8127 17.5195 11.0426C17.5182 11.5387 17.3548 12.0154 17.0598 12.4052L16.8301 12.7088L16.9394 13.0733C17.0026 13.2837 17.0344 13.5017 17.0344 13.725C17.0344 14.2233 16.8708 14.7022 16.5746 15.0935L16.3449 15.397L16.4543 15.7616C16.5174 15.972 16.5492 16.19 16.5492 16.4133C16.5492 17.3219 16.0093 18.1404 15.1698 18.4984L15.1698 18.4984L15.1656 18.5002C15.0695 18.5419 14.9606 18.5649 14.843 18.5649H4.60429Z" fill={selected ? primaryColor : "white"} stroke="#2F8CE9" stroke-width="1.5" />
</svg>


export const CommentsIcon = ({ selected, onClick, className }: IconProps) => <svg onClick={onClick} className={className} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5.333 15.25H5.08299L4.88298 15.4L0.75 18.4999V2C0.75 1.31121 1.31121 0.75 2 0.75H18C18.6888 0.75 19.25 1.31121 19.25 2V14C19.25 14.6888 18.6888 15.25 18 15.25H5.333Z" fill={selected ? primaryColor : "white"} stroke="#2F8CE9" stroke-width="1.5" />
</svg>


export const NotificationIcon = ({ selected, onClick, className }: IconProps) => <svg className={className} onClick={onClick} width="32" height="42" viewBox="0 0 32 42" fill="none" xmlns="http://www.w3.org/2000/svg" >
    <g filter="url(#filter0_ddddd_61_510)" >
        <path d="M25.2803 15.7197L23.25 13.6895V11C23.2477 9.14138 22.5563 7.34964 21.3095 5.97124C20.0627 4.59284 18.3491 3.7257 16.5 3.5375V2H15V3.5375C13.1509 3.7257 11.4373 4.59284 10.1905 5.97124C8.94373 7.34964 8.25233 9.14138 8.25 11V13.6895L6.21975 15.7197C6.07909 15.8604 6.00004 16.0511 6 16.25V18.5C6 18.6989 6.07902 18.8897 6.21967 19.0303C6.36032 19.171 6.55109 19.25 6.75 19.25H12V19.8328C11.9837 20.7842 12.3191 21.7083 12.9418 22.4278C13.5646 23.1473 14.431 23.6117 15.375 23.732C15.8964 23.7837 16.4228 23.7257 16.9204 23.5617C17.4181 23.3978 17.8759 23.1315 18.2644 22.78C18.6529 22.4285 18.9636 21.9995 19.1764 21.5207C19.3892 21.042 19.4994 20.5239 19.5 20V19.25H24.75C24.9489 19.25 25.1397 19.171 25.2803 19.0303C25.421 18.8897 25.5 18.6989 25.5 18.5V16.25C25.5 16.0511 25.4209 15.8604 25.2803 15.7197Z" fill={selected ? primaryColor : "white"} />
        <path d="M12 19.25H6.75C6.55109 19.25 6.36032 19.171 6.21967 19.0303C6.07902 18.8897 6 18.6989 6 18.5V16.25C6.00004 16.0511 6.07909 15.8604 6.21975 15.7197L8.25 13.6895V11C8.25233 9.14138 8.94373 7.34964 10.1905 5.97124C11.4373 4.59284 13.1509 3.7257 15 3.5375V2H16.5V3.5375C18.3491 3.7257 20.0627 4.59284 21.3095 5.97124C22.5563 7.34964 23.2477 9.14138 23.25 11V13.6895L25.2803 15.7197C25.4209 15.8604 25.5 16.0511 25.5 16.25V18.5C25.5 18.6989 25.421 18.8897 25.2803 19.0303C25.1397 19.171 24.9489 19.25 24.75 19.25H19.5M12 19.25V19.8328C11.9837 20.7842 12.3191 21.7083 12.9418 22.4278C13.5646 23.1473 14.431 23.6117 15.375 23.732C15.8964 23.7837 16.4228 23.7257 16.9204 23.5617C17.4181 23.3978 17.8759 23.1315 18.2644 22.78C18.6529 22.4285 18.9636 21.9995 19.1764 21.5207C19.3892 21.042 19.4994 20.5239 19.5 20V19.25M12 19.25H19.5" stroke={primaryColor} strokeWidth="1.5" />
    </g>
    <defs>
        <filter id="filter0_ddddd_61_510" x="0.25" y="0.25" width="31" height="41.2503" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_61_510" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset dy="1" />
            <feGaussianBlur stdDeviation="1" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
            <feBlend mode="normal" in2="effect1_dropShadow_61_510" result="effect2_dropShadow_61_510" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset dy="3" />
            <feGaussianBlur stdDeviation="1.5" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.09 0" />
            <feBlend mode="normal" in2="effect2_dropShadow_61_510" result="effect3_dropShadow_61_510" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset dy="7" />
            <feGaussianBlur stdDeviation="2" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
            <feBlend mode="normal" in2="effect3_dropShadow_61_510" result="effect4_dropShadow_61_510" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset dy="12" />
            <feGaussianBlur stdDeviation="2.5" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.01 0" />
            <feBlend mode="normal" in2="effect4_dropShadow_61_510" result="effect5_dropShadow_61_510" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect5_dropShadow_61_510" result="shape" />
        </filter>
    </defs>
</svg>

export const MessagesIcon = ({ selected, onClick, className }: IconProps) => <svg className={className} onClick={onClick} width="32" height="40" viewBox="0 0 32 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g filter="url(#filter0_ddddd_61_514)" >
        <path d="M11.125 10.875L6.625 15.375V2.625H21.625V7.125" fill={selected ? primaryColor : "white"} />
        <path d="M11.125 10.875L6.625 15.375V2.625H21.625V7.125" stroke={primaryColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M25.375 21.375V7.875H11.125V16.875H20.125L25.375 21.375Z" fill={selected ? primaryColor : "white"} stroke={primaryColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </g>
    <defs>
        <filter id="filter0_ddddd_61_514" x="-1" y="-1" width="34" height="42" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_61_514" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset dy="1" />
            <feGaussianBlur stdDeviation="1" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
            <feBlend mode="normal" in2="effect1_dropShadow_61_514" result="effect2_dropShadow_61_514" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset dy="3" />
            <feGaussianBlur stdDeviation="1.5" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.09 0" />
            <feBlend mode="normal" in2="effect2_dropShadow_61_514" result="effect3_dropShadow_61_514" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset dy="7" />
            <feGaussianBlur stdDeviation="2" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
            <feBlend mode="normal" in2="effect3_dropShadow_61_514" result="effect4_dropShadow_61_514" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset dy="12" />
            <feGaussianBlur stdDeviation="2.5" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.01 0" />
            <feBlend mode="normal" in2="effect4_dropShadow_61_514" result="effect5_dropShadow_61_514" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect5_dropShadow_61_514" result="shape" />
        </filter>
    </defs>
</svg>

export const SettingsIcon = ({ selected, onClick, className }: IconProps) => <svg className={className} onClick={onClick} width="34" height="42" viewBox="0 0 34 42" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0_61_526)" filter="url(#filter0_ddddd_61_526)" >
        <path d="M14.75 2.5V5.5L13.25 6.25L11 4L8 7L10.25 9.25L9.5 10.75H6.5V15.25H9.5L10.25 16.75L8 19L11 22L13.25 19.75L14.75 20.5V23.5H19.25V20.5L20.75 19.75L23 22L26 19L23.75 16.75L24.5 15.25H27.5V10.75H24.5L23.75 9.25L26 7L23 4L20.75 6.25L19.25 5.5V2.5H14.75Z" fill={selected ? primaryColor : "white"} stroke={primaryColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M17 16C18.6569 16 20 14.6569 20 13C20 11.3431 18.6569 10 17 10C15.3431 10 14 11.3431 14 13C14 14.6569 15.3431 16 17 16Z" stroke={primaryColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </g>
    <defs>
        <filter id="filter0_ddddd_61_526" x="0" y="0" width="34" height="42" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_61_526" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset dy="1" />
            <feGaussianBlur stdDeviation="1" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
            <feBlend mode="normal" in2="effect1_dropShadow_61_526" result="effect2_dropShadow_61_526" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset dy="3" />
            <feGaussianBlur stdDeviation="1.5" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.09 0" />
            <feBlend mode="normal" in2="effect2_dropShadow_61_526" result="effect3_dropShadow_61_526" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset dy="7" />
            <feGaussianBlur stdDeviation="2" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
            <feBlend mode="normal" in2="effect3_dropShadow_61_526" result="effect4_dropShadow_61_526" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset dy="12" />
            <feGaussianBlur stdDeviation="2.5" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.01 0" />
            <feBlend mode="normal" in2="effect4_dropShadow_61_526" result="effect5_dropShadow_61_526" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect5_dropShadow_61_526" result="shape" />
        </filter>
        <clipPath id="clip0_61_526">
            <rect width="24" height="24" fill="white" transform="translate(5 1)" />
        </clipPath>
    </defs>
</svg>

export const SearchIcon = ({ selected, onClick, className }: IconProps) => <svg className={className} onClick={onClick} width="30" height="24" viewBox="0 0 30 24" fill="none" xmlns="http://www.w3.org/2000/svg" >

    <path d="M22.023 16.977C21.5546 16.5284 21.0988 16.0669 20.656 15.593C20.284 15.215 20.06 14.94 20.06 14.94L17.26 13.603C18.381 12.3316 18.9997 10.695 19 9C19 5.141 15.86 2 12 2C8.14 2 5 5.141 5 9C5 12.859 8.14 16 12 16C13.763 16 15.37 15.34 16.603 14.261L17.94 17.061C17.94 17.061 18.215 17.285 18.593 17.657C18.98 18.02 19.489 18.511 19.977 19.024L21.335 20.416L21.939 21.062L24.06 18.941L23.414 18.337C23.035 17.965 22.529 17.471 22.023 16.977ZM12 14C9.243 14 7 11.757 7 9C7 6.243 9.243 4 12 4C14.757 4 17 6.243 17 9C17 11.757 14.757 14 12 14Z" fill={primaryColor} />

</svg>

export const FilterIcon = ({ selected, onClick, className }: IconProps) => <svg className={className} onClick={onClick} width="32" height="38" viewBox="0 0 32 38" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g filter="url(#filter0_ddddd_85_1659)" >
        <path fillRule="evenodd" clipRule="evenodd" d="M26.5 3V5.505L19 12.6435V21H13V12.6435L5.5 5.5035V3H26.5ZM14.5 12V19.5H17.5V12L25 4.86V4.5H7V4.86L14.5 12Z" fill={primaryColor} />
    </g>
    <defs>
        <filter id="filter0_ddddd_85_1659" x="-1" y="-1" width="34" height="42" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_85_1659" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset dy="1" />
            <feGaussianBlur stdDeviation="1" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
            <feBlend mode="normal" in2="effect1_dropShadow_85_1659" result="effect2_dropShadow_85_1659" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset dy="3" />
            <feGaussianBlur stdDeviation="1.5" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.09 0" />
            <feBlend mode="normal" in2="effect2_dropShadow_85_1659" result="effect3_dropShadow_85_1659" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset dy="7" />
            <feGaussianBlur stdDeviation="2" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
            <feBlend mode="normal" in2="effect3_dropShadow_85_1659" result="effect4_dropShadow_85_1659" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset dy="12" />
            <feGaussianBlur stdDeviation="2.5" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.01 0" />
            <feBlend mode="normal" in2="effect4_dropShadow_85_1659" result="effect5_dropShadow_85_1659" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect5_dropShadow_85_1659" result="shape" />
        </filter>
    </defs>
</svg>

export const CreateIcon = ({ selected, onClick, className }: IconProps) => <svg className={className} onClick={onClick} width="28" height="38" viewBox="0 0 28 38" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g filter="url(#filter0_ddddd_85_1662)" >
        <path d="M12 13H6C5.73478 13 5.48043 13.1054 5.29289 13.2929C5.10536 13.4804 5 13.7348 5 14V20C5 20.2652 5.10536 20.5196 5.29289 20.7071C5.48043 20.8946 5.73478 21 6 21H12C12.2652 21 12.5196 20.8946 12.7071 20.7071C12.8946 20.5196 13 20.2652 13 20V14C13 13.7348 12.8946 13.4804 12.7071 13.2929C12.5196 13.1054 12.2652 13 12 13ZM11 19H7V15H11V19ZM22 3H16C15.7348 3 15.4804 3.10536 15.2929 3.29289C15.1054 3.48043 15 3.73478 15 4V10C15 10.2652 15.1054 10.5196 15.2929 10.7071C15.4804 10.8946 15.7348 11 16 11H22C22.2652 11 22.5196 10.8946 22.7071 10.7071C22.8946 10.5196 23 10.2652 23 10V4C23 3.73478 22.8946 3.48043 22.7071 3.29289C22.5196 3.10536 22.2652 3 22 3ZM21 9H17V5H21V9ZM22 16H20V14C20 13.7348 19.8946 13.4804 19.7071 13.2929C19.5196 13.1054 19.2652 13 19 13C18.7348 13 18.4804 13.1054 18.2929 13.2929C18.1054 13.4804 18 13.7348 18 14V16H16C15.7348 16 15.4804 16.1054 15.2929 16.2929C15.1054 16.4804 15 16.7348 15 17C15 17.2652 15.1054 17.5196 15.2929 17.7071C15.4804 17.8946 15.7348 18 16 18H18V20C18 20.2652 18.1054 20.5196 18.2929 20.7071C18.4804 20.8946 18.7348 21 19 21C19.2652 21 19.5196 20.8946 19.7071 20.7071C19.8946 20.5196 20 20.2652 20 20V18H22C22.2652 18 22.5196 17.8946 22.7071 17.7071C22.8946 17.5196 23 17.2652 23 17C23 16.7348 22.8946 16.4804 22.7071 16.2929C22.5196 16.1054 22.2652 16 22 16ZM12 3H6C5.73478 3 5.48043 3.10536 5.29289 3.29289C5.10536 3.48043 5 3.73478 5 4V10C5 10.2652 5.10536 10.5196 5.29289 10.7071C5.48043 10.8946 5.73478 11 6 11H12C12.2652 11 12.5196 10.8946 12.7071 10.7071C12.8946 10.5196 13 10.2652 13 10V4C13 3.73478 12.8946 3.48043 12.7071 3.29289C12.5196 3.10536 12.2652 3 12 3ZM11 9H7V5H11V9Z" fill={primaryColor} />
    </g>
    <defs>
        <filter id="filter0_ddddd_85_1662" x="-3" y="-1" width="34" height="42" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_85_1662" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset dy="1" />
            <feGaussianBlur stdDeviation="1" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
            <feBlend mode="normal" in2="effect1_dropShadow_85_1662" result="effect2_dropShadow_85_1662" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset dy="3" />
            <feGaussianBlur stdDeviation="1.5" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.09 0" />
            <feBlend mode="normal" in2="effect2_dropShadow_85_1662" result="effect3_dropShadow_85_1662" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset dy="7" />
            <feGaussianBlur stdDeviation="2" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
            <feBlend mode="normal" in2="effect3_dropShadow_85_1662" result="effect4_dropShadow_85_1662" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset dy="12" />
            <feGaussianBlur stdDeviation="2.5" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.01 0" />
            <feBlend mode="normal" in2="effect4_dropShadow_85_1662" result="effect5_dropShadow_85_1662" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect5_dropShadow_85_1662" result="shape" />
        </filter>
    </defs>
</svg>

export const LocationIcon = ({ selected, onClick, className }: IconProps) => <svg className={className} onClick={onClick} width="24" height="38" viewBox="0 0 24 38" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g filter="url(#filter0_ddddd_87_1686)" >
        <path fillRule="evenodd" clipRule="evenodd" d="M16.248 4.032C15.1277 2.91138 13.6144 2.27205 12.03 2.25H11.97C10.3855 2.27173 8.87193 2.91085 7.75139 4.03139C6.63084 5.15193 5.99173 6.66546 5.97 8.25C5.9505 9.375 6.267 10.4805 6.879 11.4255L11.601 21H12.4005L17.121 11.4255C17.7345 10.4805 18.051 9.375 18.03 8.25C18.0079 6.66559 17.3686 5.15229 16.248 4.032ZM11.8875 3.75L12.0105 3.765L12.1215 3.75C13.2998 3.80132 14.4138 4.3021 15.2343 5.14939C16.0548 5.99668 16.5195 7.12611 16.533 8.3055C16.5445 9.14254 16.3001 9.96313 15.8325 10.6575L15.8025 10.7085L15.777 10.761L12 18.4185L8.2245 10.7685L8.199 10.71L8.169 10.659C7.70142 9.96463 7.45702 9.14404 7.4685 8.307C7.48129 7.12625 7.94658 5.99539 8.76848 5.14755C9.59037 4.2997 10.7062 3.79948 11.886 3.75H11.8875ZM12.8055 7.0035C12.6417 6.89398 12.4579 6.81779 12.2647 6.77928C12.0715 6.74078 11.8725 6.74071 11.6793 6.77908C11.486 6.81746 11.3022 6.89352 11.1383 7.00293C10.9745 7.11234 10.8338 7.25296 10.7242 7.41675C10.6147 7.58054 10.5385 7.7643 10.5 7.95754C10.4615 8.15077 10.4615 8.3497 10.4998 8.54296C10.5382 8.73622 10.6143 8.92004 10.7237 9.0839C10.8331 9.24777 10.9737 9.38848 11.1375 9.498C11.4683 9.71919 11.8734 9.79992 12.2637 9.72242C12.654 9.64492 12.9976 9.41554 13.2187 9.08475C13.4399 8.75396 13.5207 8.34885 13.4432 7.95854C13.3657 7.56823 13.1363 7.22469 12.8055 7.0035ZM10.305 5.7555C10.6323 5.52543 11.0023 5.36315 11.3932 5.2782C11.7842 5.19326 12.1881 5.18736 12.5814 5.26086C12.9746 5.33436 13.3492 5.48577 13.6831 5.70618C14.017 5.9266 14.3034 6.21156 14.5255 6.54431C14.7476 6.87706 14.9009 7.25087 14.9763 7.64374C15.0518 8.03662 15.048 8.44062 14.965 8.83198C14.882 9.22334 14.7216 9.59416 14.4932 9.92261C14.2648 10.2511 13.973 10.5305 13.635 10.7445C12.9733 11.1634 12.1741 11.307 11.408 11.1446C10.642 10.9822 9.96976 10.5266 9.535 9.87528C9.10025 9.22394 8.93742 8.42841 9.0813 7.65864C9.22517 6.88886 9.66434 6.20585 10.305 5.7555Z" fill={primaryColor} />
    </g>
    <defs>
        <filter id="filter0_ddddd_87_1686" x="-5" y="-1" width="34" height="42" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_87_1686" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset dy="1" />
            <feGaussianBlur stdDeviation="1" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
            <feBlend mode="normal" in2="effect1_dropShadow_87_1686" result="effect2_dropShadow_87_1686" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset dy="3" />
            <feGaussianBlur stdDeviation="1.5" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.09 0" />
            <feBlend mode="normal" in2="effect2_dropShadow_87_1686" result="effect3_dropShadow_87_1686" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset dy="7" />
            <feGaussianBlur stdDeviation="2" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
            <feBlend mode="normal" in2="effect3_dropShadow_87_1686" result="effect4_dropShadow_87_1686" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset dy="12" />
            <feGaussianBlur stdDeviation="2.5" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.01 0" />
            <feBlend mode="normal" in2="effect4_dropShadow_87_1686" result="effect5_dropShadow_87_1686" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect5_dropShadow_87_1686" result="shape" />
        </filter>
    </defs>
</svg>

export const ContactIcon = ({ selected, onClick, className }: IconProps) => <svg className={className} onClick={onClick} width="34" height="39" viewBox="0 0 34 39" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g filter="url(#filter0_ddddd_88_1721)" >
        <path d="M28.0143 4.31719C28.2768 3.75938 28.1268 3.11719 27.6393 2.69063C27.1518 2.26407 26.4179 2.13282 25.7804 2.36251L6.92321 9.11251C6.1625 9.38438 5.73393 10.0875 5.88929 10.7906C6.04464 11.4938 6.75179 12 7.57143 12H17V20.25C17 20.9672 17.5786 21.5813 18.3821 21.7219C19.1857 21.8625 19.9893 21.4828 20.3 20.8172L28.0143 4.31719V4.31719Z" fill={primaryColor} />
    </g>
    <defs>
        <filter id="filter0_ddddd_88_1721" x="0" y="-1" width="34" height="42" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_88_1721" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset dy="1" />
            <feGaussianBlur stdDeviation="1" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
            <feBlend mode="normal" in2="effect1_dropShadow_88_1721" result="effect2_dropShadow_88_1721" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset dy="3" />
            <feGaussianBlur stdDeviation="1.5" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.09 0" />
            <feBlend mode="normal" in2="effect2_dropShadow_88_1721" result="effect3_dropShadow_88_1721" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset dy="7" />
            <feGaussianBlur stdDeviation="2" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
            <feBlend mode="normal" in2="effect3_dropShadow_88_1721" result="effect4_dropShadow_88_1721" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset dy="12" />
            <feGaussianBlur stdDeviation="2.5" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.01 0" />
            <feBlend mode="normal" in2="effect4_dropShadow_88_1721" result="effect5_dropShadow_88_1721" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect5_dropShadow_88_1721" result="shape" />
        </filter>
    </defs>
</svg>

export const StarIcon = ({ selected, onClick, className }: IconProps) => <svg className={className} onClick={onClick} width="30" height="38" viewBox="0 0 30 38" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g filter="url(#filter0_ddddd_102_2206)" >
        <path d="M24.2836 8.27578L18.3328 7.41093L15.6727 2.01797C15.6 1.87031 15.4805 1.75078 15.3328 1.67812C14.9625 1.49531 14.5125 1.64765 14.3273 2.01797L11.6672 7.41093L5.7164 8.27578C5.55234 8.29922 5.40234 8.37656 5.2875 8.49375C5.14866 8.63645 5.07215 8.82844 5.07479 9.02752C5.07743 9.2266 5.15899 9.41649 5.30156 9.55547L9.60703 13.7531L8.58984 19.6805C8.56599 19.8184 8.58125 19.9602 8.63389 20.0898C8.68652 20.2195 8.77444 20.3318 8.88766 20.414C9.00088 20.4962 9.13487 20.5451 9.27445 20.555C9.41403 20.565 9.5536 20.5356 9.67734 20.4703L15 17.6719L20.3227 20.4703C20.468 20.5477 20.6367 20.5734 20.7984 20.5453C21.2063 20.475 21.4805 20.0883 21.4102 19.6805L20.393 13.7531L24.6984 9.55547C24.8156 9.44062 24.893 9.29062 24.9164 9.12656C24.9797 8.7164 24.6938 8.33672 24.2836 8.27578Z" fill={selected ? "#FFB514" : "white"} stroke="#FFB514" />
    </g>
    <defs>
        <filter id="filter0_ddddd_102_2206" x="-2" y="-1" width="34" height="42" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_102_2206" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset dy="1" />
            <feGaussianBlur stdDeviation="1" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
            <feBlend mode="normal" in2="effect1_dropShadow_102_2206" result="effect2_dropShadow_102_2206" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset dy="3" />
            <feGaussianBlur stdDeviation="1.5" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.09 0" />
            <feBlend mode="normal" in2="effect2_dropShadow_102_2206" result="effect3_dropShadow_102_2206" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset dy="7" />
            <feGaussianBlur stdDeviation="2" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
            <feBlend mode="normal" in2="effect3_dropShadow_102_2206" result="effect4_dropShadow_102_2206" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset dy="12" />
            <feGaussianBlur stdDeviation="2.5" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.01 0" />
            <feBlend mode="normal" in2="effect4_dropShadow_102_2206" result="effect5_dropShadow_102_2206" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect5_dropShadow_102_2206" result="shape" />
        </filter>
    </defs>
</svg>

export const AddImageIcon = ({ selected, onClick, className }: IconProps) => <svg className={cn(className || "placeholder:",)} onClick={onClick} width="30" height="30" viewBox="3 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" >
    <g filter="url(#filter0_ddddd_114_2310)" >
        <path d="M16 6.6C16 8.03217 15.4311 9.40568 14.4184 10.4184C13.4057 11.4311 12.0322 12 10.6 12C9.16783 12 7.79432 11.4311 6.78162 10.4184C5.76893 9.40568 5.2 8.03217 5.2 6.6C5.2 5.16783 5.76893 3.79432 6.78162 2.78162C7.79432 1.76892 9.16783 1.2 10.6 1.2C12.0322 1.2 13.4057 1.76892 14.4184 2.78162C15.4311 3.79432 16 5.16783 16 6.6V6.6ZM11.2 4.2C11.2 4.04087 11.1368 3.88825 11.0243 3.77573C10.9117 3.66321 10.7591 3.6 10.6 3.6C10.4409 3.6 10.2883 3.66321 10.1757 3.77573C10.0632 3.88825 10 4.04087 10 4.2V6H8.2C8.04087 6 7.88826 6.06321 7.77574 6.17573C7.66322 6.28826 7.6 6.44087 7.6 6.6C7.6 6.75913 7.66322 6.91174 7.77574 7.02426C7.88826 7.13678 8.04087 7.2 8.2 7.2H10V9C10 9.15913 10.0632 9.31174 10.1757 9.42426C10.2883 9.53678 10.4409 9.6 10.6 9.6C10.7591 9.6 10.9117 9.53678 11.0243 9.42426C11.1368 9.31174 11.2 9.15913 11.2 9V7.2H13C13.1591 7.2 13.3117 7.13678 13.4243 7.02426C13.5368 6.91174 13.6 6.75913 13.6 6.6C13.6 6.44087 13.5368 6.28826 13.4243 6.17573C13.3117 6.06321 13.1591 6 13 6H11.2V4.2ZM20.8 4.8H16.9516C16.8342 4.38548 16.6762 3.98354 16.48 3.6H20.8C21.7548 3.6 22.6705 3.97928 23.3456 4.65441C24.0207 5.32954 24.4 6.24522 24.4 7.2V16.8C24.4 17.7548 24.0207 18.6705 23.3456 19.3456C22.6705 20.0207 21.7548 20.4 20.8 20.4H11.2C10.2452 20.4 9.32955 20.0207 8.65442 19.3456C7.97929 18.6705 7.6 17.7548 7.6 16.8V12.48C7.9804 12.6744 8.3812 12.8328 8.8 12.9516V16.8C8.8 17.2476 8.9224 17.6664 9.136 18.024L14.7388 12.5184C15.0754 12.1879 15.5283 12.0027 16 12.0027C16.4717 12.0027 16.9246 12.1879 17.2612 12.5184L22.8652 18.024C23.0851 17.6537 23.2008 17.2307 23.2 16.8V7.2C23.2 6.56348 22.9471 5.95303 22.4971 5.50294C22.047 5.05285 21.4365 4.8 20.8 4.8V4.8ZM20.8 9C20.8 9.23638 20.7534 9.47044 20.663 9.68883C20.5725 9.90721 20.4399 10.1056 20.2728 10.2728C20.1056 10.4399 19.9072 10.5725 19.6888 10.663C19.4704 10.7534 19.2364 10.8 19 10.8C18.7636 10.8 18.5296 10.7534 18.3112 10.663C18.0928 10.5725 17.8944 10.4399 17.7272 10.2728C17.5601 10.1056 17.4275 9.90721 17.337 9.68883C17.2466 9.47044 17.2 9.23638 17.2 9C17.2 8.52261 17.3896 8.06477 17.7272 7.7272C18.0648 7.38964 18.5226 7.2 19 7.2C19.4774 7.2 19.9352 7.38964 20.2728 7.7272C20.6104 8.06477 20.8 8.52261 20.8 9V9ZM19.6 9C19.6 8.84087 19.5368 8.68826 19.4243 8.57573C19.3117 8.46321 19.1591 8.4 19 8.4C18.8409 8.4 18.6883 8.46321 18.5757 8.57573C18.4632 8.68826 18.4 8.84087 18.4 9C18.4 9.15913 18.4632 9.31174 18.5757 9.42426C18.6883 9.53678 18.8409 9.6 19 9.6C19.1591 9.6 19.3117 9.53678 19.4243 9.42426C19.5368 9.31174 19.6 9.15913 19.6 9ZM9.9856 18.8712C10.3537 19.0874 10.7731 19.2009 11.2 19.2H20.8C21.244 19.2 21.658 19.08 22.0144 18.8712L16.42 13.3752C16.3078 13.2653 16.1571 13.2037 16 13.2037C15.8429 13.2037 15.6922 13.2653 15.58 13.3752L9.9856 18.8712V18.8712Z" fill={primaryColor} />
    </g>
    <defs>
        <filter id="filter0_ddddd_114_2310" x="-1" y="-1" width="30" height="30" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_114_2310" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset dy="1" />
            <feGaussianBlur stdDeviation="1" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
            <feBlend mode="normal" in2="effect1_dropShadow_114_2310" result="effect2_dropShadow_114_2310" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset dy="3" />
            <feGaussianBlur stdDeviation="1.5" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.09 0" />
            <feBlend mode="normal" in2="effect2_dropShadow_114_2310" result="effect3_dropShadow_114_2310" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset dy="7" />
            <feGaussianBlur stdDeviation="2" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
            <feBlend mode="normal" in2="effect3_dropShadow_114_2310" result="effect4_dropShadow_114_2310" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset dy="12" />
            <feGaussianBlur stdDeviation="2.5" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.01 0" />
            <feBlend mode="normal" in2="effect4_dropShadow_114_2310" result="effect5_dropShadow_114_2310" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect5_dropShadow_114_2310" result="shape" />
        </filter>
    </defs>
</svg>

export const LeftArrowIcon = ({ selected, onClick, className }: IconProps) => <svg className={className} onClick={onClick} width="26" height="24" viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g filter="url(#filter0_ddddd_130_2665)" >
        <path d="M11.875 19.3L5.275 12.7C5.175 12.6 5.104 12.4917 5.062 12.375C5.02067 12.2583 5 12.1333 5 12C5 11.8667 5.02067 11.7417 5.062 11.625C5.104 11.5083 5.175 11.4 5.275 11.3L11.875 4.70001C12.0583 4.51667 12.2873 4.42067 12.562 4.41201C12.8373 4.40401 13.075 4.50001 13.275 4.70001C13.475 4.88334 13.5793 5.11234 13.588 5.38701C13.596 5.66234 13.5 5.90001 13.3 6.10001L8.4 11H19.575C19.8583 11 20.096 11.0957 20.288 11.287C20.4793 11.479 20.575 11.7167 20.575 12C20.575 12.2833 20.4793 12.5207 20.288 12.712C20.096 12.904 19.8583 13 19.575 13H8.4L13.3 17.9C13.4833 18.0833 13.5793 18.3167 13.588 18.6C13.596 18.8833 13.5 19.1167 13.3 19.3C13.1167 19.5 12.8833 19.6 12.6 19.6C12.3167 19.6 12.075 19.5 11.875 19.3V19.3Z" fill={primaryColor} />
    </g>
    <defs>
        <filter id="filter0_ddddd_130_2665" x="-4" y="-1" width="34" height="42" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_130_2665" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset dy="1" />
            <feGaussianBlur stdDeviation="1" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
            <feBlend mode="normal" in2="effect1_dropShadow_130_2665" result="effect2_dropShadow_130_2665" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset dy="3" />
            <feGaussianBlur stdDeviation="1.5" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.09 0" />
            <feBlend mode="normal" in2="effect2_dropShadow_130_2665" result="effect3_dropShadow_130_2665" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset dy="7" />
            <feGaussianBlur stdDeviation="2" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
            <feBlend mode="normal" in2="effect3_dropShadow_130_2665" result="effect4_dropShadow_130_2665" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset dy="12" />
            <feGaussianBlur stdDeviation="2.5" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.01 0" />
            <feBlend mode="normal" in2="effect4_dropShadow_130_2665" result="effect5_dropShadow_130_2665" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect5_dropShadow_130_2665" result="shape" />
        </filter>
    </defs>
</svg>

export const RightIcon = ({ selected, onClick, className }: IconProps) => <svg className={className} onClick={onClick} width="26" height="24" viewBox="0 0 26 27" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g filter="url(#filter0_ddddd_130_2664)" >
        <path d="M14.125 4.7L20.725 11.3C20.825 11.4 20.896 11.5083 20.938 11.625C20.9793 11.7417 21 11.8667 21 12C21 12.1333 20.9793 12.2583 20.938 12.375C20.896 12.4917 20.825 12.6 20.725 12.7L14.125 19.3C13.9417 19.4833 13.7127 19.5793 13.438 19.588C13.1627 19.596 12.925 19.5 12.725 19.3C12.525 19.1167 12.4207 18.8877 12.412 18.613C12.404 18.3377 12.5 18.1 12.7 17.9L17.6 13L6.425 13C6.14167 13 5.904 12.9043 5.712 12.713C5.52067 12.521 5.425 12.2833 5.425 12C5.425 11.7167 5.52067 11.4793 5.712 11.288C5.904 11.096 6.14167 11 6.425 11L17.6 11L12.7 6.09999C12.5167 5.91666 12.4207 5.68333 12.412 5.39999C12.404 5.11666 12.5 4.88333 12.7 4.7C12.8833 4.5 13.1167 4.39999 13.4 4.39999C13.6833 4.39999 13.925 4.5 14.125 4.7V4.7Z" fill={primaryColor} />
    </g>
    <defs>
        <filter id="filter0_ddddd_130_2664" x="-4" y="-1" width="34" height="42" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_130_2664" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset dy="1" />
            <feGaussianBlur stdDeviation="1" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
            <feBlend mode="normal" in2="effect1_dropShadow_130_2664" result="effect2_dropShadow_130_2664" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset dy="3" />
            <feGaussianBlur stdDeviation="1.5" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.09 0" />
            <feBlend mode="normal" in2="effect2_dropShadow_130_2664" result="effect3_dropShadow_130_2664" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset dy="7" />
            <feGaussianBlur stdDeviation="2" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
            <feBlend mode="normal" in2="effect3_dropShadow_130_2664" result="effect4_dropShadow_130_2664" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset dy="12" />
            <feGaussianBlur stdDeviation="2.5" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.01 0" />
            <feBlend mode="normal" in2="effect4_dropShadow_130_2664" result="effect5_dropShadow_130_2664" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect5_dropShadow_130_2664" result="shape" />
        </filter>
    </defs>
</svg>

export const BackIcon = ({ selected, onClick, className }: IconProps) => <svg className={className} onClick={onClick} width="27" height="20" viewBox="0 0 27 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g filter="url(#filter0_ddddd_161_40379)" >
        <path d="M10 13L6 9L10 5M6 9H17C18.0609 9 19.0783 9.42143 19.8284 10.1716C20.5786 10.9217 21 11.9391 21 13C21 14.0609 20.5786 15.0783 19.8284 15.8284C19.0783 16.5786 18.0609 17 17 17H16" stroke={primaryColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </g>
    <defs>
        <filter id="filter0_ddddd_161_40379" x="-4" y="-1" width="34" height="42" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_161_40379" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset dy="1" />
            <feGaussianBlur stdDeviation="1" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
            <feBlend mode="normal" in2="effect1_dropShadow_161_40379" result="effect2_dropShadow_161_40379" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset dy="3" />
            <feGaussianBlur stdDeviation="1.5" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.09 0" />
            <feBlend mode="normal" in2="effect2_dropShadow_161_40379" result="effect3_dropShadow_161_40379" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset dy="7" />
            <feGaussianBlur stdDeviation="2" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
            <feBlend mode="normal" in2="effect3_dropShadow_161_40379" result="effect4_dropShadow_161_40379" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset dy="12" />
            <feGaussianBlur stdDeviation="2.5" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.01 0" />
            <feBlend mode="normal" in2="effect4_dropShadow_161_40379" result="effect5_dropShadow_161_40379" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect5_dropShadow_161_40379" result="shape" />
        </filter>
    </defs>
</svg>

export const EditIcon = ({ selected, onClick, className }: IconProps) => <svg onClick={onClick} className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0_462_29518)">
        <path d="M10.756 6.17L17.826 13.241L10.653 20.415C10.321 20.747 9.88272 20.9516 9.415 20.993L9.239 21H4.006C3.75718 21 3.51711 20.9082 3.33183 20.7421C3.14655 20.576 3.0291 20.3473 3.002 20.1L2.996 19.99V14.757C2.99612 14.2875 3.16144 13.8329 3.463 13.473L3.583 13.343L10.756 6.169V6.17ZM13.896 3.03C14.2499 2.67605 14.7237 2.46767 15.2237 2.44601C15.7238 2.42435 16.2138 2.59098 16.597 2.913L16.724 3.03L20.967 7.273C21.3207 7.62686 21.5289 8.10042 21.5505 8.60025C21.5722 9.10008 21.4057 9.58988 21.084 9.973L20.967 10.101L19.241 11.827L12.171 4.756L13.896 3.03V3.03Z" fill="#1673D0" />
    </g>
    <defs>
        <clipPath id="clip0_462_29518">
            <rect width="24" height="24" fill="white" />
        </clipPath>
    </defs>
</svg>

export const DeleteIcon = ({ selected, onClick, className }: IconProps) => <svg onClick={onClick} className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7 21C6.45 21 5.97933 20.8043 5.588 20.413C5.196 20.021 5 19.55 5 19V6C4.71667 6 4.479 5.90433 4.287 5.713C4.09567 5.521 4 5.28333 4 5C4 4.71667 4.09567 4.479 4.287 4.287C4.479 4.09567 4.71667 4 5 4H9C9 3.71667 9.096 3.479 9.288 3.287C9.47933 3.09567 9.71667 3 10 3H14C14.2833 3 14.521 3.09567 14.713 3.287C14.9043 3.479 15 3.71667 15 4H19C19.2833 4 19.5207 4.09567 19.712 4.287C19.904 4.479 20 4.71667 20 5C20 5.28333 19.904 5.521 19.712 5.713C19.5207 5.90433 19.2833 6 19 6V19C19 19.55 18.8043 20.021 18.413 20.413C18.021 20.8043 17.55 21 17 21H7ZM7 6V19H17V6H7ZM9 16C9 16.2833 9.096 16.5207 9.288 16.712C9.47933 16.904 9.71667 17 10 17C10.2833 17 10.521 16.904 10.713 16.712C10.9043 16.5207 11 16.2833 11 16V9C11 8.71667 10.9043 8.479 10.713 8.287C10.521 8.09567 10.2833 8 10 8C9.71667 8 9.47933 8.09567 9.288 8.287C9.096 8.479 9 8.71667 9 9V16ZM13 16C13 16.2833 13.096 16.5207 13.288 16.712C13.4793 16.904 13.7167 17 14 17C14.2833 17 14.521 16.904 14.713 16.712C14.9043 16.5207 15 16.2833 15 16V9C15 8.71667 14.9043 8.479 14.713 8.287C14.521 8.09567 14.2833 8 14 8C13.7167 8 13.4793 8.09567 13.288 8.287C13.096 8.479 13 8.71667 13 9V16ZM7 6V19V6Z" fill={primaryColor} />
</svg>

export const SelectionArrowIcon = ({ selected, onClick, className }: IconProps) => <svg onClick={onClick} className={className} width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.3083 5.17708L7.40832 10.0917C7.34998 10.15 7.28679 10.1912 7.21873 10.2153C7.15068 10.2398 7.07776 10.2521 6.99998 10.2521C6.92221 10.2521 6.84929 10.2398 6.78123 10.2153C6.71318 10.1912 6.64998 10.15 6.59165 10.0917L1.67707 5.17708C1.54096 5.04096 1.4729 4.87083 1.4729 4.66666C1.4729 4.46249 1.54582 4.28749 1.69165 4.14166C1.83748 3.99583 2.00762 3.92291 2.20207 3.92291C2.39651 3.92291 2.56665 3.99583 2.71248 4.14166L6.99998 8.42916L11.2875 4.14166C11.4236 4.00555 11.5912 3.93749 11.7903 3.93749C11.9898 3.93749 12.1625 4.01041 12.3083 4.15624C12.4542 4.30208 12.5271 4.47221 12.5271 4.66666C12.5271 4.8611 12.4542 5.03124 12.3083 5.17708Z" fill="black" />
</svg>

export const AddIcon = ({ selected, onClick, className }: IconProps) => <svg onClick={onClick} className={className} width="34" height="43" viewBox="0 0 34 43" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g filter="url(#filter0_ddddd_629_32911)">
        <circle cx="17" cy="13.5" r="11.25" stroke="#2F8CE9" strokeWidth="1.5" />
        <path d="M16 20.5V14.5H10V12.5H16V6.5H18V12.5H24V14.5H18V20.5H16Z" fill="#2F8CE9" />
    </g>
    <defs>
        <filter id="filter0_ddddd_629_32911" x="0" y="0.5" width="34" height="42" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_629_32911" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset dy="1" />
            <feGaussianBlur stdDeviation="1" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
            <feBlend mode="normal" in2="effect1_dropShadow_629_32911" result="effect2_dropShadow_629_32911" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset dy="3" />
            <feGaussianBlur stdDeviation="1.5" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.09 0" />
            <feBlend mode="normal" in2="effect2_dropShadow_629_32911" result="effect3_dropShadow_629_32911" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset dy="7" />
            <feGaussianBlur stdDeviation="2" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
            <feBlend mode="normal" in2="effect3_dropShadow_629_32911" result="effect4_dropShadow_629_32911" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset dy="12" />
            <feGaussianBlur stdDeviation="2.5" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.01 0" />
            <feBlend mode="normal" in2="effect4_dropShadow_629_32911" result="effect5_dropShadow_629_32911" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect5_dropShadow_629_32911" result="shape" />
        </filter>
    </defs>
</svg>

export const NotifierConfirmIcon = () => <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="15" cy="15" r="14.25" stroke="#0D7F26" strokeWidth="1.5" />
    <path d="M12.2669 18.6258L8.71092 15.1275L7.5 16.3104L12.2669 21L22.5 10.9329L21.2976 9.75L12.2669 18.6258Z" fill="#0D7F26" />
</svg>

export const NotifierWarningIcon = () => <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="15" cy="15" r="14.25" stroke="#FF4D4D" strokeWidth="1.5" />
    <path d="M20.3036 22.0711L15.0003 16.7678L9.69704 22.0711L7.92928 20.3033L13.2326 15L7.92928 9.6967L9.69704 7.92893L15.0003 13.2322L20.3036 7.92893L22.0714 9.6967L16.7681 15L22.0714 20.3033L20.3036 22.0711Z" fill="#FF4D4D" />
</svg>

export const NotifierAlertIcon = () => <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M15 8V19.7073M15 21.1707V23" stroke="#EBA100" strokeWidth="3" />
    <circle cx="15" cy="15" r="14.25" stroke="#EBA100" strokeWidth="1.5" />
</svg>




