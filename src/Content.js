import React from "react";
import AppContext from "./appContext";

class Content extends React.Component {
  render() {
    return (
      <AppContext.Consumer>
        {context => (
          <h2>{context.state.localeObj && context.state.localeObj.content}</h2>
        )}
      </AppContext.Consumer>
    );
  }
}

export default Content;
