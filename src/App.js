import { useEffect, useState } from "react";
import Header from "./components/Header";

function App() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const fetchProducts = async () => {
    const response = await fetch("https://dummyjson.com/products?limit=100");
    const data = await response.json();

    if (data && data.products) {
      setProducts(data.products);
    }
  };

  const selectPageHandler = (selectedPage) => {
    if (
      selectedPage >= 1 &&
      selectedPage <= products.length / 10 &&
      selectedPage !== page
    )
      setPage(selectedPage);
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <>
      <Header />
      <div className="max-h-screen mt-5 px-8 md:px-16 ">
        {products.length > 0 && (
          <div className="grid grid-cols-1 py-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 2xl:grid-cols-4">
            {products.slice(page * 10 - 10, page * 10).map((product) => (
              <div
                className="bg-neutral-100 rounded-md p-3 m-3 hover:scale-105 cursor-pointer transition "
                key={product.id}
              >
                <h2 className="text-lg py-1 font-bold text-red-900">
                  {product.title}
                </h2>
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="product__img p-2  rounded-md"
                />
                <div className="flex flex-row items-center justify-between">
                  <span className="text-slate-400 py-2">
                    {product.discountPercentage} % Offer
                  </span>
                  <span className="text-slate-700 py-2">₹ {product.price}</span>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="px-1 mx-auto w-full md:w-3/4">
          <div className="flex flex-col  items-center justify-center  py-5 overflow-hidden">
            {products.length > 0 && (
              <nav className="px-10">
                <ul className="inline-flex -space-x-px ">
                  <li>
                    <span
                      onClick={() => selectPageHandler(page - 1)}
                      className={`px-2 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-slate-500 hover:text-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white cursor-pointer ${
                        page > 1
                          ? " "
                          : "cursor-not-allowed hover:bg-gray-50 hover:text-red-200"
                      }`}
                    >
                      Pre
                    </span>
                  </li>

                  <li>
                    {[...Array(products.length / 10)].map((_, i) => {
                      return (
                        <span
                          onClick={() => selectPageHandler(i + 1)}
                          className={` px-2 py-2 leading-tight cursor-pointer text-gray-500 bg-white border border-gray-300 hover:bg-slate-500 hover:text-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white  ${
                            page === i + 1
                              ? "bg-slate-500 border-1 border-slate-500 text-white"
                              : ""
                          }`}
                        >
                          {i + 1}
                        </span>
                      );
                    })}
                  </li>
                  <li>
                    <span
                      onClick={() => selectPageHandler(page + 1)}
                      className={`px-2 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-slate-500 hover:text-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white cursor-pointer ${
                        page < products.length / 10
                          ? " "
                          : "cursor-not-allowed hover:bg-gray-50 hover:text-red-200"
                      }`}
                    >
                      Next
                    </span>
                  </li>
                </ul>
              </nav>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
