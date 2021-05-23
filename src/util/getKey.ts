import axios from "axios";
let key: string | undefined;
const getKey = async () => {
  if (!key) {
    try {
      const res = await axios(
        "https://tqinterviewapi.azurewebsites.net/api/Companies/key"
      );

      if (res.data) {
        key = res.data;
      }
    } catch (e) {
      console.error(e);
    }
  }
  return key;
};

export default getKey;
