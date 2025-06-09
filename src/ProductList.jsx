
export const ProductList = ({ searched }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
      <h1 className="text-3xl text-blue-600 font-bold">
        Listado de productos:
      </h1>

      {searched?.length === 0 ? (
        <p className="text-gray-500 italic">
          No hay resultados que coincidan con tu búsqueda
        </p>
      ) : (
        <div
          key={searched.length}
          className="grid grid-cols-2 md:grid-cols-4">
          {searched.map((product) => (
            <div key={product.id} className="border p-4 m-2">
              <h2 className="text-lg font-semibold">
                Producto: {product.title}
              </h2>
              <p>${product.price}</p>
              <img
                src={product.thumbnail}
                alt={product.description}
                className="mt-2 w-full h-40 object-contain"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
