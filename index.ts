export function newFunc(a: number, b: number, coeffs: Array<number>) {
  return (coeffs[0] * a + coeffs[1]) * (coeffs[2] * b + coeffs[3]);
}

// some comment
export function newApp1(a: number, b: number) {
  return newFunc(Number(a), Number(b), [-1, 2, 1, 1]);
}

// another one
export function newApp2(a: number, b: number) {
  return newFunc(a, b, [1, -1, 1, 2]);
}

console.log(
  newApp1(Number(process.argv.slice(2)[0]), Number(process.argv.slice(2)[1]))
);
