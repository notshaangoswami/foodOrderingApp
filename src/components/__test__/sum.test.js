import sum from "../sum";

test("Sum func should calculate sum", () => {
  const ans = sum(3, 7);

  //asertion
  expect(ans).toBe(10);
});
