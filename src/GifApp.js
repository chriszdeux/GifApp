import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifApp = () => {

  const [categories, setCategories] = useState(['Naruto uzumaki']);

  // const handleAddCategory = () => {
  //   // setCategories( [...categories, 'Minato Namikaze'] )
  //   setCategories( cat => [...cat, 'Sarutobi'] )
  // }

  
  return (
    <>
      <h1>GifApp</h1>
      < AddCategory setCategories={ setCategories }/>
      <hr/>
      <ol>
        {
          categories.map( category => 
            < GifGrid
            key={category} 
            category={ category }
            />
          )
        }
      </ol>
    </>
  )
}
