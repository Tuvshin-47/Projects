const colors: string[] = ['red', 'green', 'blue'];
interface Product {
  name: string;
  price: number;
}
const products: Product[] = [
  { name: 'Laptop', price: 1200 },
  { name: 'Phone', price: 800 },
  { name: 'Tablet', price: 500 },
];
export function arrayForEach() {
  // for each
  colors.forEach((color, index) => {
    console.log(`${index}: ${color}`);
  });

  // for each products
  products.forEach((product) => {
    console.log(`${product.name} costs ${product.price}`);
  });
}

export function differenceArrayMethods() {
  const numbers: number[] = [1, 3, 4, 5, 6];
  // for each
  const result = numbers.forEach((number) => {
    return number + 1;
  });
  console.log(result);

  // map
  const resultOfMap = numbers.map((number) => number + 1);
  console.log(JSON.stringify(resultOfMap));

  const onlyOddNumbers = numbers.map((number) => {
    if (number % 2 !== 0) {
      return number;
    } else {
      return undefined;
    }
  });
  console.log(JSON.stringify(onlyOddNumbers)); // [1,3,,5,]

  // filter
  const resultOfFilter = numbers.filter((number) => number % 2 !== 0);
  console.log(JSON.stringify(resultOfFilter)); // [1, 3, 5]
}
