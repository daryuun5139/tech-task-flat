import axios from "axios";

export type prefList = {
  prefCode: number;
  prefName: string;
};

//axiosにデフォルトのbaseURLを設定
const apiUrl = axios.create({
  baseURL: "https://opendata.resas-portal.go.jp/api/v1",
});

//RESAS_APIから都道府県一覧をfetchする関数
export const getPrefData = async () => {
  try {
    const response = await apiUrl.get(
      //responseの型は？
      "/prefectures",
      {
        headers: {
          "X-API-KEY": process.env.RESAS_API,
        },
      }
    );
    return response.data.result;
  } catch (e) {
    //エラー処理はこれで十分？
    if (axios.isAxiosError(e) && e.response && e.response.status === 400) {
      console.log("400 Error!!");
    }
  }
};

//RESAS_APIから求人・求職者情報をfetchする関数
export const getData = async (
  prefCode = "1",
  yearCode = "2012",
  matterCode = "1",
  classCode = "1"
) => {
  try {
    const response = await apiUrl.get(
      //responseの型は？
      `/regionalEmploy/analysis/portfolio?prefCode=${prefCode}&year=${yearCode}&matter=${matterCode}&class=${classCode}`,
      {
        headers: {
          "X-API-KEY": process.env.RESAS_API,
        },
      }
    );
    return response.data;
  } catch (e) {
    //エラー処理はこれで十分？
    if (axios.isAxiosError(e) && e.response && e.response.status === 400) {
      console.log("400 Error!!");
    }
  }
};
