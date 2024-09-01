import { getSaludo } from "../../src/base-pruebas/02-template-string";

describe("Tests in 02-template-string", () => {
  test("Greeting should return 'Hi Julio'", () => {
    const name = "Julio";
    const message = getSaludo(name);

    expect(message).toBe(`Hi ${name}!`);
  });
});
