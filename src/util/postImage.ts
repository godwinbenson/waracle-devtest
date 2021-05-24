import { APIKEY } from "./api-key";
import axios, { AxiosRequestConfig } from "axios";
export class PostImageError extends Error {
  constructor(message: string | undefined) {
    super(message);
    this.name = "PostImageError";
  }
}

export const postImage = async (
  file: string | Blob,
  sub_id: string | Blob,
  progressCallback?: (percent: number) => void
) => {
  const form = new FormData();
  form.append("file", file);
  form.append("sub_id", sub_id);

  const options: AxiosRequestConfig = {
    method: "POST",
    url: "https://api.thecatapi.com/v1/images/upload",
    headers: {
      "Content-Type": "multipart/form-data",
      "x-api-key": APIKEY,
    },
    data: form,
    onUploadProgress: (progressEvent: { loaded: number; total: number }) => {
      let percentCompleted = Math.floor(
        (progressEvent.loaded * 100) / progressEvent.total
      );
      progressCallback && progressCallback(percentCompleted);
    },
  };

  try {
    let response = await axios.request(options);
    return { uploadedImage: response.data };
  } catch (error) {
    return {
      error: new PostImageError("There was an error uploading this image"),
    };
  }
};
