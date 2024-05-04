//ホーム画面
import SideMenu from "@/components/SideMenu";
import MainContainer from "@/components/MainContainer";
import { getPrefData, prefList } from "@/lib/getData";

export default async function Home({
  searchParams, ///URLがshop?a=1&b=2の場合、searchParamsは{a:'1', b:'2'}。
}: {
  searchParams: { [key: string]: string | undefined };
}) {
  //RESAS_APIから都道府県一覧を取得
  const prefList: prefList[] = await getPrefData();

  return (
    <div id="homeContainer">
      <h1>求人・求職者</h1>
      <div id="firstWrapper">
        <SideMenu prefList={prefList} />
        <MainContainer searchParams={searchParams} />
      </div>
    </div>
  );
}
