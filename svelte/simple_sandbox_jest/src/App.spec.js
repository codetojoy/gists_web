import { cleanup, render, waitFor, fireEvent } from "@testing-library/svelte";

import App from "./App.svelte";

describe("App", () => {
  const NUM_SEED_ITEMS = 20;
  const NUM_NO_ITEMS = 0;

  afterEach(cleanup);

  function expectItemCount(count) {
    return waitFor(() => {
      const paragraphs = document.querySelectorAll("p");
      expect(paragraphs).not.toBeNull();
      expect(paragraphs.length).toBe(count);
    });
  }

  function expectText(getByText, text) {
    return waitFor(() => {
      expect(getByText(text)).not.toBeNull();
    });
  }

  test("should render basic", async () => {
    // test
    const { getByText } = render(App, { name: "MyApp" });

    await expectItemCount(NUM_SEED_ITEMS);
  });

  test("should add an item", async () => {
    const { getByText, getByTestId } = render(App, { name: "MyApp" });

    // test
    const button = getByTestId("add-random");
    fireEvent.click(button);

    await expectItemCount(NUM_SEED_ITEMS);
    await expectText(getByText, "AutoGen1");
  });

  test("should clear new items on reset", async () => {
    const { getByTestId } = render(App, { name: "MyApp" });

    const randomButton = getByTestId("add-random");
    fireEvent.click(randomButton);

    const resetButton = getByTestId("reset");
    fireEvent.click(resetButton);

    await expectItemCount(NUM_SEED_ITEMS);
  });

  test("should clear all items", async () => {
    const { getByTestId } = render(App, { name: "MyApp" });

    // test
    const clearAllButton = getByTestId("clear-all");
    fireEvent.click(clearAllButton);

    await expectItemCount(NUM_NO_ITEMS);
  });
});
