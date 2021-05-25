// TODO: Replace with React.createContext once we can assume React 16+
// import createContext from "mini-create-react-context";
import React from "react";

const createNamedContext = name => {
  const context = React.createContext(null);
  context.displayName = name;

  return context;
};

export default createNamedContext;
