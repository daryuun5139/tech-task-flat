//画面左側（セレクトボックス、ラジオボタン）
"use client";

import { useRecoilValue } from "recoil";
import RadioButton from "./ui/RadioButton";
import SelectBox from "./ui/SelectBox";
import { optionCodes, optionCodesState } from "@/lib/atoms/param-state";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";
import { prefList } from "@/lib/getData";

type Props = {
  prefList: prefList[];
};

const SideMenu = ({ prefList }: Props) => {
  //各オプションのstateを取得。
  const optionCodes = useRecoilValue<optionCodes>(optionCodesState);
  const { prefCode, yearCode, matterCode, classCode } = optionCodes;

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
      <SelectBox prefList={prefList} />
      <RadioButton />
    </div>
  );
};

export default SideMenu;
