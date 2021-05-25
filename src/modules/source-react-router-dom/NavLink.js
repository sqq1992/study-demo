import React from "react";
import RouterContext from './RouterContext'
import matchPath from './matchPath'
import Link from "./Link.js";
import {
  resolveToLocation,
  normalizeToLocation
} from "./utils/locationUtils.js";

// React 15 compat
const forwardRefShim = C => C;
let { forwardRef } = React;
if (typeof forwardRef === "undefined") {
  forwardRef = forwardRefShim;
}

function joinClassnames(...classnames) {
  return classnames.filter(i => i).join(" ");
}

/**
 * A <Link> wrapper that knows if it's "active" or not.
 */
const NavLink = forwardRef(
  (
    {
      "aria-current": ariaCurrent = "page",
      activeClassName = "active",
      activeStyle,
      className: classNameProp,
      exact,
      isActive: isActiveProp,
      location: locationProp,
      sensitive,
      strict,
      style: styleProp,
      to,
      innerRef, // TODO: deprecate
      ...rest
    },
    forwardedRef
  ) => {
    return (
      <RouterContext.Consumer>
        {context => {

          const currentLocation = locationProp || context.location;
          const toLocation = normalizeToLocation(
            resolveToLocation(to, currentLocation),
            currentLocation
          );
          const { pathname: path } = toLocation;
          // Regex taken from: https://github.com/pillarjs/path-to-regexp/blob/master/index.js#L202
          const escapedPath =
            path && path.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");

          const match = escapedPath
            ? matchPath(currentLocation.pathname, {
                path: escapedPath,
                exact,
                sensitive,
                strict
              })
            : null;
          const isActive = !!(isActiveProp
            ? isActiveProp(match, currentLocation)
            : match);

          const className = isActive
            ? joinClassnames(classNameProp, activeClassName)
            : classNameProp;
          const style = isActive ? { ...styleProp, ...activeStyle } : styleProp;

          const props = {
            "aria-current": (isActive && ariaCurrent) || null,
            className,
            style,
            to: toLocation,
            ...rest
          };

          // React 15 compat
          if (forwardRefShim !== forwardRef) {
            props.ref = forwardedRef || innerRef;
          } else {
            props.innerRef = innerRef;
          }

          return <Link {...props} />;
        }}
      </RouterContext.Consumer>
    );
  }
);

export default NavLink;
