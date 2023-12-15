import { fetchCharactersApi } from "api";
import { CharacterList } from "character-list";
import { EventNotificationFactory } from "event-notification-lib";
import { MessageItem, settings } from "core";
import { StorageServiceFactory } from "storage-lib";
import i18n from "i18n";
import React from "react";

import { useTranslation } from "react-i18next";
import { PageTitle } from "ui-lib";

/**
 * Main application component that fetches and displays a list of characters.
 *
 * @component
 * @example
 * // Example usage of the App component
 * <App />
 */
export default function App() {
  // React-i18next hook for translations
  const { t } = useTranslation();

  /**
   * Event handler for when the language has changed.
   *
   * @param {CustomEvent} e - Custom event containing the new language.
   */
  const handleLangHasChanged = (e) => {
    i18n.changeLanguage(e.detail.lang.toLowerCase());
  };

  // Initialize language on component mount
  React.useEffect(() => {
    const storage = StorageServiceFactory.build();
    i18n.changeLanguage(
      storage.getValue(settings.langStorageKey) ?? settings.defaultLang
    );
  }, []);

  // Subscribe and unsubscribe from language change events
  React.useEffect(() => {
    const notification = EventNotificationFactory.build();

    // Subscribe to language change events
    notification.subscribe(
      MessageItem.LANGUAGE_HAS_CHANGED,
      handleLangHasChanged
    );

    // Unsubscribe on component unmount
    return () => {
      notification.unsubscribe(
        MessageItem.LANGUAGE_HAS_CHANGED,
        handleLangHasChanged
      );
    };
  }, [handleLangHasChanged]);

  // Render the component
  return (
    <>
      {/* Page title with translated title */}
      <PageTitle title={`${t("title")}`} />

      {/* Character list component */}
      <CharacterList
        doFetch={fetchCharactersApi}
        nameText={`${t("character_name")}`}
        loadingMessage={`${t("loading")}`}
        notImageMessage={`${t("notAvailableImage")}`}
      />
    </>
  );
}
