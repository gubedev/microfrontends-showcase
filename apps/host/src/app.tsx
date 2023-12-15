import React from "react";
import { AppPlaceholder, Container, Navbar, Wrapper } from "components";
import { EventNotificationFactory } from "event-notification-lib";
import { StorageServiceFactory } from "storage-lib";
import { MessageItem, settings } from "core";
import { AppItem, LangItem } from "types";

export default function App() {
  const [selectedApp, setSelectedApp] = React.useState<AppItem>(
    AppItem.RICK_AND_MORTY
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
