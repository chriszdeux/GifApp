import React, { useState } from 'react';
import PropTypes from 'prop-types'

//remember always destruct your props or use props
export const AddCategory = ( {setCategories} ) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputValue = (e) => {
    setInputValue(e.target.value)
    // console.log(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    //this is a validation
    if(inputValue.trim().length > 2) {
      setCategories(cats => [...cats, inputValue]);
      setInputValue('')
    }
  }
  
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input 
        type="text"
        value={ inputValue }
        onChange={ handleInputValue }
        />
      </form>
    </>
  )
}

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
}
