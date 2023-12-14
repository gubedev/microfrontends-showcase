import React from "react";
import { AppItem } from "types"; // Contains the definition for AppItem

// Lazily import the RickyAndMorty
const RickyAndMorty = React.lazy(() => import("rick_and_morty/app"));
// Lazily import the HarryPotter
const HarryPotter = React.lazy(() => import("harry_potter/app"));

/**
 * Props for the AppPlaceholder component.
 * @interface AppPlaceholderProps
 */
interface AppPlaceholderProps {
  /**
   * The app item to be displayed.
   * @type {AppItem}
   */
  app: AppItem;
}

/**
 * Placeholder component for dynamically loading apps with React.lazy.
 * @param {AppPlaceholderProps} props - The component props.
 * @returns {JSX.Element} - The rendered component.
 */
export function AppPlaceholder({ app }: AppPlaceholderProps): JSX.Element {
  return (
    <React.Suspense fallback={"loading..."}>
      {app === AppItem.RICK_AND_MORTY && <RickyAndMorty />}
      {app === AppItem.HARRY_POTTER && <HarryPotter />}
    </React.Suspense>
  );
}
