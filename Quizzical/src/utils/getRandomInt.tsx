function getRandomInt(min: number, max: number): number {
  min = Math.ceil(min); // Round up the minimum value
  max = Math.floor(max); // Round down the maximum value
  return Math.floor(Math.random() * (max - min + 1)) + min;
}