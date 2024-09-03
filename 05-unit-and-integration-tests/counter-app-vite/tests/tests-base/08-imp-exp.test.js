import {
  getHeroeById,
  getHeroesByOwner,
} from "../../src/base-pruebas/08-imp-exp";
import heroesData from "../../src/data/heroes";

describe("Tests in 08-imp-exp", () => {
  test("getHeroeById should return a hero by ID", () => {
    const id = 1;
    const hero = getHeroeById(id);

    expect(hero).toEqual({ id: 1, name: "Batman", owner: "DC" });
  });

  test("getHeroeById should return undefined if ID doesnt exist", () => {
    const id = 100;
    const hero = getHeroeById(id);

    expect(hero).toBeFalsy();
  });

  // should return array with DC heroes
  // length == 3
  test("getHeroeById should return undefined if ID doesnt exist - DC", () => {
    const owner = "DC";
    const heroes = getHeroesByOwner(owner);

    expect(heroes.length).toEqual(3);
    expect(heroes).toEqual(heroesData.filter((hero) => hero.owner === owner));
  });

  // should return array with Marvel heroes
  // length == 2
  test("getHeroeById should return undefined if ID doesnt exist - Marvel", () => {
    const owner = "Marvel";
    const heroes = getHeroesByOwner(owner);

    expect(heroes.length).toEqual(2);
    expect(heroes).toEqual(heroesData.filter((hero) => hero.owner === owner));
  });
});
