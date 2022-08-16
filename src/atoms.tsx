import { atom } from "recoil";

export const DarkThemeState = atom({
  key: "DarkTheme",
  default: true,
});

export const LangState = atom({
  key: "language",
  default: true,
});
