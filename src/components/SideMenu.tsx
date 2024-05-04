//画面左側（セレクトボックス、ラジオボタン）
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
  //セレクトボックス、ラジオボタンのstateを１箇所に集約。
  const prefCode = useRecoilValue<string>(prefCodeState);
  const yearCode = useRecoilValue<string>(yearCodeState);
  const matterCode = useRecoilValue<string>(matterCodeState);
  const classCode = useRecoilValue<string>(classCodeState);

  //URLにクエリパラメータを追加する準備。
  const pathname: string = usePathname();
  const router = useRouter();

  //セレクトボックス、ラジオボタンのstateが更新されたらクエリパラメータを変更。
  useEffect(() => {
    router.replace(
      `${pathname}/?pref=${prefCode}&year=${yearCode}&matter=${matterCode}&class=${classCode}`
    );
  }, [prefCode, yearCode, matterCode, classCode]);

  return (
    <div id="sideMenu">
      <SelectBox />
      <RadioButton />
    </div>
  );
};

export default SideMenu;
