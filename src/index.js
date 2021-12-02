import React from "react";
import ReactDOM from "react-dom";
import LanguageSelection from "./LanguageSelection";
import ThemeContainer from "./ThemeContainer";
import Content from "./Content";
import AppProvider from "./AppProvider";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <div className="light">
        <AppProvider>
          <LanguageSelection />
          <ThemeContainer />
          <Content />
        </AppProvider>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
