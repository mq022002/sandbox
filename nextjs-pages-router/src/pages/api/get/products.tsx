import Stripe from "stripe";
import type { NextApiRequest, NextApiResponse } from "next";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === "GET") {
    try {
      const products = await stripe.products.list({
        limit: 10,
      });

      res.status(200).json({ products: products.data });
    } catch (error: any) {
      console.error("Error fetching products:", error);
      res.status(500).json({ error: error.message });
    }
  } else {
    res.setHeader("Allow", "GET");
    res.status(405).end("Method Not Allowed");
  }
}
