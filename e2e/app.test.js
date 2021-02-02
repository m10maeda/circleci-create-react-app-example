describe("React App", () => {
  beforeEach(async () => {
    await page.goto("http://localhost:3000");
  });

  it("should be titled 'React App'", async () => {
    expect(await page.title()).toBe("React App");
  });
});
