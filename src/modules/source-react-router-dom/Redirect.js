import React from "react";
import PropTypes from "prop-types";
import { createLocation, locationsAreEqual } from "../source-history";

import Lifecycle from "./Lifecycle.js";
import RouterContext from "./RouterContext.js";
import generatePath from "./generatePath.js";

/**
 * The public API for navigating programmatically with a component.
 */
function Redirect({ computedMatch, to, push = false }) {
  return (
    <RouterContext.Consumer>
      {context => {

        const { history, staticContext } = context;

        const method = push ? history.push : history.replace;
        const location = createLocation(
          computedMatch
            ? typeof to === "string"
              ? generatePath(to, computedMatch.params)
              : {
                  ...to,
                  pathname: generatePath(to.pathname, computedMatch.params)
                }
            : to
        );

        // When rendering in a static context,
        // set the new location immediately.
        if (staticContext) {
          method(location);
          return null;
        }

        return (
          <Lifecycle
            onMount={() => {
              method(location);
            }}
            onUpdate={(self, prevProps) => {
              const prevLocation = createLocation(prevProps.to);
              if (
                !locationsAreEqual(prevLocation, {
                  ...location,
                  key: prevLocation.key
                })
              ) {
                method(location);
              }
            }}
            to={to}
          />
        );
      }}
    </RouterContext.Consumer>
  );
}

export default Redirect;
