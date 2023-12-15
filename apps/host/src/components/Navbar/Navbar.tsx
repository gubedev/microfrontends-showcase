import React from "react";
import { AppSwitcher, Container, LangSwitcher } from "components";
import { Nav, NavBarContent } from "./style";
import { AppItem, LangItem } from "types";

/**
 * Props for the Navbar component.
 */
interface NavbarProps {
  /**
   * Callback function triggered when the selected app changes.
   *
   * @param {AppItem} app - The selected app.
   */
  onAppChange: (app: AppItem) => void;
  /**
   * Callback function triggered when the selected language changes.
   *
   * @param {LangItem} lang - The selected language.
   */
  onLangChange: (lang: LangItem) => void;
  /**
   * The initial selected language.
   */
  initial: LangItem;
}

/**
 * Functional component representing the navigation bar of the application.
 *
 * @component
 * @example
 * // Example usage of the Navbar component
 *  <Navbar onAppChange={handleAppChange} onLangChange={handleLangChange} initial={initialLang} />
 *
 * @param {object} props - The properties of the Navbar component.
 * @param {Function} props.onAppChange - Callback function triggered when the selected app changes.
 * @param {Function} props.onLangChange - Callback function triggered when the selected language changes.
 * @param {LangItem} props.initial - The initial selected language.
 * @returns {JSX.Element} The rendered Navbar component.
 */
export function Navbar({
  onAppChange,
  onLangChange,
  initial,
}: NavbarProps): JSX.Element {
  return (
    <Nav>
      <Container>
        <NavBarContent>
          <h2>Micro-Frontends</h2>
          {/* Render the AppSwitcher component with the handleAppSwitch function as a prop */}
          <AppSwitcher onAppChange={onAppChange} />
          {/* Render the LangSwitcher component with the handleLangSwitch function as a prop */}
          <LangSwitcher onLangChange={onLangChange} initial={initial} />
        </NavBarContent>
      </Container>
    </Nav>
  );
}
