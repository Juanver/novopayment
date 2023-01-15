import { mockFetch } from "../fetch";

describe("mockFetch", () => {
  it("mocks fetch with only data", async () => {
    expect.assertions(2);
    mockFetch({ hello: "world" });
    const result = await (global as any).fetch("/api");
    expect(result.json()).resolves.toEqual({
      hello: "world",
    });
    expect(result.clone().json()).resolves.toEqual({ hello: "world" });
  });
});
