import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem"
import { ImageGalleryList } from "./ImageGallery.styled"

export const ImageGallery = ({images}) => {
    console.log(images)
    return (
        <ImageGalleryList>
            {images.map(({webformatURL, id}) => <ImageGalleryItem key={id} webformatURL={webformatURL}/>)}
        </ImageGalleryList>
    )
}