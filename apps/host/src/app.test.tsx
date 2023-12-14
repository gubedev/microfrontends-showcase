// Importing necessary testing libraries and modules
import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";

import React from "react";
import App from "./app";

// Test to verify that the page loads and displays the "Rick and Morty" button
test("loads and displays host", async () => {
  // Rendering the main App component
  render(<App />);

  // Waiting for the component to finish loading any suspended data
  await waitFor(() => {
    /* finish loading suspended data */
    // Retrieving the element with text "Rick and Morty" and asserting its presence
    const linkElement = screen.getByText(/Rick and Morty/i);
    expect(linkElement).toBeInTheDocument();
  });
});
