import { APIKEY } from "./api-key";
import axios, { AxiosRequestConfig } from "axios";
export class postFavoriteError extends Error {
  constructor(message: string | undefined) {
    super(message);
    this.name = "postFavoriteError";
  }
}

export const postFavorite = async (image_id: string, sub_id: string) => {
  const options: AxiosRequestConfig = {
    method: "POST",
    url: "https://api.thecatapi.com/v1/favourites",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": APIKEY,
    },
    data: { image_id, sub_id },
  };

  try {
    let response = await axios.request(options);
    return {
      favourite_id: response.data.id,
    };
  } catch (error) {
    if (error.status) {
      return {
        error: new postFavoriteError(error.message),
      };
    }
    return {
      error: new postFavoriteError("There was an favoriting this image"),
    };
  }
};
