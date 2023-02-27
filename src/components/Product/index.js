import { CustomLink } from '../utilities';
import { Product } from './Product';

export function ProductPage() {
  return (
    <>
      <Product />
      <CustomLink to="/" name="Back to Home" />
    </>
  );
}
