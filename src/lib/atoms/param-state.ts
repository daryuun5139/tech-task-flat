import { atom } from "recoil";

export const prefCodeState = atom<string>({
  key: "prefCodeState",
  default: "1",
});

export const yearCodeState = atom<string>({
  key: "yearCodeState",
  default: "2012",
});

export const matterCodeState = atom<string>({
  key: "matterCodeState",
  default: "1",
});

export const classCodeState = atom<string>({
  key: "classCodeState",
  default: "1",
});
