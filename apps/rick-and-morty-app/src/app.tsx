import { fetchCharactersApi } from "api";
import { CharacterList } from "character-list";
import { EventNotificationFactory } from "event-notification-lib";
import { MessageItem, settings } from "core";
import { StorageServiceFactory } from "storage-lib";
import i18n from "i18n";
import React from "react";

import { useTranslation } from "react-i18next";

export default function App() {
  const { t } = useTranslation();

  const handleLangHasChanged = (e: any) => {
    i18n.changeLanguage(e.detail.lang.toLowerCase());
  };

  React.useEffect(() => {
    const storage = StorageServiceFactory.build();
    i18n.changeLanguage(
      storage.getValue(settings.langStorageKey) ?? settings.defaultLang
    );
  }, []);

  React.useEffect(() => {
    const notification = EventNotificationFactory.build();
    notification.subscribe(
      MessageItem.LANGUAGE_HAS_CHANGED,
      handleLangHasChanged
    );

    return () => {
      notification.unsubscribe(
        MessageItem.LANGUAGE_HAS_CHANGED,
        handleLangHasChanged
      );
    };
  }, [handleLangHasChanged]);

  return (
    <>
      <h1>Rick and Morty {t("started")}</h1>
      <h1>Rick and Morty Characters</h1>
      <CharacterList
        doFetch={fetchCharactersApi}
        nameText={`${t("character_name")}`}
        loadingMessage={`${t("loading")}`}
      />
    </>
  );
}
