import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import { StatsPanel } from "./StatsPanel";
import { ProductList } from "./ProductList";

function App() {
  const [datos, setDatos] = useState([]);
  const [error, setError] = useState(null);
  const [searched, setSearched] = useState([]);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((respuesta) => {
        setDatos(respuesta.data);
        setSearched(respuesta.data.products)
      })
      .catch((error) => {
        setError(error);
      });
  }, []);

  const productsByPrice = [...(searched || [])].sort(
    (a, b) => b.price - a.price
  );
  const mostExpensiveProd = productsByPrice[0];
  const cheapestProd = [...productsByPrice].reverse()[0];
  const longTitleProds = [...(searched || [])].filter(
    (product) => product.title.length > 20
  );
  const totalFilteredPrice = Math.round(
    longTitleProds?.reduce((acc, product) => {
      return acc + (product?.price ?? 0);
    }, 0)
  );
  const averageFilteredDiscount = Math.round(
    longTitleProds?.reduce((acc, product) => {
      return acc + (product?.discountPercentage ?? 0);
    }, 2) / longTitleProds.length
  );

  const filterByName = (
    text
  )=>{
    const filteredData = 
      datos.products?.filter((prod)=>{return prod.title.toLowerCase().includes(text.toLowerCase())})
      setSearched(filteredData)
    } 

  return (
    <>
    <h1 className="text-4xl font-extrabold text-blue-800 text-center mb-6 tracking-wide uppercase"> Mercadummy </h1>
    <h2 className="text-2xl font-semibold text-gray-700 text-center mb-4 tracking-wide"> ¡Aquí encontrarás desde comida para gato hasta un nuevo sofá! </h2>
      {" "}
      {error && <p>Error: {error.message}</p>}
      <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
        <label className="text-3xl text-blue-600 font-bold"> Filtrar por título: </label>
        <input 
         type="text"
  placeholder="Mascara, Gucci, Cat food..."
  className="border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        onChange={(e)=>{filterByName(e.target.value)}}/>
      </div>
      <StatsPanel 
      mostExpensiveProd={mostExpensiveProd}
      cheapestProd={cheapestProd}
      longTitleProds={longTitleProds}
      totalFilteredPrice={totalFilteredPrice}
      averageFilteredDiscount={averageFilteredDiscount} />
      <ProductList searched={searched} />
    </>
  );
}

export default App;
