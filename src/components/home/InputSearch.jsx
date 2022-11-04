import React from 'react'
import './styles/inputSearch.css'

const InputSearch = ({inputText, setInputText ,setFilterByCategory}) => {

  const handleChange = e => {
    setInputText(e.target.value)
    console.log(inputText);
    setFilterByCategory()
  }

  return (
    <input  className='home__input'  placeholder='What are you looking for?' value={inputText} onChange={handleChange} type="text" />
  )
}

export default InputSearch
