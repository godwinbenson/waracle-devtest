import { APIKEY } from "./api-key";
import axios, { AxiosRequestConfig } from "axios";

export class GetVoteScore extends Error {
  constructor(message: string | undefined) {
    super(message);
    this.name = "GetVoteScore";
  }
}
export const getImages = async () => {
  const options: AxiosRequestConfig = {
    method: "GET",
    url: "https://api.thecatapi.com/v1/votes",
    params: { sub_id: "demo-image", limit: "5", page: "1" },
    headers: { "x-api-key": APIKEY },
  };

  try {
    const response = await axios.request(options);
    return {
      vote_scores: response.data,
    };
  } catch (e) {
    return {
      error: new GetVoteScore(
        "An error occurred fetching the list of companies. Please try again later"
      ),
    };
  }
};
