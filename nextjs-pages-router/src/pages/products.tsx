import { useState, useEffect } from "react";
import { useProductContext } from "@/contexts/ProductContext";

interface Price {
  id: string;
  product: string;
  unit_amount: number;
}

export default function ProductsPage() {
  const {
    products: contextProducts,
    prices: contextPrices,
    setProducts,
    setPrices,
  } = useProductContext();
  const [products, setProductsState] = useState(contextProducts);
  const [prices, setPricesState] = useState<Price[]>(contextPrices);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    if (contextProducts.length === 0 || contextPrices.length === 0) {
      async function fetchData() {
        try {
          const productsResponse = await fetch("/api/get/products");
          if (!productsResponse.ok) {
            throw new Error(`HTTP error! Status: ${productsResponse.status}`);
          }
          const productsData = await productsResponse.json();
          setProducts(productsData.products);
          setProductsState(productsData.products);

          const pricesResponse = await fetch("/api/get/prices");
          if (!pricesResponse.ok) {
            throw new Error(`HTTP error! Status: ${pricesResponse.status}`);
          }
          const pricesData = await pricesResponse.json();
          setPrices(pricesData.prices);
          setPricesState(pricesData.prices);

          setLoading(false);
        } catch (error: any) {
          setError(error);
          setLoading(false);
        }
      }

      fetchData();
    } else {
      setProductsState(contextProducts);
      setPricesState(contextPrices);
      setLoading(false);
    }
  }, [contextProducts, contextPrices, setProducts, setPrices]);

  return (
    <>
      <div className="text-center text-lg font-bold tracking-widest">
        PRODUCTS
      </div>
      <div className="border-b mx-4 my-2"></div>
      <div className="text-center">
        {loading ? (
          <div>Loading products...</div>
        ) : error ? (
          <div>Error: {error?.message}</div>
        ) : (
          <div className="text-left ">
            <ul className="py-4 px-10 rounded border mx-4 hover:shadow-lg">
              {products.map((product: any) => {
                const price = prices.find(
                  (price: any) => price.product === product.id,
                );

                return (
                  <li key={product.id}>
                    <div className="flex justify-between items-center">
                      <div>
                        <div>{product.name}</div>
                        <div>{product.description}</div>
                        <div>
                          Price:{" "}
                          {price
                            ? `$${(price.unit_amount / 100).toFixed(2)}`
                            : "Price not found"}
                        </div>
                      </div>
                      <div>
                        {price ? (
                          <form
                            action="/api/post/checkout/session"
                            method="POST"
                          >
                            <input
                              type="hidden"
                              name="priceId"
                              value={price.id}
                            />
                            <button
                              type="submit"
                              className="cursor-pointer hover:text-blue-500"
                            >
                              Checkout
                            </button>
                          </form>
                        ) : (
                          <div>Price not available</div>
                        )}
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    </>
  );
}
