import { APIKEY } from "./api-key";
import axios, { AxiosRequestConfig } from "axios";
export class DeleteFavoriteError extends Error {
  constructor(message: string | undefined) {
    super(message);
    this.name = "DeleteFavoriteError";
  }
}

export const deleteFavorite = async (favourite_id: number | undefined) => {
  const options: AxiosRequestConfig = {
    method: "DELETE",
    url: `https://api.thecatapi.com/v1/favourites/${favourite_id}`,
    headers: {
      "x-api-key": APIKEY,
    },
  };

  try {
    await axios.request(options);
    return {};
  } catch (error) {
    return {
      error: new DeleteFavoriteError("There was an unfavoriting this image"),
    };
  }
};
