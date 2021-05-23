import { APIKEY } from "./api-key";
import axios, { AxiosRequestConfig } from "axios";
export class deleteFavoriteError extends Error {
  constructor(message: string | undefined) {
    super(message);
    this.name = "deleteFavoriteError";
  }
}

export const deleteFavorite = async (favourite_id: string) => {
  const options: AxiosRequestConfig = {
    method: "DELETE",
    url: `https://api.thecatapi.com/v1/favourites/${favourite_id}`,
    params: { favourite_id: favourite_id },
    headers: {
      "x-api-key": APIKEY,
      "Content-Type": "application/x-www-form-urlencoded",
    },
  };

  try {
    await axios.request(options);
    return {};
  } catch (error) {
    return {
      error: new deleteFavoriteError("There was an unfavoriting this image"),
    };
  }
};
