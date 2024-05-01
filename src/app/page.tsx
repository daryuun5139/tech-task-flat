import SideMenu from "@/components/SideMenu";
import home from "./home.module.css";
import MainContainer from "@/components/MainContainer";

export default function Home() {
  return (
    <div id="homeContainer">
      <SideMenu />
      <MainContainer />
    </div>
  );
}
