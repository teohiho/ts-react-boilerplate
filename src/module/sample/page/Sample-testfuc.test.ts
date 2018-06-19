function sum(num1: number, num2: number) {
  return num1 + num2
}

it('sums numbers', () => {
  expect(sum(1, 2)).toEqual(3)
  expect(sum(2, 2)).toEqual(4)
})
