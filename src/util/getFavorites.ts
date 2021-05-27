import { APIKEY } from "./api-key";
import axios, { AxiosRequestConfig } from "axios";

export class GetFavoritesError extends Error {
  constructor(message: string | undefined) {
    super(message);
    this.name = "GetFavoritesError";
  }
}
export const getFavorites = async () => {
  const options: AxiosRequestConfig = {
    method: "GET",
    url: "https://api.thecatapi.com/v1/favourites",
    headers: { "x-api-key": APIKEY },
  };

  try {
    const response = await axios.request(options);
    return {
      favorites: response.data,
    };
  } catch (e) {
    return {
      error: new GetFavoritesError(
        "An error occurred fetching the list of images. Please try again later"
      ),
    };
  }
};
