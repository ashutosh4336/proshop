import { getProductBySlug } from '@/lib/actions/product';
import { notFound } from 'next/navigation';

export default async function ProductDetails(props: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await props.params;
  const product = await getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return (
    <div>
      ProductDetails ::
      <pre>{JSON.stringify(product, null, 2)}</pre>
    </div>
  );
}
