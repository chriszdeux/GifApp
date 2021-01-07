import React, { useState, useEffect } from 'react';
import { GridListItem } from './GridListItem';

import '../styles/gif-grid.css';

export const GifGrid = ({ category }) => {

  const [images, setImages] = useState([]);

  useEffect(() => {
    getGifs(); 
  }, []);

  const getGifs = async () => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=BbMih5kv2IYw34cSaeWNwapaePQ1BX1o&q=${ encodeURI(category) }&limit=15`;
    const response = await fetch(url);
    //I'm gonna destruct data
    const {data}  = await response.json();
    // debugger

    const gifImages = data.map(img => {
      return {
        id: img.id,
        title: img.title,
        url: img.images?.downsized_medium.url,
      }
    })
    
    console.log(gifImages);
    setImages(gifImages);
  }
  

  return (
    <div className="grid__container">
      <h3>{category}</h3>
      <ol className="grid__container__img">
        {
          images.map(img => 
            < GridListItem 
              key={img.id}
              {...img}
            />
          ) 
        }
      </ol>
    </div>
  )
}