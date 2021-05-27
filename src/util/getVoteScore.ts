import { APIKEY } from "./api-key";
import axios, { AxiosRequestConfig } from "axios";

export class GetVoteScoreError extends Error {
  constructor(message: string | undefined) {
    super(message);
    this.name = "GetVoteScoreError";
  }
}
export const getVoteScore = async (
  sub_id?: string,
  limit?: number,
  page?: number
) => {
  const options: AxiosRequestConfig = {
    method: "GET",
    url: "https://api.thecatapi.com/v1/votes",
    params: { sub_id, limit, page },
    headers: { "x-api-key": APIKEY },
  };

  try {
    const response = await axios.request(options);
    return {
      vote_scores: response.data,
    };
  } catch (e) {
    return {
      error: new GetVoteScoreError(
        "An error occurred fetching the list of votes. Please try again later"
      ),
    };
  }
};
