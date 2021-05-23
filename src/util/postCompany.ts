import { Company } from "../types";
import axios from "axios";
import getKey from "./getKey";
export class PostCompanyError extends Error {
  constructor(message: string | undefined) {
    super(message);
    this.name = "PostCompanyError";
  }
}

const postCompany = async (company: Company) => {
  const key = await getKey();

  try {
    await axios(
      `https://tqinterviewapi.azurewebsites.net/api/Companies?key=${key}`,
      {
        method: "POST",
        data: company,
      }
    );

    return {};
  } catch (e) {
    return {
      error: new PostCompanyError("There was an error creating the company"),
    };
  }
};

export default postCompany;
