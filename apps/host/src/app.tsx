import React, { Suspense } from "react";
const RemoteApp = React.lazy(() => import("rick_and_morty/app"));

export default function App() {
  return (
    <Suspense fallback={"loading..."}>
      <RemoteApp />
    </Suspense>
  );
}
