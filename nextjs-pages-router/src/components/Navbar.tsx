import Link from "next/link";
import { useRouter } from "next/router";
import { useCallback, useRef, useState, useEffect } from "react";
import { useProductContext } from "@/contexts/ProductContext";
import { getCache, setCache } from "@/utils/cache";

export default function Navbar() {
  const navLinkClasses = "hover:text-white";
  const router = useRouter();
  const { setProducts, setPrices } = useProductContext();
  const [isPrefetching, setIsPrefetching] = useState(false);

  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const fetchData = useCallback(async () => {
    try {
      setIsPrefetching(true);
      const productsResponse = await fetch("/api/get/products");
      const productsData = await productsResponse.json();
      const products = productsData.products;
      setCache("products_cache", products);
      setProducts(products);

      const pricesResponse = await fetch("/api/get/prices");
      const pricesData = await pricesResponse.json();
      const prices = pricesData.prices;
      setCache("prices_cache", prices);
      setPrices(prices);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setIsPrefetching(false);
    }
  }, [setProducts, setPrices]);

  const prefetchProducts = useCallback(() => {
    if (isPrefetching) return;

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(async () => {
      try {
        const cachedProducts = getCache<any[]>("products_cache");
        const cachedPrices = getCache<any[]>("prices_cache");

        if (cachedProducts && cachedPrices) {
          setProducts(cachedProducts.data);
          setPrices(cachedPrices.data);
          router.prefetch("/products");
        } else {
          await fetchData();
          router.prefetch("/products");
        }
      } catch (error) {
        console.error("Error prefetching data:", error);
      }
    }, 300);
  }, [router, setProducts, setPrices, fetchData, isPrefetching]);

  useEffect(() => {
    const handleFocus = () => {
      prefetchProducts();
    };

    window.addEventListener("focus", handleFocus);

    return () => {
      window.removeEventListener("focus", handleFocus);
    };
  }, [prefetchProducts]);

  return (
    <nav className="bg-slate-800 py-4">
      <div className=" flex items-center justify-between">
        <div className="text-gray-300  flex justify-around mx-auto">
          <div className="flex flex-row gap-2">
            <Link href="/" className={navLinkClasses}>
              Home
            </Link>
            <div className="cursor-default"> | </div>
            <Link
              href="/products"
              className={navLinkClasses}
              onMouseEnter={prefetchProducts}
            >
              Products
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
