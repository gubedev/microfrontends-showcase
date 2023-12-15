import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { AppSwitcher } from "./AppSwitcher";
import { AppItem } from "types";
import { ThemeProvider } from "styled-components";
import { GlobalStyles, defaultTheme } from "ui-lib";

// Mocking the onAppChange function
const mockOnAppChange = jest.fn();

// Test to ensure that onAppChange is called with the Rick and Morty app when the button is clicked
test("should call onAppChange with Rick and Morty app when button is clicked", () => {
  // Rendering the AppSwitcher component with the mocked onAppChange function

  const { getByTestId } = render(
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <AppSwitcher onAppChange={mockOnAppChange} />
    </ThemeProvider>
  );

  // Locating the button and simulating a click event
  fireEvent.click(getByTestId("app-switcher-rick-and-porty-test-id"));

  // Verifying that the onAppChange function was called with the correct parameter
  expect(mockOnAppChange).toHaveBeenCalledWith(AppItem.RICK_AND_MORTY);
});
