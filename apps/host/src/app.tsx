import { AppPlaceholder, AppSwitcher, LangSwitcher, Layout } from "components";
import { EventNotificationFactory } from "event-notification-lib";
import { StorageServiceFactory } from "storage-lib";
import { MessageItem, settings } from "core";
import React from "react";
import { AppItem, LangItem } from "types";

export default function App() {
  // State to track the currently selected app
  const [selectedApp, setSelectedApp] = React.useState<AppItem>(
    AppItem.RICK_AND_MORTY // Initial selected app is set to Rick and Morty
  );

  const handleAppSwitch = (app: AppItem) => {
    setSelectedApp(app);
  };

  const handleLangSwitch = (lang: LangItem) => {
    notifyLangChange(lang);
    storeSelectedLang(lang);
  };

  const notifyLangChange = (lang: LangItem) => {
    const notification = EventNotificationFactory.build();
    notification.publish(MessageItem.LANGUAGE_HAS_CHANGED, { lang });
  };

  const storeSelectedLang = (lang: LangItem) => {
    const storage = StorageServiceFactory.build();
    storage.setValue(settings.langStorageKey, lang);
  };

  const getStoreLang = () => {
    const storage = StorageServiceFactory.build();
    return storage.getValue(settings.langStorageKey);
  };

  const initialLang: LangItem =
    (getStoreLang() as LangItem) ?? (settings.defaultLang as LangItem);

  return (
    <Layout>
      <div style={{ marginTop: "128px" }}>
        <h1>Microfrontends</h1>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          {/* Render the AppSwitcher component with the handleAppSwitch function as a prop */}
          <AppSwitcher onAppChange={handleAppSwitch} />
          {/* Render the LangSwitcher component with the handleLangSwitch function as a prop */}
          <LangSwitcher onLangChange={handleLangSwitch} initial={initialLang} />
        </div>
        {/* Container to display the selected app using the AppPlaceholder component */}
        <div>
          {/* Render the AppPlaceholder component with the currently selected app */}
          <AppPlaceholder app={selectedApp} />
        </div>
      </div>
    </Layout>
  );
}
