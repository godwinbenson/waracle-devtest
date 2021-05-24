import { APIKEY } from "./api-key";
import axios, { AxiosRequestConfig } from "axios";
export class PostVoteError extends Error {
  constructor(message: string | undefined) {
    super(message);
    this.name = "PostVoteError";
  }
}

export const postVotes = async (
  image_id: string,
  sub_id: string,
  value: number
) => {
  const options: AxiosRequestConfig = {
    method: "POST",
    url: "https://api.thecatapi.com/v1/votes",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": APIKEY,
    },
    data: { image_id, sub_id, value },
  };

  try {
    let response = await axios.request(options);
    return {
      vote_id: response.data.id,
    };
  } catch (error) {
    if (value === 1) {
      return {
        error: new PostVoteError("There was an error upvoting this image"),
      };
    } else {
      return {
        error: new PostVoteError("There was an error downvoting this image"),
      };
    }
  }
};
