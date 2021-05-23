import getKey from "./getKey";
import axios from "axios";

export class GetCompaniesError extends Error {
  constructor(message: string | undefined) {
    super(message);
    this.name = "GetCompaniesError";
  }
}
const getCompanies = async () => {
  const key = await getKey();
  try {
    const res = await axios(
      `https://tqinterviewapi.azurewebsites.net/api/Companies?key=${key}`
    );
    return {
      companies: res.data,
    };
  } catch (e) {
    return {
      error: new GetCompaniesError(
        "An error occurred fetching the list of companies. Please try again later"
      ),
    };
  }
};

export default getCompanies;
