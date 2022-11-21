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
    full? : boolean
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