//画面右側（データテーブル）
import Table from "./ui/Table";
import { getData } from "@/lib/getData";
import TableState from "./ui/TableState";

type Props = {
  searchParams: { [key: string]: string | undefined };
};

const MainContainer = async ({ searchParams }: Props) => {
  const prefCode = searchParams.pref;
  const yearCode = searchParams.year;
  const matterCode = searchParams.matter;
  const classCode = searchParams.class;

  //レンダリング前でクエリパラメータ未設定の場合は、初期値prefCode="1",yearCode="2012",matterCode="1",classCode="1"でfetch。
  if (!searchParams) {
    const res = await getData(); //resの型は？
    return (
      <div id="mainContainer">
        <TableState
          prefName={res.result.prefName}
          year={res.result.year}
          matter={res.result.matter}
        />
        <Table data={res.result.data} />
      </div>
    );
  } else {
    //レンダリング後は、設定されたクエリパラメータででfetch。
    const res = await getData(prefCode, yearCode, matterCode, classCode); //resの型は？

    return (
      <div id="mainContainer">
        <TableState
          prefName={res.result.prefName}
          year={res.result.year}
          matter={res.result.matter}
        />
        <Table data={res.result.data} />
      </div>
    );
  }
};

export default MainContainer;
