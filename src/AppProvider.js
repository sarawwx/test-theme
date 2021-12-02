import React, { createContext } from "react";
import { getLocaleCode, getlocaleByCode } from "./data";
import AppContext from "./appContext";

class AppProvider extends React.Component {
  state = {
    localeCodes: [],
    localeObj: null,
    theme: "light"
  };

  updateLocalCode = async e => {
    try {
      const localeObj = await getlocaleByCode(e.target.value);
      this.setState({ localeObj });
    } catch (err) {
      console.log(err);
    }
  };

  updateTheme = e => {
    this.setState({ theme: e.target.checked ? "dark" : "light" });
  };
  render() {
    return (
      <AppContext.Provider
        value={{
          state: this.state,
          updateLocale: this.updateLocalCode,
          updateTheme: this.updateTheme
        }}
      >
        <div className={this.state.theme}>{this.props.children}</div>
      </AppContext.Provider>
    );
  }

  componentDidMount = async () => {
    try {
      const localeCodes = await getLocaleCode();
      const localeObj = await getlocaleByCode();
      this.setState({ localeCodes, localeObj });
    } catch (err) {
      console.log(err);
    }
  };
}

export default AppProvider;
