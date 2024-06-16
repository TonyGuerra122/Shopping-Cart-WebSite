export interface IProduct {
  id: string;
  title: string;
  price: number;
  thumbnail: string;
}

const fetchProducts = async (query: string): Promise<IProduct[]> => {
  const response = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${query}`);
  const data = await response.json();

  return data.results;
};

export default fetchProducts;
