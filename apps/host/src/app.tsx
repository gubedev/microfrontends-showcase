import { AppPlaceholder, AppSwitcher } from "components";
import React from "react";
import { AppItem } from "types";

export default function App() {
  // State to track the currently selected app
  const [selectedApp, setSelectedApp] = React.useState<AppItem>(
    AppItem.RICK_AND_MORTY // Initial selected app is set to Rick and Morty
  );

  const handleAppSwitch = (app: AppItem) => {
    setSelectedApp(app);
  };

  return (
    <div>
      <h1>Microfrontends</h1>
      {/* Render the AppSwitcher component with the handleAppSwitch function as a prop */}
      <AppSwitcher onAppChange={handleAppSwitch} />
      {/* Container to display the selected app using the AppPlaceholder component */}
      <div>
        {/* Render the AppPlaceholder component with the currently selected app */}
        <AppPlaceholder app={selectedApp} />
      </div>
    </div>
  );
}
