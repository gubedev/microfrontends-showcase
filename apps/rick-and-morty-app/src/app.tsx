import { CharacterList, fetchCharactersApi } from "CharacterList";
import React from "react";

import { useTranslation } from "react-i18next";

export default function App() {
  const { t } = useTranslation();

  React.useEffect(() => {
    return () => {
      console.log("unmount ricky");
    };
  }, []);

  return (
    <>
      <h1>Rick and Morty {t("started")}</h1>;
      <CharacterList doFetch={fetchCharactersApi} />
    </>
  );
}
