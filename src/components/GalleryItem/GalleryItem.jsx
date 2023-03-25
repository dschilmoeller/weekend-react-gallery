import { useState } from 'react'

function GalleryItem({ props, likeItem }) {
   console.log(`Testing GalleryItem Props:`, props);
   
   let [clickedItem, setItemClicked] = useState(true)

   
   // clicking changes T->F or F->T
   // Conditionally render based on F or T
   if (clickedItem) {
      return (
         <div>
            <img src={props.path} onClick={() => setItemClicked(false)} width="300rem" />
            <p><button onClick={() => likeItem(props.id)}>Love It!</button></p>
            <p>{props.likes} people love this!</p>
         </div>
      )
   } else {
      return (
         <div>
            <p onClick={() => setItemClicked(true)} >{props.description}</p>
            <p><button onClick={() => likeItem(props.id)}>Love It!</button></p>
            <p>{props.likes} people love this!</p>
         </div>
      )
   }
}

export default GalleryItem