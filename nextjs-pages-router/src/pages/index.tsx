import { useEffect } from "react";
import { useRouter } from "next/router";

export default function HomePage() {
  const router = useRouter();

  useEffect(() => {
    if (router.query.canceled === "true") {
      alert("Checkout was canceled.");
      router.push("/products");
    }

    if (router.query.success === "true") {
      alert("Checkout was successful!");
      router.push("/");
    }
  }, [router]);

  return (
    <>
      <div></div>
    </>
  );
}
