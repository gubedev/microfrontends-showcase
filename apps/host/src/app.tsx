import React, { Suspense } from "react";
const RickyAndMorty = React.lazy(() => import("rick_and_morty/app"));
const HarryPotter = React.lazy(() => import("harry_potter/app"));

export default function App() {
  return (
    <Suspense fallback={"loading..."}>
      <div>
        <RickyAndMorty />
      </div>
      <div>
        <HarryPotter />
      </div>
    </Suspense>
  );
}
