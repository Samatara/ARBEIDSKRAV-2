import { useState } from 'react'
import AddForm from './components/AddForm'
import ShoppingList from './components/ShoppingList'
import './App.css'

function App() {

  const [items, setItems] = useState([
    { id: 1, name: "Melk", quantity: 2, purchased: false },
    { id: 2, name: "Egg", quantity: 1, purchased: true },
  ]);
  return (
    <main>
      <h1>Shopping List</h1>
      <AddForm />
      <ShoppingList items={items} />
    </main>
  )
}

export default App
