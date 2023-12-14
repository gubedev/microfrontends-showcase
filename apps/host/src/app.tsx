import { AppPlaceholder, AppSwitcher, LangSwitcher } from "components";
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

  // State to track the currently selected lang
  const [selectedLang, setSelectedLang] = React.useState<LangItem>(
    LangItem.ES // Initial selected lang is set to es
  );

  const handleAppSwitch = (app: AppItem) => {
    setSelectedApp(app);
  };

  const handleLangSwitch = (lang: LangItem) => {
    setSelectedLang(lang);
    const notification = EventNotificationFactory.build();
    notification.publish(MessageItem.LANGUAGE_HAS_CHANGED, { lang });

    const storage = StorageServiceFactory.build();
    storage.setValue(settings.langStorageKey, lang);
  };

  return (
    <div>
      <h1>Microfrontends</h1>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        {/* Render the AppSwitcher component with the handleAppSwitch function as a prop */}
        <AppSwitcher onAppChange={handleAppSwitch} />
        {/* Render the LangSwitcher component with the handleLangSwitch function as a prop */}
        <LangSwitcher onLangChange={handleLangSwitch} />
      </div>
      {/* Container to display the selected app using the AppPlaceholder component */}
      <div>
        {/* Render the AppPlaceholder component with the currently selected app */}
        <AppPlaceholder app={selectedApp} />
      </div>
    </div>
  );
}
