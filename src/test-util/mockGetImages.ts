import MockAdapter from "axios-mock-adapter";

export const mockGetImages = (
  adapter: MockAdapter,
  { error }: { error?: boolean } = {
    error: false,
  }
) => {
  if (error) {
    return adapter.onGet("https://api.thecatapi.com/v1/images").replyOnce(500);
  }

  return adapter.onGet("https://api.thecatapi.com/v1/images").replyOnce(200, [
    {
      id: "sampleImage1",
      url: "https://cdn2.thecatapi.com/images/sampleImage1.jpg",
      width: 976,
      height: 549,
      sub_id: "Williams",
      created_at: "2021-05-23T17:08:08.000Z",
      original_filename: "_111434467_gettyimages-1143489763.jpg",
    },
    {
      id: "sampleImage2",
      url: "https://cdn2.thecatapi.com/images/sampleImage2.jpg",
      width: 976,
      height: 549,
      sub_id: "TuffyPutty",
      created_at: "2021-05-24T19:08:03.000Z",
      original_filename: "Putty_TheCat_gettyimages-1233453763.jpg",
    },
  ]);
};
