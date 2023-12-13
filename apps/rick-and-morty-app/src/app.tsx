import React from "react";

import { useTranslation } from "react-i18next";

export default function App() {
  const { t } = useTranslation();

  return <h1>Rick and Morty {t("started")}</h1>;
}
