import { ImageGalleryItem } from '../ImageGalleryItem';
import { Component } from 'react';

export class ImageGallery extends Component{
  state = {
  
  }

  
  render() {
  
    return (
        <>
          <ul class="gallery">
          <ImageGalleryItem />
          </ul>
            
        </>
    )
  }
};