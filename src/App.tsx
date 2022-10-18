import { PeopleProvider } from "./contexts/PeopleContext";

import "./global.scss";
import { People } from "./pages/People";

export function App() {
  return (
    <PeopleProvider>
      <People />
    </PeopleProvider>
  );
}
