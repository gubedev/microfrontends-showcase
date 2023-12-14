import React from "react";

import { useTranslation } from "react-i18next";

import { Button } from "ui-lib";

export default function App() {
  const { t } = useTranslation();

  return <h1>Harry Potter {t("started")}</h1>;
}
