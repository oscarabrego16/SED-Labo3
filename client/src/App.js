
import { useState } from 'react';
import './App.css';
//importamos axios, que permite las htpp
import Axios from 'axios'


function App() {
  const [productName, setProductName] = useState("");
  const [productQuantity, setQuantity] = useState(0);
  const addToDDB = () => {
    Axios.post("http://localhost:3000/insert", 
    { 
      productName: productName, 
      productQuantity: productQuantity,
     });
  };
  return (
    <div className="App">
      <h1>
        CRUD productos en BD pizzeria
      </h1>
      <label>Nombre del producto</label>
      <input type="text" onChange={(event) => {
        setProductName(event.target.value);
      }} />
      <label>Cantidad disponibles</label>
      <input type="number" onChange={(event) => {
        setQuantity(event.target.value);
      }} />
      <button onClick={addToDDB}>Agregar</button>

    </div>
  );
}

export default App;
