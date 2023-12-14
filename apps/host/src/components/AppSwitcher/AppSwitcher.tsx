import React from "react";
import { AppItem } from "types"; // Contains the definition for AppItem
import { Button } from "ui-lib";

/**
 * Props for the AppSwitcher component.
 * @interface AppSwitcherProps
 */
interface AppSwitcherProps {
  /**
   * Function to be called when an app item is selected.
   * @param {AppItem} app - The selected app item.
   * @returns {void}
   */
  onAppChange: (app: AppItem) => void;
}

/**
 * Component for switching between different apps.
 * @param {AppSwitcherProps} props - The component props.
 * @returns {JSX.Element} - The rendered component.
 */
export function AppSwitcher({ onAppChange }: AppSwitcherProps): JSX.Element {
  return (
    <div>
      <Button
        onClick={() => {
          onAppChange(AppItem.RICK_AND_MORTY);
        }}
        data-testid="app-switcher-rick-and-porty-test-id"
      >
        <Button.Text>Rick and Morty</Button.Text>
      </Button>
      <Button
        onClick={() => {
          onAppChange(AppItem.HARRY_POTTER);
        }}
        data-testid="app-switcher-harry-potter-test-id"
      >
        <Button.Text>Harry Potter</Button.Text>
      </Button>
    </div>
  );
}
