import React, {useRef} from 'react'
import {FaPlus} from 'react-icons/fa'
import './addItem-style.css'

function AddItem({handleSubmit,newItem,setNewItem}) {
  const inputRef = useRef()

  const handleChange = (e) => {
    setNewItem(e.target.value)
  }

  return (
    <form onSubmit={handleSubmit} className='addForm'>
      <label htmlFor="addItem">Add Item</label>
      <input
        id='addItem'
        type="text"
        autoFocus
        ref={inputRef}
        placeholder='Add item'
        required
        value={newItem}
        onChange={handleChange}
        />
        <button
          type='submit'
          aria-label='Add Item'
          onClick={()=>inputRef.current.focus()}
          >
            <FaPlus/>
        </button>
    </form>
  )
}

export default AddItem