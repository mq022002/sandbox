import BaseLayout from "@/components/BaseLayout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <div style={{ overflowX: "hidden" }}>
      <AnimatePresence
        mode="wait"
        initial={false}
        onExitComplete={() => window.scrollTo(0, 0)}
      >
        <BaseLayout key={router.asPath}>
          <Component {...pageProps} />
        </BaseLayout>
      </AnimatePresence>
    </div>
  );
}
