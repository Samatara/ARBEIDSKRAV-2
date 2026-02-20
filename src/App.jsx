import { useState } from "react";
import AddForm from "./components/AddForm";
import ShoppingList from "./components/ShoppingList";
import "./App.css";

function App() {
  const [items, setItems] = useState([
    { id: 1, name: "Melk", quantity: 2, purchased: false },
    { id: 2, name: "Egg", quantity: 1, purchased: true },
  ]);

  function togglePurchased(id) {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, purchased: !item.purchased }
          : item
      )
    );
  }

  function addItem(name, quantity) {
    const newItem = {
      id: Date.now(),
      name,
      quantity: Number(quantity),
      purchased: false,
    };

    setItems((prev) => [newItem, ...prev]);
  }

  function updateQuantity(id, newQuantity) {
    if (newQuantity < 1) return;

    setItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: Number(newQuantity) }
          : item
      )
    );
  }

  return (
    <main>
      <h1>Shopping List</h1>

      <ShoppingList
        items={items}
        onToggle={togglePurchased}
        updateQuantity={updateQuantity}
      />

      <AddForm addItem={addItem} />
    </main>
  );
}

export default App;
