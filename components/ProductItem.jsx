export const ProductItem = ({ product }) => {
  return (
    <div key={product.id} className="border p-4 m-2">
      <h2 className="text-lg font-semibold">Producto: {product.title}</h2>
      <h4 className="text-lg font-semibold">Categoria: {product.category}</h4>
      <p>${product.price} (☆ {product.rating})</p>
      <img src={product.thumbnail} alt={product.description} className="mt-2 w-full h-40 object-contain" />
    </div>
  );
};
