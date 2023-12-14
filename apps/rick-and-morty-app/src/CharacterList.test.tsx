import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { CharacterList, Character } from "character-list";
import { fetchCharactersApi } from "api";

jest.mock("./CharacterList", () => ({
  ...jest.requireActual("./CharacterList"),
  fetchCharactersApi: jest.fn(),
}));

const mockData: { results: Character[] } = {
  results: [
    { id: 1, name: "Character 1" },
    { id: 2, name: "Character 2" },
  ],
};

describe("CharacterList component", () => {
  beforeEach(() => {
    // Reset the fetchCharactersApi mock before each test
    (fetchCharactersApi as jest.Mock).mockReset();

    // Mock the fetchCharactersApi function to resolve with the sample data
    (fetchCharactersApi as jest.Mock).mockResolvedValue(mockData.results);
  });

  it("renders characters correctly", async () => {
    render(<CharacterList doFetch={fetchCharactersApi} />);

    // Wait for characters to load
    await waitFor(() => {
      screen.debug();
      expect(screen.getByText("Rick and Morty Characters")).toBeInTheDocument();
    });
  });
});
