import { cn } from '@/lib/utils';

export default function ProductPrice({
  value,
  className,
}: {
  value: number;
  className?: string;
}) {
  // Ensure to Decimal places
  const stringValue = value.toFixed(2);

  // Get the Int/ float
  const [intValue, floatValue] = stringValue.split('.');

  return (
    <p className={cn('text-2xl font-bold', className)}>
      <span className='text-sm align-super'>&#8377;</span>
      {intValue}
      <span className='text-xs align-super'>.{floatValue}</span>
    </p>
  );
}
