import React, { useReducer } from "react";
import {
  Text,
  Link,
  HStack,
  Center,
  Heading,
  Switch,
  useColorMode,
  NativeBaseProvider,
  extendTheme,
  VStack,
  Box,
} from "native-base";
import { TokenContext, initialState } from "./src/context/TokenContext";
import NativeBaseIcon from "./components/NativeBaseIcon";
import { Platform } from "react-native";
import Login from "./src/components/Login/Login";
import Home from "./src/components/Home/Home";
import Signup from "./src/components/Signup/Signup";
import Router from "./Router";
import DrawerMain from "./src/components/Dashboard/Navbar/DrawerMain";

// Define the config
const config = {
  useSystemColorMode: false,
  initialColorMode: "dark",
};

// extend the theme
export const theme = extendTheme({ config });

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_TOKEN":
      return { token: action.payload };
  }
};

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <NativeBaseProvider>
      <TokenContext.Provider value={[state, dispatch]}>
        <Router />
      </TokenContext.Provider>
    </NativeBaseProvider>
  );
}

// Color Switch Component
function ToggleDarkMode() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack space={2} alignItems="center">
      <Text>Dark</Text>
      <Switch
        isChecked={colorMode === "light"}
        onToggle={toggleColorMode}
        aria-label={
          colorMode === "light" ? "switch to dark mode" : "switch to light mode"
        }
      />
      <Text>Light</Text>
    </HStack>
  );
}
