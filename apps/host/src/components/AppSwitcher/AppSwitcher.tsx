import React from "react";
import { AppItem } from "types"; // Contains the definition for AppItem
import { Button } from "ui-lib";
import { ButtonContainer } from "./style";

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
  const currentApp = React.useRef<AppItem>(AppItem.RICK_AND_MORTY);

  const handlAppChange = (app: AppItem) => {
    currentApp.current = app;
    onAppChange(app);
  };

  return (
    <ButtonContainer>
      <Button
        onClick={() => {
          handlAppChange(AppItem.RICK_AND_MORTY);
        }}
        data-testid="app-switcher-rick-and-porty-test-id"
        selected={currentApp.current === AppItem.RICK_AND_MORTY}
      >
        <Button.Text>Rick and Morty</Button.Text>
      </Button>
      <Button
        onClick={() => {
          handlAppChange(AppItem.HARRY_POTTER);
        }}
        data-testid="app-switcher-harry-potter-test-id"
        selected={currentApp.current === AppItem.HARRY_POTTER}
      >
        <Button.Text>Harry Potter</Button.Text>
      </Button>
    </ButtonContainer>
  );
}
