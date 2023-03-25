import React from 'react';
import './App.css';
import { useEffect, useState } from 'react'
import axios from 'axios'
import GalleryList from '../GalleryList/GalleryList.jsx'
function App() {

  // update server/modules/data.js with additional items, photos.
  // get method to retrieve photos and like #s.
  // 2 modules:
  // GalleryList - holds the gallery of images.
  // Create a new component for the GalleryList and pass it the gallery 
  // data stored in App via props.
  // Iterate (loop over) the list of gallery data
  // Make GalleryItems 
  
  let [galleryList, setGalleryList] = useState([])

  useEffect(() => {
    getGallery();
  }, [])

  const getGallery = () => {
    axios.get('/gallery').then(response => {
      console.log(`response.data:`, response.data);
      setGalleryList(response.data)
    }).catch(err => {
      alert('Issue getting images')
    })
  }

  const likeItem = (itemID) => {
    axios.put(`/gallery/like/${itemID}`).then(response => {
      getGallery();
    }).catch(err => {
      console.log(`error with liking,`, err);
    })
  }

  // GalleryItem - holds individual items.
  // Create a new component called GalleryItem.jsx and pass it the individual gallery item via props.
  // Update the GalleryList to use this component to display an image.
  // Swap the image with the description on click. Use conditional rendering.
  // Display the number likes for each item and include a like button.
  // When the like button is clicked, use Axios to update (PUT) the like count /gallery/like/:id.
  // Update the gallery each time a like button is clicked.

  // So app calls GalleryList which calls GalleryItem?
  // GalleryList calls GalleryItem each time it wants to render an image?

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Gallery of My Life</h1>
      </header>
      <div>
      <h1>Gallery</h1>
      <div class="flex-container">
      <GalleryList galleryList={galleryList} likeItem={likeItem} />
      </div>
    </div>
    </div>
  );
}

export default App;
