// Problem [1, 5, 10, 15, 24, -4, 5] array байг. Үүний элементүүдийн нийлбэрийг нь хэвлээд харуулна уу

const numbers: number[] = [1, 5, 10, 15, 24, -4, 5];

export function arrayReduce() {
  // simple way using for each
  let sum = 0;
  numbers.forEach((number) => (sum += number));
  console.log(`For Each : ${sum}`);
  // for loop usage
  sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum = sum + numbers[i];
  }
  console.log(`FOR loop: ${sum}`);
  // map usage
  sum = 0;
  numbers.map((number) => (sum = sum + number));
  console.log(`Map loop: ${sum}`);

  // reduce usage
  // sum = 0;
  sum = numbers.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
  console.log(`Reduce : ${sum}`);

  // reduce find maximum number
  let max = numbers[0];
  for (let i = 0; i < numbers.length; i++) {
    if (max <= numbers[i]) {
      max = numbers[i];
    }
  }
  console.log(`Max value is : ${max}`);
  max = numbers.reduce(
    (max, currentValue) => (currentValue <= max ? max : currentValue),
    numbers[0]
  );
  console.log(`Max value using Reduce : ${max}`);

  // counting
  const fruits: string[] = ['apple', 'banana', 'apple', 'orange'];

  interface FruitCount {
    [key: string]: number;
  }
  const fruitCount = fruits.reduce((count: FruitCount, fruit) => {
    count[fruit] = (count[fruit] || 0) + 1;
    return count;
  }, {});

  console.log(JSON.stringify(fruitCount)); // {'apple': 2, "banana": 1, orange: 1}
}
