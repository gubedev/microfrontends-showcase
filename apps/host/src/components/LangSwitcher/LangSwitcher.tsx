import React from "react";
import { LangItem } from "types"; // Contains the definition for LangItem
import { Button } from "ui-lib";

/**
 * Props for the LangSwitcher component.
 * @interface LangSwitcherProps
 */
interface LangSwitcherProps {
  /**
   * Function to be called when an Lang item is selected.
   * @param {LangItem} Lang - The selected Lang item.
   * @returns {void}
   */
  onLangChange: (Lang: LangItem) => void;
}

/**
 * Component for switching between different Langs.
 * @param {LangSwitcherProps} props - The component props.
 * @returns {JSX.Element} - The rendered component.
 */
export function LangSwitcher({ onLangChange }: LangSwitcherProps): JSX.Element {
  return (
    <div>
      <Button
        onClick={() => {
          onLangChange(LangItem.EN);
        }}
        data-testid="lang-switcher-en-test-id"
      >
        <Button.Text>EN</Button.Text>
      </Button>
      <Button
        onClick={() => {
          onLangChange(LangItem.ES);
        }}
        data-testid="lang-switcher-es-test-id"
      >
        <Button.Text>ES</Button.Text>
      </Button>
    </div>
  );
}
