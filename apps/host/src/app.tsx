import React from "react";
import { AppPlaceholder, Container, Navbar, Wrapper } from "components";
import { EventNotificationFactory } from "event-notification-lib";
import { StorageServiceFactory } from "storage-lib";
import { MessageItem, settings } from "core";
import { AppItem, LangItem } from "types";

/**
 * Micro-Frontends host
 */
export default function App() {
  /**
   * State hook to manage the selected application.
   *
   * @type {[AppItem, React.Dispatch<React.SetStateAction<AppItem>>]}
   */
  const [selectedApp, setSelectedApp] = React.useState<AppItem>(
    AppItem.RICK_AND_MORTY
  );

  /**
   * Handles the change of the selected application.
   *
   * @param {AppItem} app - The selected application.
   */
  const handleAppSwitch = (app: AppItem) => {
    setSelectedApp(app);
  };

  /**
   * Handles the change of the selected language.
   *
   * @param {LangItem} lang - The selected language.
   */
  const handleLangSwitch = (lang: LangItem) => {
    notifyLangChange(lang);
    storeSelectedLang(lang);
  };

  /**
   * Notifies the application about a language change using EventNotification.
   *
   * @param {LangItem} lang - The selected language.
   */
  const notifyLangChange = (lang: LangItem) => {
    const notification = EventNotificationFactory.build();
    notification.publish(MessageItem.LANGUAGE_HAS_CHANGED, { lang });
  };

  /**
   * Stores the selected language in the local storage.
   *
   * @param {LangItem} lang - The selected language.
   */
  const storeSelectedLang = (lang: LangItem) => {
    const storage = StorageServiceFactory.build();
    storage.setValue(settings.langStorageKey, lang);
  };

  /**
   * Retrieves the selected language from the local storage.
   *
   * @returns {string} The selected language.
   */
  const getStoreLang = () => {
    const storage = StorageServiceFactory.build();
    return storage.getValue(settings.langStorageKey);
  };

  /**
   * Initial language based on the stored value or defaults to the default language.
   *
   * @type {LangItem}
   */
  const initialLang: LangItem =
    (getStoreLang() as LangItem) ?? (settings.defaultLang as LangItem);

  /**
   * Renders the main application component.
   *
   * @returns {JSX.Element} The rendered component.
   */
  return (
    <Wrapper>
      <Navbar
        onAppChange={handleAppSwitch}
        onLangChange={handleLangSwitch}
        initial={initialLang}
      />
      <Container>
        <AppPlaceholder app={selectedApp} />
      </Container>
    </Wrapper>
  );
}
