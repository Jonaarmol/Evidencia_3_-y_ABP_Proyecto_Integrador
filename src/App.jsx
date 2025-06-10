import axios from "axios";
import { useEffect, useRef, useState } from "react";
import "./App.css";
import { DownloadJSON } from "./components/DownloadJSON ";
import { Graphs } from "./components/Graphs";
import { ProductList } from "./components/ProductList";
import { SearchBar } from "./components/SearchBar";
import { StatsPanel } from "./components/StatsPanel";

function App() {
  const [datos, setDatos] = useState([]);
  const [error, setError] = useState(null);
  const [searched, setSearched] = useState([]);

  const [basicStats, setBasicStats] = useState({});
  const [advanceStats, setAdvanceStats] = useState({});

  const [titleFilter, seTitleFilter] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [orderBy, setOrderBy] = useState("");
  const [graphCategoryData, setGraphCategoryData] = useState([]);
  const [graphPriceData, setGraphPriceData] = useState([]);
  const [graphStockData, setGraphStockData] = useState([]);
  

  const divRef = useRef(null);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products?limit=100")
      .then((respuesta) => {
        setDatos(respuesta.data);
        setSearched(respuesta.data.products);
      })
      .catch((error) => {
        setError(error);
      });
  }, []);

  useEffect(() => {
    filterData(titleFilter, categoryFilter, orderBy);
  }, [titleFilter, categoryFilter, orderBy]);

  useEffect(() => {
    calculateBasicStats();
    calculateAdvanceStats();
    calculateGraphData();
  }, [searched]);

  const calculateBasicStats = () => {
    const productsByPrice = [...(searched || [])].sort((a, b) => b.price - a.price);
    const mostExpensiveProd = productsByPrice[0];
    const cheapestProd = [...productsByPrice].reverse()[0];
    const longTitleProds = [...(searched || [])].filter((product) => product.title.length > 20);
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
    setBasicStats({
      mostExpensiveProd,
      cheapestProd,
      longTitleProds,
      totalFilteredPrice,
      averageFilteredDiscount,
    });
  };

  const calculateAdvanceStats = () => {
    const data = [...(searched || [])];

    const avgPrice = Math.round(data.reduce((acc, product) => acc + (product?.price ?? 0), 0) / searched.length, 2);
    const avgRating = Math.round(data.reduce((acc, product) => acc + (product?.rating ?? 0), 0) / searched.length, 2);

    const priceList = data.map((p) => p.price);

    const minPrice = Math.min(...priceList) || 0;

    const maxPrice = Math.max(...priceList) || 0;

    const stockOver50 = data.filter((p) => p.stock >= 50).length || 0;

    const ratingOver4_5 = data.filter((p) => p.rating >= 4.5).length || 0;

    const categories = data.reduce((acc, product) => {
      if (!acc.includes(product.category)) {
        acc.push(product.category);
      }
      return acc;
    }, []);
    const statsByCategories = [];

    for (const category of categories) {
      const dataCategory = data.filter((p) => p.category == category);
      const avgPriceCategory = Math.round(dataCategory.reduce((acc, product) => acc + (product?.price ?? 0), 0) / dataCategory.length, 2);
      const priceListCategory = dataCategory.map((p) => p.price);

      const minPriceCategory = Math.min(...priceListCategory) || 0;

      const maxPriceCategory = Math.max(...priceListCategory) || 0;

      const avgRatingCategory = Math.round(dataCategory.reduce((acc, product) => acc + (product?.rating ?? 0), 0) / dataCategory.length, 2);

      statsByCategories.push({ category, avgPriceCategory, minPriceCategory, maxPriceCategory, avgRatingCategory });
    }

    setAdvanceStats({ avgPrice, avgRating, minPrice, maxPrice, stockOver50, ratingOver4_5, statsByCategories });
  };

  const calculateGraphData = () => {
    const data = [...(searched || [])];

    const categories = data.reduce((acc, product) => {
      if (!acc.includes(product.category)) {
        acc.push(product.category);
      }
      return acc;
    }, []);

    const graphCategories = [];

    for (const category of categories) {
      const dataCategory = data.filter((p) => p.category == category);

      const count = dataCategory.length;

      graphCategories.push({ category, count });
    }

    setGraphCategoryData(graphCategories);
    setGraphPriceData(
      data.map((P) => {
        return {
          name: P.title,
          price: P.price * Math.random(),
        };
      })
    );

    setGraphStockData(
      data.map((P) => {
        return {
          name: P.title,
          stock: P.stock,
        };
      })
    );
  };

  const filterData = (title, category, order) => {
    const filteredData =
      datos.products?.filter((prod) => {
        return prod.title.toLowerCase().includes(title.toLowerCase()) && prod.category.toLowerCase().includes(category.toLowerCase());
      }) || [];

    switch (order) {
      case "MC":
        filteredData.sort((a, b) => b.price - a.price);
        break;
      case "MB":
        filteredData.sort((a, b) => a.price - b.price);
        break;
      case "MP":
        filteredData.sort((a, b) => b.rating - a.rating);
        break;
      case "PP":
        filteredData.sort((a, b) => a.rating - b.rating);
        break;
      default:
        filteredData.sort((a, b) => b.id - a.id);
        break;
    }

    setSearched(filteredData);
  };

  const handleTheme = () => {
    divRef.current.classList.toggle("dark");
  };

  return (
    <div ref={divRef} className="dark:bg-stone-950">
      <button onClick={handleTheme} className="dark:text-amber-50">
        Cambiar tema
      </button>
      <h1 className="text-4xl font-extrabold text-blue-800 text-center mb-6 tracking-wide uppercase dark:text-red-800"> Mercadummy </h1>
      <h2 className="text-2xl font-semibold text-gray-700 text-center mb-4 tracking-wide"> ¡Aquí encontrarás desde comida para gato hasta un nuevo sofá! </h2> {error && <p>Error: {error.message}</p>}
      <SearchBar filterByName={seTitleFilter} filterByCategory={setCategoryFilter} orderBy={setOrderBy} />
      <StatsPanel basicStats={basicStats} advanceStats={advanceStats} />
      <Graphs graphCategoryData={graphCategoryData} graphPriceData={graphPriceData} graphStockData={graphStockData} />
      <DownloadJSON data={searched} fileName={"data"}  />
      <ProductList searched={searched} />
    </div>
  );
}

export default App;
