import Table from "./ui/Table";
import { getData } from "@/lib/getData";

type Props = {
  searchParams: { [key: string]: string | undefined };
};

type dataContent = {
  broadCode: string;
  broadName: string;
  middleCode: string;
  middleName: string;
  value: number;
};

const MainContainer = async ({ searchParams }: Props) => {
  const prefCode = searchParams.pref;
  const yearCode = searchParams.year;
  const matterCode = searchParams.matter;
  const classCode = searchParams.class;

  if (!searchParams) {
    const res = await getData();
    return (
      <div id="mainContainer">
        <Table data={res.result.data} />
      </div>
    );
  } else {
    const res = await getData(prefCode, yearCode, matterCode, classCode);
    return (
      <div id="mainContainer">
        <Table data={res.result.data} />
      </div>
    );
  }
};

export default MainContainer;
