//ホーム画面
import SideMenu from "@/components/SideMenu";
import MainContainer from "@/components/MainContainer";
import { Suspense } from "react";
import Loading from "./loading";

export default function Home({
  searchParams, ///URLがshop?a=1&b=2の場合、searchParamsは{a:'1', b:'2'}。
}: {
  searchParams: { [key: string]: string | undefined };
}) {
  return (
    <div id="homeContainer">
      <h1>求人・求職者</h1>
      <div id="firstWrapper">
        <Suspense fallback={<Loading />}>
          <SideMenu />
        </Suspense>
        <Suspense fallback={<Loading />}>
          <MainContainer searchParams={searchParams} />
        </Suspense>
      </div>
    </div>
  );
}
