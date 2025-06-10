import { useState } from "react";

export const StatsPanel = ({ basicStats, advanceStats }) => {
  const [hidden, setHiden] = useState(false);

  const handleVisibilityStat = () => {
    setHiden((prev) => !prev);
  };
  return (
    <div className="bg-gray-100 p-6 rounded-xl shadow-md">
      <div>
        <button
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 focus:outline-none dark:focus:ring-red-800"
          onClick={handleVisibilityStat}
        >
          Ocultar/ Mostrar Estadistocas
        </button>
      </div>
      {!hidden && (
        <>
          <div>
            <h1 className="text-3xl text-blue-600 dark:text-red-600 font-bold">Estadísticas generales:</h1>

            <h2>Producto más caro: {basicStats?.mostExpensiveProd ? `${basicStats?.mostExpensiveProd.title} - $${basicStats?.mostExpensiveProd.price}` : "La búsqueda no arrojó resultados."}</h2>

            <h2>Producto más económico: {basicStats?.cheapestProd ? `${basicStats?.cheapestProd.title} - $${basicStats?.cheapestProd.price}` : "La búsqueda no arrojó resultados."}</h2>

            <h2>Cantidad de productos con más de 20 caracteres: {basicStats?.longTitleProds?.length > 0 ? basicStats?.longTitleProds.length : "La búsqueda no arrojó resultados."}</h2>

            <h2>Precio de los productos filtrados: {basicStats?.totalFilteredPrice > 0 ? `$${basicStats?.totalFilteredPrice}` : "La búsqueda no arrojó resultados."}</h2>

            <h2>Promedio de los descuentos de los productos filtrados: {basicStats?.averageFilteredDiscount > 0 ? `${basicStats?.averageFilteredDiscount.toFixed(2)}%` : "La búsqueda no arrojó resultados."}</h2>
          </div>

          <div>
            <h1 className="text-3xl text-blue-600 dark:text-red-600 font-bold">Estadísticas Avanzadas:</h1>

            <h2>Precio promedio: ${advanceStats.avgPrice} </h2>
            <h2>Precio máximo: ${advanceStats.maxPrice}</h2>
            <h2>Precio mínimo: ${advanceStats.minPrice}</h2>
            <h2>{"Cantidad de productos con stock > 50"}: {advanceStats.stockOver50} producto/s</h2>
            <h2>{"Cantidad de productos rating > 4.5"}: {advanceStats.ratingOver4_5} producto/s</h2>
            {advanceStats?.statsByCategories?.map(p=> (<h2 key={p.category}>Precio promedio por categoría ({p.category}): ${p.avgPriceCategory}</h2>))}
            {advanceStats?.statsByCategories?.map(p=> (<h2 key={p.category}>Precio mas caro por categoría ({p.category}): ${p.maxPriceCategory}</h2>))}
            {advanceStats?.statsByCategories?.map(p=> (<h2 key={p.category}>Precio mas barato por categoría ({p.category}): ${p.minPriceCategory}</h2>))}
            <h2>Rating promedio: ☆{advanceStats.avgRating} </h2>
            
            {advanceStats?.statsByCategories?.map(p=> (<h2 key={p.category}>Precio mas barato por categoría ({p.category}): ☆{p.avgRatingCategory}</h2>))}
          </div>
        </>
      )}
    </div>
  );
};
