import SideMenu from "@/components/SideMenu";
import home from "./home.module.css";
import MainContainer from "@/components/MainContainer";

export default function Home({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) {
  return (
    <div id="homeContainer">
      <SideMenu />
      <MainContainer searchParams={searchParams} />
    </div>
  );
}
