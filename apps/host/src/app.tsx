import React, { Suspense } from "react";
const RickyAndMorty = React.lazy(() => import("rick_and_morty/app"));
const HarryPotter = React.lazy(() => import("harry_potter/app"));

import { Button } from "ui-lib";

interface ScreenPlaceholderProps {
  screen: string;
}

function ScreenPlaceholder({ screen }: ScreenPlaceholderProps) {
  return (
    <Suspense fallback={"loading..."}>
      {screen === "RICKY" && (
        <>
          <div>
            <RickyAndMorty />
          </div>
        </>
      )}
      {screen === "HARRY" && (
        <>
          <div>
            <HarryPotter />
          </div>
        </>
      )}
    </Suspense>
  );
}

interface ScreenSwitcherProps {
  onScreenChanged: (screen: string) => void;
}

function ScreenSwitcher({ onScreenChanged }: ScreenSwitcherProps) {
  return (
    <div>
      <Button
        onClick={() => {
          onScreenChanged("RICKY");
        }}
      >
        <Button.Text>Rick and Morty</Button.Text>
      </Button>
      <Button
        onClick={() => {
          onScreenChanged("HARRY");
        }}
      >
        <Button.Text>Harry Potter</Button.Text>
      </Button>
    </div>
  );
}

export default function App() {
  const [selectedScreen, setSelectedScreen] = React.useState<string>("RICKY");

  const handleScreenSwitch = (screen: string) => {
    setSelectedScreen(screen);
  };

  return (
    <div>
      <ScreenSwitcher onScreenChanged={handleScreenSwitch} />
      <div>
        <ScreenPlaceholder screen={selectedScreen} />
      </div>
    </div>
  );
}
