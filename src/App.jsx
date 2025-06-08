import "./App.css";
import { LoadingScreen } from "./components/LoadingScreen";
import { useState } from "react";

import "./index.css";

function App() {
  const [isLoaded, setISLoaded] = useState(false);

  return (
    <>{!isLoaded && <LoadingScreen onComplete={() => setISLoaded(true)} />}</>
  );
}

export default App;
