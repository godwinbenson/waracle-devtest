import { cleanup, render, screen } from "@testing-library/react";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import * as React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { Home } from "../routes/Home";
import configureStore from "../store/store";
import { mockGetImages } from "../test-util/mockGetImages";

const mockHistoryPush = jest.fn();

const mock = new MockAdapter(axios);

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useHistory: () => ({
    push: mockHistoryPush,
  }),
}));

const store = configureStore();

describe("Images", () => {
  afterEach(() => {
    cleanup();
    mock.restore();
  });

  it("should render a list of images", async () => {
    // Test successful response
    mockGetImages(mock);
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      </Provider>
    );

    // Loading initially
    await screen.findByText("Loading images...");

    // Should render both of the cat cards
    await expect(screen.getAllByTestId("cat-card").length).toBe(2);
  });

  it("should render the error message", async () => {
    // Test successful response
    mockGetImages(mock, { error: true });
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      </Provider>
    );

    // Loading initially
    await screen.findByText(
      "An error occurred fetching the list of images. Please try again later"
    );
  });
});
