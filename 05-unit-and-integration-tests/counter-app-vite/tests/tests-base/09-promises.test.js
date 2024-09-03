import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas";

describe("Tests in 09-promises", () => {
  test("getHeroByIdAsync should return a hero", (done) => {
    const id = 1;

    getHeroeByIdAsync(id).then((hero) => {
      expect(hero).toEqual({
        id: 1,
        name: "Batman",
        owner: "DC",
      });

      done();
    });
  });

  test("getHeroByIdAsync should return an error if hero does not exist", (done) => {
    const id = 100;

    getHeroeByIdAsync(id)
      .then((hero) => {
        expect(hero).toBeFalsy();
        done();
      })
      .catch((error) => {
        expect(error).toBe("Couldnt find the hero: " + id);
        done();
      });
  });
});
