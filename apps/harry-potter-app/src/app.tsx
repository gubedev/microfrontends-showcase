import React from "react";

import { useTranslation } from "react-i18next";

export default function App() {
  const { t } = useTranslation();

  React.useEffect(() => {
    return () => {
      console.log("unmount harry");
    };
  }, []);

  return <h1>Harry Potter {t("started")}</h1>;
}
