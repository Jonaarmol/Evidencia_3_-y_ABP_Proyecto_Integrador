import { ProductItem } from "./ProductItem";

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
            <ProductItem key={product.id}  product={product} />
          ))}
        </div>
      )}
    </div>
  );
};
