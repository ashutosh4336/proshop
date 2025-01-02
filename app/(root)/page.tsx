import ProductList from '@/components/Shared/Products/ProductList';
import { Button } from '@/components/ui/button';
import sampleData from '@/db/sample-data';

export const metadata = {
  title: 'Home',
};

export default function Home() {
  // await delay(2000);

  return (
    <section>
      <ProductList
        data={sampleData.products}
        title='Featured Products'
        limit={4}
      />
      <div className='flex justify-center'>
        <Button asChild variant={'outline'}>
          View All Products
        </Button>
      </div>
    </section>
  );
}
