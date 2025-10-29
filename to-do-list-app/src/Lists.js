import React from 'react';
import LineItems from './LineItems';

const Lists = ({ items, handleCheck, handleDelete, handleEdit }) => {
  return (
    <main>
      {items.length ? (
        <ul>
          {items.map((item) => (
            <LineItems
              key={item.id}
              item={item}
              handleCheck={handleCheck}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
            />
          ))}
        </ul>
      ) : (
        <p style={{ marginTop: '2rem' }}>Your list is empty.</p>
      )}
    </main>
  );
};

export default Lists;
