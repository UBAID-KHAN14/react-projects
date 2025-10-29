import './index.css';
import AddItem from './AddItem';
import SearchItem from './SearchItem';
import Lists from './Lists';
import { useState } from 'react';

function App() {
  const [items, setItems] = useState(() => {
    const saved = localStorage.getItem('shoppinglist');
    return saved ? JSON.parse(saved) : [];
  });

  const [newItem, setNewItem] = useState('');
  const [search, setSearch] = useState('');
  const [editItemId, setEditItemId] = useState(null); // ✅ track which item is being edited

  const setAndSaveItems = (newItems) => {
    setItems(newItems);
    localStorage.setItem('shoppinglist', JSON.stringify(newItems));
  };

  const addItem = (itemText) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const newItemObj = { id, checked: false, item: itemText };
    const listItems = [...items, newItemObj];
    setAndSaveItems(listItems);
  };

  const handleCheck = (id) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setAndSaveItems(listItems);
  };

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setAndSaveItems(listItems);
  };

  const handleEdit = (id) => {
    const editItem = items.find((item) => item.id === id);
    setNewItem(editItem.item);
    setEditItemId(id);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) return;

    if (editItemId) {
      // ✅ Update existing item
      const updatedItems = items.map((item) =>
        item.id === editItemId ? { ...item, item: newItem } : item
      );
      setAndSaveItems(updatedItems);
      setEditItemId(null);
    } else {
      // ✅ Add new item
      addItem(newItem);
    }

    setNewItem('');
  };

  return (
    <div className="App">
      <h1>📝 React To-Do List App</h1>

      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
        editItemId={editItemId}
      />

      <SearchItem search={search} setSearch={setSearch} />

      <Lists
        items={items.filter((item) =>
          item.item.toLowerCase().includes(search.toLowerCase())
        )}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
        handleEdit={handleEdit} // ✅ pass edit function
      />
    </div>
  );
}

export default App;
