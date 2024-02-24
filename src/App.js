import React, { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";

// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: false },
//   { id: 2, description: "Socks", quantity: 12, packed: false },
//   { id: 3, description: "Charger", quantity: 12, packed: true },
// ];

const App = () => {
  const [items, setItem] = useState([]);
  const total_items = items.length;
  const packed_items = items.filter((item) => item.packed === true).length;
  function handleAddItem(item) {
    setItem((items) => [...items, item]);
  }
  function handleDeleteItem(id) {
    setItem((items) => items.filter((item) => item.id !== id));
  }
  function HandleCheckbox(id) {
    setItem((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  function clear() {
    setItem([]);
  }
  return (
    <div className="app">
      <Logo />
      <Form onhandleAddItem={handleAddItem} />
      <PackingList
        onHandleCheckbox={HandleCheckbox}
        onHandleDeleteItem={handleDeleteItem}
        items={items}
        onClear={clear}
      />
      <Stats total_items={total_items} packed_items={packed_items} />
    </div>
  );
};

export default App;

function Stats({ total_items, packed_items }) {
  if (!total_items) {
    return (
      <p className="stats">
        <em>Start adding some items to you're packing list</em>
      </p>
    );
  }
  const percentage = Math.round(
    (Number(packed_items) / Number(total_items)) * 100
  );
  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You got everything .Ready to go ✈️"
          : `You have ${total_items} items on your list, and you already packed ${packed_items} (${percentage}%)`}
      </em>
    </footer>
  );
}
