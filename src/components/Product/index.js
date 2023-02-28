import { CustomLink } from '../utilities';
import { Product } from './Product';

export function ProductPage({ data, isLoading, isError, dispatch }) {
  return (
    <>
      <Product
        data={data}
        isError={isError}
        isLoading={isLoading}
        dispatch={dispatch}
      />
      <CustomLink to="/" name="Back Home" />
    </>
  );
}
