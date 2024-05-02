import axios from "axios";

const apiUrl = axios.create({
  baseURL: "https://opendata.resas-portal.go.jp/api/v1/regionalEmploy/analysis/portfolio",
});

export const getData = async (
  prefCode = "1",
  yearCode = "2012",
  matterCode = "1",
  classCode = "1"
) => {
  try {
    const response = await apiUrl.get(
      `?prefCode=${prefCode}&year=${yearCode}&matter=${matterCode}&class=${classCode}`,
      {
        headers: {
          "X-API-KEY": process.env.RESAS_API,
        },
      }
    );
    return response.data;
  } catch (e) {
    if (axios.isAxiosError(e) && e.response && e.response.status === 400) {
      console.log("400 Error!!");
    }
  }
};
