import axios, { AxiosResponse } from "axios";
import { notFound } from "next/navigation";

//axiosにデフォルトのbaseURLを設定
export const apiUrl = axios.create({
  baseURL: "https://opendata.resas-portal.go.jp/api/v1",
  timeout: 5000,
});

//RESAS APIのエラー及びステータスコード
//400 Bad Request: RESAS APIに必要なパラメータが正しく設定されていないときに発生
//403 Forbidden: リクエストヘッダーにAPIキーが無いとき、指定のAPIキーが無効なときなどに発生
//404 Not Found: RESAS APIに指定のURLに該当するAPIが無いときに発生

// const sleep = (time: number) => new Promise((resolve) => setTimeout(resolve, time));

//RESAS_APIから求人・求職者情報をfetchする関数
export const getData = async (
  prefCode = "1",
  yearCode = "2012",
  matterCode = "1",
  classCode = "1"
) => {
  try {
    // await sleep(5000);
    const response: AxiosResponse = await apiUrl.get(
      `/regionalEmploy/analysis/portfolio?prefCode=${prefCode}&year=${yearCode}&matter=${matterCode}&class=${classCode}`,

      {
        headers: {
          "X-API-KEY": process.env.NEXT_PUBLIC_RESAS_API01,
        },
      }
    );
    if (response.data.statusCode) {
      console.log(response.data.message);
      switch (response.data.statusCode) {
        case "400":
          throw new Error("400 error");
        case "403":
          throw new Error("403 error");
        case "404":
          throw new Error("404 error");
        default:
          throw new Error("something error");
      }
    }
    return response.data;
  } catch (err) {
    console.log(err);
    notFound();
  }
};
