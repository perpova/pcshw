import 'server-only';

const apiUrl = process.env.WORDPRESS_API_URL?.replace(/\/+$/, '');

export type WooProduct = {
  id : number;
  slug: string;
  featured: boolean;
  images: {
    src: string;
  }[];
  prices: {
    price: string;
    regular_price: string;
    currency_code?: string;
    currency_minor_unit?: number;
  }
}

export async function getWooProducts():
Promise<WooProduct[]>{
  if (!apiUrl) return [];

  const response  =await fetch(
//   `${apiUrl}/wp-json/wc/store/v1/products`,
 `${apiUrl}/?rest_route=/wc/store/v1/products`,
    {
      next: { revalidate: 60},
    }
  )

  if(!response.ok){
    throw new Error(
      `WooCommerce request failed (${response.status})`
    );
  }
  return response.json()
}