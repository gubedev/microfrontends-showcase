import { fetchCharactersApi } from "api";
import { CharacterList } from "character-list";
import { EventNotificationFactory } from "event-notification-lib";
import i18n from "i18n";
import React from "react";

import { useTranslation } from "react-i18next";

export default function App() {
  const { t } = useTranslation();

  const handleLangHasChanged = (e: any) => {
    i18n.changeLanguage(e.detail.lang.toLowerCase());
  };

  React.useEffect(() => {
    const notification = EventNotificationFactory.build();
    notification.subscribe("language-has-changed", handleLangHasChanged);

    return () => {
      notification.unsubscribe("language-has-changed", handleLangHasChanged);
    };
  }, [handleLangHasChanged]);

  return (
    <>
      <h1>Harry Potter {t("started")}</h1>
      <CharacterList
        doFetch={fetchCharactersApi}
        nameText={`${t("character_name")}`}
        loadingMessage={`${t("loading")}`}
      />
    </>
  );
}
