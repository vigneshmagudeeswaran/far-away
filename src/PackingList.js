import { useState } from "react";
import Item from "./Item";

export default function PackingList({
  onHandleDeleteItem,
  items,
  onHandleCheckbox,
  onClear,
}) {
  const [sortby, setSortBy] = useState("input");
  let sortedItems;
  if (sortby === "input") sortedItems = items;
  if (sortby === "Description")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  if (sortby === "packed")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            onHandleCheckbox={onHandleCheckbox}
            onHandleDeleteItem={onHandleDeleteItem}
            item={item}
            key={item.id}
          />
        ))}
      </ul>
      <div className="actions">
        <select value={sortby} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">input</option>
          <option value="Description">Description</option>
          <option value="packed">packed</option>
        </select>
        <button onClick={onClear}>clear all items</button>
      </div>
    </div>
  );
}
