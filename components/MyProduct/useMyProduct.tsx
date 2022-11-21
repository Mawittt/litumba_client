


export default function useMyProduct(){
    const image = "/avatars/brand_avatar_1.jpg"
    const name = "Air-force Max"
    const interested = 6

    return {image, name , interested , openProduct}

    function openProduct(){
         console.log("opening product")
    }
}