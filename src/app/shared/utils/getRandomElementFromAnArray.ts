export const getRandomElementFromArray = <Type>(arr: Array<Type>) => {
  return arr[Math.floor(Math.random() * arr.length)];
};
