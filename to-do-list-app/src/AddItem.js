import React from 'react';
import { FaPlus, FaEdit } from 'react-icons/fa';

const AddItem = ({ newItem, setNewItem, handleSubmit, editItemId }) => {
  return (
    <form className="addForm" onSubmit={handleSubmit}>
      <label htmlFor="addItem">{editItemId ? 'Edit Item' : 'Add Item'}</label>
      <input
        type="text"
        autoFocus
        placeholder={editItemId ? 'Update your item...' : 'Add Item'}
        required
        id="addItem"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
      <button className="addButton" type="submit" aria-label="Add Item">
        {editItemId ? <FaEdit /> : <FaPlus />}
      </button>
    </form>
  );
};

export default AddItem;
