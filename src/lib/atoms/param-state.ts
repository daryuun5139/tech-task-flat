import { atom } from "recoil";

export type optionCodes = {
  prefCode: string;
  yearCode: string;
  matterCode: string;
  classCode: string;
};

export const optionCodesState = atom<optionCodes>({
  key: "optionCodesState",
  default: { prefCode: "1", yearCode: "2012", matterCode: "1", classCode: "1" },
});
