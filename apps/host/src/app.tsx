import React, { Suspense } from "react";
const RickyAndMorty = React.lazy(() => import("rick_and_morty/app"));
const HarryPotter = React.lazy(() => import("harry_potter/app"));

import { Button } from "ui-lib";

export default function App() {
  const [selectedScreen, setSelectedScreen] = React.useState<string>("RICKY");

  const handleScreenSwitch = (screen: string) => {
    setSelectedScreen(screen);
  };

  return (
    <Suspense fallback={"loading..."}>
      <div>
        <Button
          onClick={() => {
            handleScreenSwitch("RICKY");
          }}
        >
          <Button.Text>Rick and Morty</Button.Text>
        </Button>
        <Button
          onClick={() => {
            handleScreenSwitch("HARRY");
          }}
        >
          <Button.Text>Harry Potter</Button.Text>
        </Button>
      </div>
      {selectedScreen === "RICKY" && (
        <>
          <div>
            <RickyAndMorty />
          </div>
        </>
      )}
      {selectedScreen === "HARRY" && (
        <>
          <div>
            <HarryPotter />
          </div>
        </>
      )}
    </Suspense>
  );
}
