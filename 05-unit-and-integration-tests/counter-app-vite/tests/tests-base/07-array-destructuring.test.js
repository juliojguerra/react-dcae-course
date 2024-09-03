import { returnArray } from "../../src/base-pruebas/07-deses-arr";

describe("Tests in 07-array-destructuring.test.js", () => {
  test("it should return a string and a number", () => {
    const [letters, numbers] = returnArray();

    expect(letters).toBe("ABC");
    expect(numbers).toBe(123);

    expect(typeof letters).toBe("string");
    expect(typeof numbers).toBe("number");
  });
});
