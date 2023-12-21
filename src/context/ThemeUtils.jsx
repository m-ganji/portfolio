// ThemeUtils.js
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

export const useTheme = () => {
  return useContext(ThemeContext);
};
