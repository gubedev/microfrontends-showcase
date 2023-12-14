import React, { Suspense } from "react";
const RickyAndMorty = React.lazy(() => import("rick_and_morty/app"));
const HarryPotter = React.lazy(() => import("harry_potter/app"));

import { Button } from "ui-lib";

export default function App() {
  return (
    <Suspense fallback={"loading..."}>
      <div>
        <Button>
          <Button.Text>Text</Button.Text>
        </Button>
        <RickyAndMorty />
      </div>
      <div>
        <HarryPotter />
      </div>
    </Suspense>
  );
}
