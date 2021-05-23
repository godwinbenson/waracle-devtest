import { APIKEY } from "./api-key";
import axios, { AxiosRequestConfig } from "axios";

export class GetImagesError extends Error {
  constructor(message: string | undefined) {
    super(message);
    this.name = "GetImagesError";
  }
}
export const getImages = async () => {
  const options: AxiosRequestConfig = {
    method: "GET",
    url: "https://api.thecatapi.com/v1/images",
    headers: { "x-api-key": APIKEY },
  };

  try {
    const response = await axios.request(options);
    return {
      uploadedImages: response.data,
    };
  } catch (e) {
    return {
      error: new GetImagesError(
        "An error occurred fetching the list of companies. Please try again later"
      ),
    };
  }
};
