import React from "react";
import { LangItem } from "types"; // Contains the definition for LangItem
import { Button } from "ui-lib";
import { ButtonContainer } from "./style";

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
  initial: LangItem;
}

/**
 * Component for switching between different Langs.
 * @param {LangSwitcherProps} props - The component props.
 * @returns {JSX.Element} - The rendered component.
 */
export function LangSwitcher({
  onLangChange,
  initial,
}: LangSwitcherProps): JSX.Element {
  // State to track the currently selected lang
  const [selectedLang, setSelectedLang] = React.useState<LangItem>(initial);

  const handleLangChange = (lang: LangItem) => {
    onLangChange(lang);
    setSelectedLang(lang);
  };

  return (
    <ButtonContainer>
      <Button
        onClick={() => {
          handleLangChange(LangItem.EN);
        }}
        data-testid="lang-switcher-en-test-id"
        selected={selectedLang === LangItem.EN}
      >
        <Button.Text>EN</Button.Text>
      </Button>
      <Button
        onClick={() => {
          handleLangChange(LangItem.ES);
        }}
        data-testid="lang-switcher-es-test-id"
        selected={selectedLang === LangItem.ES}
      >
        <Button.Text>ES</Button.Text>
      </Button>
    </ButtonContainer>
  );
}
