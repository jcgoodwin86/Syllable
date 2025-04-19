import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { byPrefixAndName } from "@awesome.me/kit-929630d3c2/icons";
import "./App.css";

function App() {
  console.log(byPrefixAndName);
  return (
    <div>
      <h1>Syllable</h1>
      <FontAwesomeIcon icon={byPrefixAndName.fasr.check} />
    </div>
  );
}

export default App;
