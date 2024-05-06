//画面左側（セレクトボックス、ラジオボタン）
"use client";

import styles from "./SideMenu.module.css";
import { useRecoilValue } from "recoil";
import RadioButton from "./ui/RadioButton";
import SelectBox from "./ui/SelectBox";
import { optionCodes, optionCodesState } from "@/lib/atoms/param-state";
import { notFound, usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { yearList, matterList } from "@/lib/optionData";
import { apiUrl } from "@/lib/getData";
import { AxiosResponse } from "axios";

type prefList = { [key: string]: number | string }[];

const SideMenu = () => {
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

  //RESAS_APIから都道府県一覧を取得し、useStateにセット
  const [prefList, setPrefList] = useState<prefList>();

  useEffect(() => {
    const getPrefData = async () => {
      try {
        const response: AxiosResponse = await apiUrl.get("/prefectures", {
          headers: {
            "X-API-KEY": process.env.NEXT_PUBLIC_RESAS_API01,
          },
        });
        if (response.data.statusCode) {
          console.log(response.data.message);
          switch (response.data.statusCode) {
            case "400":
              throw new Error("400 error");
            case "403":
              throw new Error("403 error");
            case "404":
              throw new Error("404 error");
            default:
              throw new Error("something error");
          }
        }
        const prefList: prefList = await response.data.result;
        setPrefList(prefList);
      } catch (err) {
        console.log(err);
        notFound();
      }
    };
    getPrefData();
  }, []);

  return (
    <div id="sideMenu">
      <div className={styles.selectWrapper}>
        <SelectBox optionList={prefList!} name="都道府県" />
        <SelectBox optionList={yearList} name="年度" />
        <SelectBox optionList={matterList} name="表示内容" />
      </div>
      <RadioButton />
    </div>
  );
};

export default SideMenu;
