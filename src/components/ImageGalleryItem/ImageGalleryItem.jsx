import { ImageGalleryListItem, ImageGalleryItemImg } from "./ImageGalleryListItem.styled"

export const ImageGalleryItem = ({webformatURL}) => {
    return (
        <ImageGalleryListItem >
            <ImageGalleryItemImg src={webformatURL} alt=""/>
        </ImageGalleryListItem>
    )
}