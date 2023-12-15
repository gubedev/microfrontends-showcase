// Importing necessary testing libraries and modules
import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";

import React from "react";
import App from "./app";
import { GlobalStyles, defaultTheme } from "ui-lib";
import { ThemeProvider } from "styled-components";

// Test to verify that the page loads and displays the "Micro-Frontends" text
test("loads and displays host", async () => {
  // Rendering the main App component
  render(
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <App />
    </ThemeProvider>
  );

  // Waiting for the component to finish loading any suspended data
  await waitFor(() => {
    /* finish loading suspended data */
    // Retrieving the element with text "Micro-Frontends" and asserting its presence
    const textElement = screen.getByText(/Micro-Frontends/i);
    expect(textElement).toBeInTheDocument();
  });
});
