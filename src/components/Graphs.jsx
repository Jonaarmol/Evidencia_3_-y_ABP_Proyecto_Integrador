import { Bar, BarChart, CartesianGrid, Legend, Line, LineChart, Pie, PieChart, Rectangle, Tooltip, XAxis, YAxis } from "recharts";

export const Graphs = ({ graphCategoryData, graphPriceData, graphStockData }) => {
  return (
    <div className="bg-gray-100 p-6 rounded-xl shadow-md">
      <h1 className="text-3xl text-blue-600 dark:text-red-600 font-bold">Graficos: </h1>
      <div className="grid grid-cols-3 grid-rows-1 gap-1">
        <div>
          <BarChart
            width={500}
            height={300}
            data={graphCategoryData}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="category" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="count" fill="#8884d8" activeBar={<Rectangle fill="pink" stroke="blue" />} />
          </BarChart>
        </div>
        <div>
          <LineChart
            width={500}
            height={300}
            data={graphPriceData}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="price" dataKey="price" stroke="#8884d8" activeDot={{ r: 8 }} />
          </LineChart>
        </div>
        <div>
          <PieChart width={400} height={400}>
            <Pie data={graphStockData} dataKey="stock" fill="#8884d8" label />
            <Tooltip />
          </PieChart>
        </div>
      </div>
    </div>
  );
};
