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

type FavoriteImage = {
  id: number;
  url: string;
};

export type Favorite = {
  id: number;
  user_id: string;
  image_id: string;
  sub_id: string;
  created_at: string;
  image: FavoriteImage;
};
