import React from 'react';
import { FaTrashAlt, FaEdit } from 'react-icons/fa';

const LineItems = ({ item, handleCheck, handleDelete, handleEdit }) => {
  return (
    <li className="item">
      <input
        type="checkbox"
        onChange={() => handleCheck(item.id)}
        checked={item.checked}
      />
      <label
        style={item.checked ? { textDecoration: 'line-through' } : null}
        onDoubleClick={() => handleCheck(item.id)}
      >
        {item.item}
      </label>

      <div style={{ display: 'flex', gap: '10px' }}>
        <FaEdit
          onClick={() => handleEdit(item.id)}
          role="button"
          tabIndex="0"
          style={{ color: '#00ccff', cursor: 'pointer' }}
        />
        <FaTrashAlt
          onClick={() => handleDelete(item.id)}
          role="button"
          tabIndex="0"
          style={{ color: 'red', cursor: 'pointer' }}
        />
      </div>
    </li>
  );
};

export default LineItems;
