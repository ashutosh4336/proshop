import ProductList from '@/components/Shared/Products/ProductList';
import { Button } from '@/components/ui/button';
import { LATEST_PRODUCT_LIMIT } from '@/constants';
import { getProducts } from '@/lib/actions/product';

export const metadata = {
  title: 'Home',
};

export default async function Home() {
  const products = await getProducts({
    sortBy: 'desc',
    limit: LATEST_PRODUCT_LIMIT,
    offset: 0,
  });

  // console.log(products);

  return (
    <section>
      <ProductList data={products} title='Newest Arrival' limit={4} />

      <div className='flex justify-center'>
        <Button>View All Products</Button>
      </div>
    </section>
  );
}
