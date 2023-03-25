import GalleryItem from '../GalleryItem/GalleryItem.jsx'

function GalleryList({galleryList, likeItem}) {
    return (
        galleryList.map(item => (
            <div className="galleryItem" key={item.id}>
              <GalleryItem likeItem={likeItem} props={item}/>     
            </div>
          ))
    )
}

export default GalleryList