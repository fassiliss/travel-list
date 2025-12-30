import Logo from "./Components/Logo.jsx";
import Form from "./Components/Form.jsx";
import PackingList from "./Components/PackingList.jsx";
import Stats from "./Components/Stats.jsx";
import { useState } from "react";

function App() {
  const [items, setItems] = useState([]);

   function handleAddItems(item) {
     setItems((items) => [...items, item]);
   }

   function handleDeleteItems(id) {
     setItems((items) => items.filter((item) => item.id !== id));
   }

   function handleToggleItem(id) {
     setItems((items) =>
       items.map((item) =>
         item.id === id ? { ...item, packed: !item.packed } : item
       )
     );
   }


  return (
    <div className="app">
      <Logo />
      <Form onAddItem={handleAddItems} />
      <PackingList items={items} onDeleteItem={handleDeleteItems} onToggleItem={handleToggleItem} />
      <Stats />
    </div>
  );
}

export default App;
