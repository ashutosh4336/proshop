export const delay = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));

// Convert prisma object into a regular JS object
export const prismaToObj = <T>(data: T) => JSON.parse(JSON.stringify(data));

// format number with decimal places
export const formatNumber = (num: number): string => {
  const [int, decimal] = num.toString().split('.');
  console.log({ int, decimal });
  console.log({ decimal: decimal.padEnd(2, '0') });

  const intFormatted = int.replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  return decimal
    ? `${intFormatted}.${decimal.padEnd(2, '0')}`
    : `${intFormatted}.00`;
};
