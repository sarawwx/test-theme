import React from "react";
import AppContext from "./appContext";
import { getLanguageSelectionData } from "./data";

class LanguageSelection extends React.Component {
  render() {
    return (
      <AppContext.Consumer>
        {context => (
          <div className="haveMargin">
            <label className="labels">
              {context.state.localeObj && context.state.localeObj.languageLabel}
              :{" "}
            </label>
            <select
              value={context.state.localeObj && context.state.localeObj.locale}
              onChange={context.updateLocale}
            >
              <option value="en-US">English</option>
              <option value="pt-BR">Português</option>
              <option value="es-ES">Español</option>
            </select>
          </div>
        )}
      </AppContext.Consumer>
    );
  }
}

export default LanguageSelection;
