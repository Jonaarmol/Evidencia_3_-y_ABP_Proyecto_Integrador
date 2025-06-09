export const StatsPanel = ({
  mostExpensiveProd,
  cheapestProd,
  longTitleProds,
  totalFilteredPrice,
  averageFilteredDiscount,
}) => {
return (
  <div  className="bg-gray-100 p-6 rounded-xl shadow-md">
    <h1 className="text-3xl text-blue-600 font-bold">
      Estadísticas generales:
    </h1>

    <h2>
      Producto más caro:{" "}
      {mostExpensiveProd
        ? `${mostExpensiveProd.title} - $${mostExpensiveProd.price}`
        : "La búsqueda no arrojó resultados."}
    </h2>

    <h2>
      Producto más económico:{" "}
      {cheapestProd
        ? `${cheapestProd.title} - $${cheapestProd.price}`
        : "La búsqueda no arrojó resultados."}
    </h2>

    <h2>
      Cantidad de productos con más de 20 caracteres:{" "}
      {typeof longTitleProds?.length === "number" && longTitleProds.length > 0
        ? longTitleProds.length
        : "La búsqueda no arrojó resultados."}
    </h2>

    <h2>
      Precio de los productos filtrados:{" "}
      {typeof totalFilteredPrice === "number" && isFinite(totalFilteredPrice) && totalFilteredPrice > 0
        ? `$${totalFilteredPrice}`
        : "La búsqueda no arrojó resultados."}
    </h2>

    <h2>
      Promedio de los descuentos de los productos filtrados:{" "}
      {typeof averageFilteredDiscount === "number" && isFinite(averageFilteredDiscount) && averageFilteredDiscount > 0
        ? `${averageFilteredDiscount.toFixed(2)}%`
        : "La búsqueda no arrojó resultados."}
    </h2>
  </div>
);

};
