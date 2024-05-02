"use client";

import { useRecoilValue } from "recoil";
import RadioButton from "./ui/RadioButton";
import SelectBox from "./ui/SelectBox";
import {
  classCodeState,
  matterCodeState,
  prefCodeState,
  yearCodeState,
} from "@/lib/atoms/param-state";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

type Props = {};

const SideMenu = (props: Props) => {
  const prefCode = useRecoilValue(prefCodeState);
  const yearCode = useRecoilValue(yearCodeState);
  const matterCode = useRecoilValue(matterCodeState);
  const classCode = useRecoilValue(classCodeState);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    router.replace(
      `${pathname}/?pref=${prefCode}&year=${yearCode}&matter=${matterCode}&class=${classCode}`
    );
  }, [prefCode, yearCode, matterCode, classCode]);

  return (
    <div id="sideMenu" className="">
      <h1>求人・求職者</h1>
      <SelectBox />
      <RadioButton />
    </div>
  );
};

export default SideMenu;
