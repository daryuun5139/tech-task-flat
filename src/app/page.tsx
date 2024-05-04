//ホーム画面
import SideMenu from "@/components/SideMenu";
import MainContainer from "@/components/MainContainer";

export default function Home({
  searchParams, ///URLがshop?a=1&b=2の場合、searchParamsは{a:'1', b:'2'}。
}: {
  searchParams: { [key: string]: string | undefined };
}) {
  return (
    <div id="homeContainer">
      <h1>求人・求職者</h1>
      <div id="firstWrapper">
        <SideMenu />
        <MainContainer searchParams={searchParams} />
      </div>
    </div>
  );
}
