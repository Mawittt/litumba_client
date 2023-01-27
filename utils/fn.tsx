import { NextApiRequest } from "next";
import { NextResponse } from "next/server";



interface RequestInterface extends NextApiRequest {
    files: { [propName: string]: { path?: string, location?: string }[] }
    media: object
}
interface ImagesObject {
    [propName: string]: string | string[]
}

type fieldArray = { path?: string | undefined, location?: string }[]

export function cn(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

export function addMediaToRequestObject(req: RequestInterface, res: NextResponse, next: Function) {
    const media: { [propName: string]: string | string[] } = {}
    req.files
    for (const field in req.files) {
        if (Object.prototype.hasOwnProperty.call(req.files, field)) {
            const fieldArray = req.files[field];
            if (fieldArray.length === 1) setSingleImage(media, fieldArray, field)
            if (fieldArray.length > 1) setMultipleImages(media, fieldArray, field)
        }
    }
    req.media = media
    next()

    // * function implementations

    function convertPathToUrl(path: string): string {
        const host = req.headers.host

        const url = "http://" + host + "/" + encodeURIComponent(path.replace("public\\", "").replace("\\", "/"))
        return url
    }
    function setSingleImage(images: ImagesObject, fieldArray: fieldArray, field: string) {
        if (fieldArray[0].path) {
            images[field] = convertPathToUrl(fieldArray[0].path)
        }
        if (fieldArray[0].location) {
            images[field] = fieldArray[0].location
        }
    }
    function setMultipleImages(images: ImagesObject, fieldArray: fieldArray, field: string) {
        const imageArray: string[] = []
        if (!(images[field] instanceof Array)) {
            fieldArray.forEach(image => {
                imageArray.push(getUrl(image))
            })
        }

        images[field] = imageArray

        function getUrl(image: { path?: string, location?: string }) {
            if (image.path) return convertPathToUrl(image.path)
            if (image.location) return image.location
            return "none"
        }
    }
}

export function getTime(dateString: string): string {
    const date = new Date(dateString)
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
}

export function getElapsedTime(dateString: string): string {
    const secondValue = 1000
    const minuteValue = 60 * secondValue
    const hourValue = 60 * minuteValue
    const dayValue = hourValue * 24
    const weekValue = dayValue * 7
    const monthValue = weekValue * 4
    const yearValue = monthValue * 12
    const previousDate = new Date(dateString)
    const presentDate = new Date()
    const sub = presentDate.getTime() - previousDate.getTime()

    if (sub <= minuteValue) {
        const timeValue = Math.ceil(sub / secondValue)
        if (timeValue === 1) return timeValue + " sec"
        return timeValue + " secs"
    }
    if (sub <= hourValue) {
        const timeValue = Math.ceil(sub / minuteValue)
        if (timeValue === 1) return timeValue + " minute"
        return timeValue + " minutes"
    }
    if (sub <= dayValue) {
        const timeValue = Math.ceil(sub / hourValue)
        if (timeValue === 1) return timeValue + " hour"
        return timeValue + " hours"
    }
    if (sub <= weekValue) {
        const timeValue = Math.ceil(sub / dayValue)
        if (timeValue === 1) return timeValue + " day"
        return timeValue + " days"
    }
    if (sub <= monthValue) {
        const timeValue = Math.ceil(sub / weekValue)
        if (timeValue === 1) return timeValue + " week"
        return timeValue + " weeks"
    }
    if (sub <= yearValue) {
        const timeValue = Math.ceil(sub / weekValue)
        if (timeValue === 1) return timeValue + " month"
        return timeValue + " months"
    }
    if (sub > yearValue) {
        const timeValue = Math.ceil(sub / yearValue)
        if (timeValue === 1) return timeValue + " year"
        return timeValue + " years"
    }

    return sub.toString()
}

export function scrollPageComponentToTop() {
    const PageComponent = document.getElementById("page-component")
    PageComponent?.scrollTo(0, 0)
}

