import { MouseEventHandler, ReactElement } from "react";

export interface IconProps {
	selected?: boolean;
	onClick?: MouseEventHandler;
	className?: string | undefined;
}

export interface MyBusinessProps {
	image: string;
	name: string;
	assets: number;
}
export interface MyJobProps {
	image: string;
	title: string;
	applicants: number;
}
export interface MyServiceProps {
	image: string;
	title: string;
	interested: number;
}
export interface ButtonProps{
    label? : string,
    icon? : ReactElement,
    onClick? : MouseEventHandler,
    className? : string ,
    full? : boolean,
    colored? : boolean,
}

export interface MyProductProps{
    image? : string,
    name? : string,
    interested? : number
}

export interface PostProps{
    avatar : string,
    name : string,
    time : string,
    description : string,
    image : string ,
    likes : number,
    comments : number
}

export interface JobProps{
    avatar : string,
    title? : string,
    location? : string, 
    time? : string,
    description? : string,
    tags? : string[],
    brand : boolean,
    _id : any
}

export interface BusinessProps{
    avatar : string,
    name : string,
    email : string,
    website: string,
    description : string,
    tags : string[]
    _id : any
}


export interface ProductProps{
    avatar : string,
    name : string,
    location : string,
    website : string,
    image : string,
    description : string,
    price : number,
    amount : number,
    brand : boolean,
    _id : any
}

export interface ServiceProps{
    avatar : string,
    title : string,
    location : string,
    website : string,
    description : string
    tags : string[]
    _id : any
}

export interface CulturalGroupsProps{
    image : string,
    name : string,
    location : string ,
    members : number,
    _id : any
}

export interface JobDetailsProps{
    cover : string,
    avatar : string , 
    author : string,
    email : string,
    website : string,
    time : string,
    location : string,
    title : string,
    description : string,
    price : string,
    niche : string,
    urgency : string,
    type : string , 
    level : string, 
    schedule : string,
    available : boolean,
    _id : any
}

export interface BusinessDetailsProps{
    cover : string,
    avatar : string,
    name : string,
    email : string,
    website : string,
    location : string,
    description : string,
    phone : string,
    niche : string,
    available : boolean,
    _id : any
}

export interface ProductDetailsProps{
    selectedPreview : string,
    previews : string[],
    name : string,
    description : string,
    price : string,
    location : string,
    amount : string,
    available : boolean,
    _id : any
}

export interface OtherProductProps{
    image : string,
    name : string,
    price : string,
    _id : any
}

export interface ServiceDetailsProps{
    cover : string,
    avatar : string,
    author : string,
    email : string,
    website : string,
    title : string,
    description : string,
    price : string,
    niche : string, 
    available : boolean,
    _id : any
}

export interface UseCaseProps{
    image : string,
    title : string , 
    description : string,
    _id : any
}

export interface ReviewProps{
    avatar : string,
    name : string,
    time : string,
    stars : number,
    comment : string,
    _id : any
}

export interface CulturalGroupDetails{
    cover : string,
    avatar : string ,
    name : string ,
    members : number,
    description : string,
    location : string,
    _id : any,
}

export interface UserProfileProps{
    cover : string,
    avatar : string,
    name : string,
    email : string,
    profession : string,
    location : string,
    description : string,
    phone : string,
    country : string,
    city : string,
    online : boolean,
    _id : any
}

export interface ProductPreviewerProps{
    selectedImage : string,
    allImages : string[],
}

export interface StarsProps {
    number : number
}

export interface SignUpProps{
    closeAuth : MouseEventHandler
}
export interface LogInProps{
    closeAuth : MouseEventHandler
}

export interface AuthenticationSlideIndicatorProps{
    slide : number
}

export interface FollowProps{
    avatar : string,
    name : string,
    time : string,
    _id : any
}

export interface ConversationProps{
    avatar : string,
    name : string,
    lastMessage : string,
    unread : number,
    _id : any
}

export interface MessageProps{
    text : string,
    time : string,
    self : boolean,
    _id : any
}

export interface MessagesUserProps{
    avatar : string,
    name : string,
    _id : any
}

export interface NotificationProps{
    avatar : string,
    action : "like" | "follow" | "system" | "review",
    name: string,
    time : string,
    message? : string,
    product? : string,
    service? : string,
    _id : any
}

export interface CommentProps{
    avatar : string,
    name : string,
    text : string,
    _id : any
}