import { useState } from "react";

function PackingList({ items, onDeleteItem, onToggleItem, onClearList }) {
    const [sortBy, setSortBy] = useState("input");
    let sortedItems;
    if (sortBy === "description") {
      sortedItems = items.slice().sort((a, b) => a.description.localeCompare(b.description));
    } else if (sortBy === "packed") {
      sortedItems = items.slice().sort((a, b) => Number(a.packed) - Number(b.packed));
    } else {
      sortedItems = items;
    }
     if (sortBy === "quantity") {
      sortedItems = items.slice().sort((a, b) => a.quantity - b.quantity);
    } else {
      sortedItems = items;
    }


  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item item={item} onDeleteItem={onDeleteItem} onToggleItem={onToggleItem} key={item.id} />
        ))}
      </ul>

      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
           <option value="input">Sort by...</option>
           <option value="description">Description</option>
           <option value="packed">Packed status</option>
           <option value="quantity">Quantity</option>
        </select>
        <button onClick={() => onClearList()}>Clear list</button>
      </div>
    </div>
  );
}
function Item({ item, onDeleteItem, onToggleItem }) {
  return (
    <li>
      <input type="checkbox" checked={item.packed} onChange={() => onToggleItem(item.id)} />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
}

export default PackingList;
