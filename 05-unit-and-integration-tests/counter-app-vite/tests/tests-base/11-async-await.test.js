import { getImagen } from "../../src/base-pruebas/11-async-await";

describe("Tests in 11-async-await.js", () => {
  test("getImage should return the image URL", async () => {
    const url = await getImagen();
    console.log(url);

    expect(typeof url).toBe("string");
  });
});
