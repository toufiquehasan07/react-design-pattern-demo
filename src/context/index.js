import React from "react";

/**
 * React Context API works follows Provider pattern,
 * React.createContext(default value) - provides different Components
 * i. Provider (store data),
 * ii. Consumer (share data)
 * 
 */
export const TestContext = React.createContext(0);