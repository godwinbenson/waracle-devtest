import MockAdapter from "axios-mock-adapter";

export const mockPostImages = (
  adapter: MockAdapter,
  { error }: { error?: boolean } = {
    error: false,
  }
) => {
  if (error) {
    return adapter
      .onPost("https://api.thecatapi.com/v1/images/upload")
      .replyOnce(500);
  }

  return adapter
    .onPost("https://api.thecatapi.com/v1/images/upload")
    .replyOnce(200);
};
