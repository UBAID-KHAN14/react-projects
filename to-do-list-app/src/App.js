import './index.css';
import AddItem from './AddItem';
import SearchItem from './SearchItem';
import Lists from './Lists';

import { useState } from 'react';
function App() {
  const [items, setItems] = useState(JSON.parse(localStorage.getItem('shoppinglist')));
  const [newItem, setNewItem] = useState('');
  const [search, setSearch] = useState('')

  const setAndSaveItems = (newItem) => {
    setItems(newItem);
    localStorage.setItem('shoppinglist', JSON.stringify(newItem));
  }
  const addItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem = {id, checked : false, item};
    const listItems = [...items, myNewItem];
    setAndSaveItems(listItems);
  }

  const handleCheck = (id) => {
    const listItems = items.map((item) => item.id === id ? { ...item, checked: !item.checked } : item);
    setAndSaveItems(listItems);

  }

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setAndSaveItems(listItems);
    
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) return;
    addItem(newItem);
    setNewItem('');
  }
  return (
    <div className='App'>
      <h1>REACT TODO LIST APP</h1>
     <AddItem 
     newItem={newItem}
     setNewItem={setNewItem}
     handleSubmit={handleSubmit}

     />
      <SearchItem
        search={search}
        setSearch={setSearch}
      />
     <Lists
       items={items.filter(item => ((item.item).toLowerCase()).includes(search.toLowerCase()))}
      setItems={setItems}
      handleCheck={handleCheck}
      handleDelete={handleDelete}

     />
    </div>
  );
}

export default App;
