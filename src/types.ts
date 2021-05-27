export type Image = {
  id: string;
  created_at: string;
  original_filename: string;
  sub_id: string;
  url: string;
  [key: string]: any;
};

export type VoteScore = {
  country_code: string | null;
  created_at: string;
  id: number;
  image_id: string;
  sub_id: string | null;
  value: number;
};
