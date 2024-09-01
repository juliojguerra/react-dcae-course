describe("Tests in <DemoComponent /> ", () => {
  test("This test should not fail", () => {
    // Arrange
    const message1 = "Hello World";

    // Act
    const message2 = message1.trim();

    // Assert
    expect(message1).toEqual(message2);
  });
});
