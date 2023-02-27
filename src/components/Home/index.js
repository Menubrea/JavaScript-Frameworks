import { Products } from './Products';
import { Hero } from './Hero';
import { ProductSearch } from './Search';

export function HomePage({ data, isLoading, isError }) {
  return (
    <>
      <Hero />
      <ProductSearch data={data} isLoading={isLoading} isError={isError} />
      <Products data={data} isLoading={isLoading} isError={isError} />
    </>
  );
}
