import React from "react";
import { AppSwitcher, Container, LangSwitcher } from "components";
import { Nav, NavBarContent } from "./style";
import { AppItem, LangItem } from "types";

interface NavbarProps {
  /**
   * Function to be called when an app item is selected.
   * @param {AppItem} app - The selected app item.
   * @returns {void}
   */
  onAppChange: (app: AppItem) => void;
  onLangChange: (Lang: LangItem) => void;
  initial: LangItem;
}

export function Navbar({ onAppChange, onLangChange, initial }: NavbarProps) {
  return (
    <Nav>
      <Container>
        <NavBarContent>
          {/* Render the AppSwitcher component with the handleAppSwitch function as a prop */}
          <AppSwitcher onAppChange={onAppChange} />
          {/* Render the LangSwitcher component with the handleLangSwitch function as a prop */}
          <LangSwitcher onLangChange={onLangChange} initial={initial} />
        </NavBarContent>
      </Container>
    </Nav>
  );
}
