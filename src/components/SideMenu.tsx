import RadioButton from "./atoms/RadioButton";
import SelectBox from "./atoms/SelectBox";

type Props = {};

const SideMenu = (props: Props) => {
  return (
    <div id="sideMenu" className="">
      <h1>求人・求職者</h1>
      <SelectBox />
      <RadioButton />
    </div>
  );
};

export default SideMenu;
