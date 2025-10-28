import React from 'react';
import { FaPlus } from 'react-icons/fa';
const AddItem = ({newItem, setNewItem, handleSubmit}) => {
  return (
    <form className='addForm' onSubmit={handleSubmit}>
        <label htmlFor="addItem">Add Item</label>
        <input 
        type="text"
        autoFocus
        placeholder='Add Item'
        required
        id='addItem'
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
        />
        <button
        className='addButton'
         type="submit"
         aria-label='Add Item'>
            <FaPlus />
        </button>
    </form>
  )
}

export default AddItem
