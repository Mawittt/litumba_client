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