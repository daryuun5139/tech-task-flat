import Table from "./ui/Table";
import axios from "axios";

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

  const response = await axios.get(
    `https://opendata.resas-portal.go.jp/api/v1/regionalEmploy/analysis/portfolio?prefCode=${prefCode}&year=${yearCode}&matter=${matterCode}&class=${classCode}`,
    {
      headers: {
        "X-API-KEY": process.env.RESAS_API,
      },
    }
  );
  // console.log(response.data.result.data);
  const data: dataContent[] = response.data.result.data;

  return (
    <div id="mainContainer">
      <Table data={data} />
    </div>
  );
};

export default MainContainer;
