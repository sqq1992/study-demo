import React from "react";
import PropTypes from "prop-types";
import { createMemoryHistory as createHistory } from "../source-history";

import Router from "./Router.js";

/**
 * The public API for a <Router> that stores location in memory.
 */
class MemoryRouter extends React.Component {
  history = createHistory(this.props);

  render() {
    return <Router history={this.history} children={this.props.children} />;
  }
}

export default MemoryRouter;
