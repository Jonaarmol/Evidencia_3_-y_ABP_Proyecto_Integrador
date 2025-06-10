export const SearchBar = ({ filterByName, filterByCategory, orderBy }) => {
  return (
    <div>
      <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
        <label className="text-3xl text-blue-600 font-bold"> Filtrar por título: </label>
        <input
          type="text"
          placeholder="Mascara, Gucci, Cat food..."
          className="border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(e) => {
            filterByName(e.target.value);
          }}
        />
      </div>

      <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
        <label className="text-3xl text-blue-600 font-bold"> Filtrar por categoria: </label>
        <input
          type="text"
          placeholder="Mascara, Gucci, Cat food..."
          className="border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(e) => {
            filterByCategory(e.target.value);
          }}
        />
      </div>

      

      <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
        <label className="text-3xl text-blue-600 font-bold"> Orden: </label>
        <select
          className="border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(e) => {
            orderBy(e.target.value);
          }}
        >
        <option value={""}>Seleccionar...</option>
        <option value={"MC"}>Mas Caro.</option>
        <option value={"MB"}>Mas Barato.</option>
        <option value={"MP"}>Mejor Puntuado.</option>
        <option value={"PP"}>Peor Puntuado.</option>

        </select>
      </div>

    </div>
  );
};
