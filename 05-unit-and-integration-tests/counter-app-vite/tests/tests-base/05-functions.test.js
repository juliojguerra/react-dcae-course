import { getActiveUser, getUser } from "../../src/base-pruebas/05-funciones";

describe("tests in 05-functions", () => {
  test("getUser should return an object", () => {
    const testUser = {
      uid: "ABC123",
      username: "jwar2455",
    };

    const user = getUser();

    expect(testUser).toEqual(user);
  });

  test("getActiveUser should return an object", () => {
    const name = "Julio";

    const testUser = {
      uid: "ABC567",
      username: name,
    };

    const user = getActiveUser(name);

    expect(testUser).toEqual(user);
  });
});
