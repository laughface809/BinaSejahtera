export const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:1337'

/**
 * Given image return the url
 * Works for local and deployed strapis
 * @param {any} image
 */

export const fromImageToUrl= (image) => {
    if(!image){
        return "/vervel.svg"
    }

    if (image.url.indexOf("/") === 0){
        return `${API_URL}${image.url}`
    }

    return image.url
}
