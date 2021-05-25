import React from "react";
import PropTypes from "prop-types";

import Lifecycle from "./Lifecycle.js";
import RouterContext from "./RouterContext.js";

/**
 * The public API for prompting the user before navigating away from a screen.
 */
function Prompt({ message, when = true }) {
  return (
    <RouterContext.Consumer>
      {context => {

        if (!when || context.staticContext) return null;

        const method = context.history.block;

        return (
          <Lifecycle
            onMount={self => {
              self.release = method(message);
            }}
            onUpdate={(self, prevProps) => {
              if (prevProps.message !== message) {
                self.release();
                self.release = method(message);
              }
            }}
            onUnmount={self => {
              self.release();
            }}
            message={message}
          />
        );
      }}
    </RouterContext.Consumer>
  );
}

export default Prompt;
