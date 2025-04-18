import { useState, useEffect } from "react";

interface Price {
  id: string;
  product: string;
  unit_amount: number;
}

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [prices, setPrices] = useState<Price[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const productsResponse = await fetch("/api/get/products");
        if (!productsResponse.ok) {
          throw new Error(`HTTP error! Status: ${productsResponse.status}`);
        }
        const productsData = await productsResponse.json();
        setProducts(productsData.products);

        const pricesResponse = await fetch("/api/get/prices");
        if (!pricesResponse.ok) {
          throw new Error(`HTTP error! Status: ${pricesResponse.status}`);
        }
        const pricesData = await pricesResponse.json();
        setPrices(pricesData.prices);

        setLoading(false);
      } catch (error: any) {
        setError(error);
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  return (
    <>
      <div className="text-center text-lg font-bold underline pb-2 tracking-widest">
        PRODUCTS
      </div>
      <div className="text-center">
        {loading ? (
          <div>Loading products...</div>
        ) : error ? (
          <div>Error: {error?.message}</div>
        ) : (
          <div className="text-left">
            <ul className="py-4 px-10 rounded border mx-4">
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
                      </div>
                      <div>
                        Price:{" "}
                        {price
                          ? `$${(price.unit_amount / 100).toFixed(2)}`
                          : "Price not found"}
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
