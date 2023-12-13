import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import { useTranslation } from "react-i18next";
import React from "react";
import App from "./app";

jest.mock("i18n", () => ({
  // this mock makes sure any components using the translate hook can use it without a warning being shown
  use: () => {
    return {};
  },
}));

jest.mock("react-i18next", () => ({
  useTranslation: jest.fn(),
}));

const tSpy = jest.fn((str) => str);
const changeLanguageSpy = jest.fn((lng: string) => new Promise(() => {}));
const useTranslationSpy = useTranslation as jest.Mock;

beforeEach(() => {
  jest.clearAllMocks();

  useTranslationSpy.mockReturnValue({
    t: tSpy,
    i18n: {
      changeLanguage: changeLanguageSpy,
      language: "en",
    },
  });
});

test("loads and displays greeting", async () => {
  render(<App />);
  const linkElement = screen.getByText(/Rick and Morty/i);
  expect(linkElement).toBeInTheDocument();
});
