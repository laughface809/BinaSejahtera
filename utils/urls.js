export const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:1337'

export const MAGIC_PUBLIC_KEY = process.env.NEXT_PUBLIC_MAGIC_PUBLIC_KEY || 'pk_test_3878CF7501A0EF1B'

export const STRIPE_PK = process.env.NEXT_PUBLIC_STRIPE_PK || 'pk_test_51IN9QUKYmL2aqhTu5WZzf91nffslgTnz2fLZLZw1miirb5BG4HBr9YxjwlGeoXCO6rcdEqidkplJauDvr3ipcio000ufZPtJBQ'
/**
 * Given image return the url
 * Works for local and deployed strapis
 * @param {any} image
 */

export const fromImageToUrl= (image) => {
    if(!image){
        return "/vercel.svg"
    }

    if (image.url.indexOf("/") === 0){
        return `${API_URL}${image.url}`
    }

    return image.url
}
