import React from "react";
import Router from "./Router";
import { createBrowserHistory as createHistory } from "../source-history";

/**
 * The public API for a <Router> that uses HTML5 history.
 */
class BrowserRouter extends React.Component {
  history = createHistory(this.props);

  render() {
    return <Router history={this.history} children={this.props.children} />;
  }
}

export default BrowserRouter;
