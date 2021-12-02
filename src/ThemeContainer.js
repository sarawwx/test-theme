import React from "react";
import AppContext from "./appContext";
import "./toggle.css";

class ThemeContainer extends React.Component {
  render() {
    return (
      <AppContext.Consumer>
        {context => (
          <div className="haveMargin">
            <label className="labels">
              {context.state.localeObj && context.state.localeObj.themeLabel}:{" "}
            </label>
            {context.state.theme === "light" ? (
              <span>
                {context.state.localeObj && context.state.localeObj.light}
              </span>
            ) : (
              <span>
                {context.state.localeObj && context.state.localeObj.dark}
              </span>
            )}
            <label className="switch">
              <input type="checkbox" onChange={context.updateTheme} />
              <span className="slider round" />
            </label>
          </div>
        )}
      </AppContext.Consumer>
    );
  }
}

export default ThemeContainer;
