import { GetFavoritesError } from "./../../util/getFavorites";
import { Favorite } from "./../../types";
import { GetVoteScoreError } from "../../util/getVoteScore";
import { PostVoteError } from "../../util/postVotes";
import { DeleteFavoriteError } from "../../util/deleteFavorite";
import { PostFavoriteError } from "../../util/postFavorite";
import { PostImageError } from "../../util/postImage";
import { Image, VoteScore } from "../../types";
import RequestStatus from "../RequestStatus";
import { GetImagesError } from "../../util/getImages";

export const GET_IMAGES_REQUESTED = "GET_IMAGES_REQUESTED";
export const GET_IMAGES_SUCCESS = "GET_IMAGES_SUCCESS";
export const GET_IMAGES_FAILED = "GET_IMAGES_FAILED";

export const GET_VOTE_SCORE_REQUESTED = "GET_VOTE_SCORE_REQUESTED";
export const GET_VOTE_SCORE_SUCCESS = "GET_VOTE_SCORE_SUCCESS";
export const GET_VOTE_SCORE_FAILED = "GET_VOTE_SCORE_FAILED";

export const GET_FAVORITE_REQUESTED = "GET_FAVORITE_REQUESTED";
export const GET_FAVORITE_SUCCESS = "GET_FAVORITE_SUCCESS";
export const GET_FAVORITE_FAILED = "GET_FAVORITE_FAILED";

export const POST_IMAGE_UPLOAD_REQUESTED = "POST_IMAGE_UPLOAD_REQUESTED";
export const POST_IMAGE_UPLOAD_SUCCESS = "POST_IMAGE_UPLOAD_SUCCESS";
export const POST_IMAGE_UPLOAD_FAILED = "POST_IMAGE_UPLOAD_FAILED";
export const POST_IMAGE_UPLOAD_INIT = "POST_IMAGE_UPLOAD_INIT";

export const POST_FAVORITE_REQUESTED = "POST_FAVORITE_REQUESTED";
export const POST_FAVORITE_SUCCESS = "POST_FAVORITE_SUCCESS";
export const POST_FAVORITE_FAILED = "POST_FAVORITE_FAILED";
export const POST_FAVORITE_INIT = "POST_FAVORITE_INIT";

export const POST_VOTE_REQUESTED = "POST_VOTE_REQUESTED";
export const POST_VOTE_SUCCESS = "POST_VOTE_SUCCESS";
export const POST_VOTE_FAILED = "POST_VOTE_FAILED";
export const POST_VOTE_INIT = "POST_VOTE_INIT";

export const DELETE_FAVORITE_REQUESTED = "DELETE_FAVORITE_REQUESTED";
export const DELETE_FAVORITE_SUCCESS = "DELETE_FAVORITE_SUCCESS";
export const DELETE_FAVORITE_FAILED = "DELETE_FAVORITE_FAILED";
export const DELETE_FAVORITE_INIT = "DELETE_FAVORITE_INIT";

export type ImagesState = {
  imageList: Image[];
  voteScore: VoteScore[];
  favorites: Favorite[];
  postImageState: RequestStatus;
  postImageError: PostImageError | undefined;
  getImagesState: RequestStatus;
  getImagesError: GetImagesError | undefined;
  getFavoriteState: RequestStatus;
  getFavoriteError: GetFavoritesError | undefined;
  postFavoriteState: RequestStatus;
  postFavoriteError: PostFavoriteError | undefined;
  deleteFavoriteState: RequestStatus;
  deleteFavoriteError: DeleteFavoriteError | undefined;
  postVoteState: RequestStatus;
  postVoteError: PostVoteError | undefined;
  getVoteScoreState: RequestStatus;
  getVoteScoreError: GetVoteScoreError | undefined;
};

// POST_IMAGE_ACTION_TYPES

type PostImageUploadRequestedAction = {
  type: typeof POST_IMAGE_UPLOAD_REQUESTED;
};

type PostImageUploadSuccessAction = {
  type: typeof POST_IMAGE_UPLOAD_SUCCESS;
};

type PostImageUploadFailedAction = {
  type: typeof POST_IMAGE_UPLOAD_FAILED;
  payload: Error;
};

type PostImageUploadInitAction = {
  type: typeof POST_IMAGE_UPLOAD_INIT;
};

// GET_IMAGES_ACTION_TYPES

type GetImagesRequestedAction = {
  type: typeof GET_IMAGES_REQUESTED;
};

type GetImagesSuccessAction = {
  type: typeof GET_IMAGES_SUCCESS;
  payload: Image[];
};

type GetImagesFailedAction = {
  type: typeof GET_IMAGES_FAILED;
  payload: Error;
};

// FAVORITE_IMAGE_ACTION_TYPES

type PostFavoriteRequestedAction = {
  type: typeof POST_FAVORITE_REQUESTED;
};

type PostFavoriteSuccessAction = {
  type: typeof POST_FAVORITE_SUCCESS;
  payload: string;
};

type PostFavoriteFailedAction = {
  type: typeof POST_FAVORITE_FAILED;
  payload: Error;
};

type PostFavoriteInitAction = {
  type: typeof POST_FAVORITE_INIT;
};

// VOTE_IMAGE_ACTION_TYPES

type PostVoteRequestedAction = {
  type: typeof POST_VOTE_REQUESTED;
};

type PostVoteSuccessAction = {
  type: typeof POST_VOTE_SUCCESS;
};

type PostVoteFailedAction = {
  type: typeof POST_VOTE_FAILED;
  payload: Error;
};

type PostVoteInitAction = {
  type: typeof POST_VOTE_INIT;
};

// GET_VOTE_SCORE_ACTION_TYPES

type GetVoteScoreRequestedAction = {
  type: typeof GET_VOTE_SCORE_REQUESTED;
};

type GetVoteScoreSuccessAction = {
  type: typeof GET_VOTE_SCORE_SUCCESS;
  payload: VoteScore[];
};

type GetVoteScoreFailedAction = {
  type: typeof GET_VOTE_SCORE_FAILED;
  payload: Error;
};

// GET_FAVORITE_ACTION_TYPES

type GetFavoriteRequestedAction = {
  type: typeof GET_FAVORITE_REQUESTED;
};

type GetFavoriteSuccessAction = {
  type: typeof GET_FAVORITE_SUCCESS;
  payload: Favorite[];
};

type GetFavoriteFailedAction = {
  type: typeof GET_FAVORITE_FAILED;
  payload: Error;
};

// DELETE_FAVORITE_ACTION_TYPES

type DeleteFavoriteRequestedAction = {
  type: typeof DELETE_FAVORITE_REQUESTED;
};

type DeleteFavoriteSuccessAction = {
  type: typeof DELETE_FAVORITE_SUCCESS;
};

type DeleteFavoriteFailedAction = {
  type: typeof DELETE_FAVORITE_FAILED;
  payload: Error;
};

type DeleteFavoriteInitAction = {
  type: typeof DELETE_FAVORITE_INIT;
};

export type ImagesActionTypes =
  | PostImageUploadRequestedAction
  | PostImageUploadSuccessAction
  | PostImageUploadFailedAction
  | PostImageUploadInitAction
  | GetImagesRequestedAction
  | GetImagesSuccessAction
  | GetImagesFailedAction
  | PostFavoriteRequestedAction
  | PostFavoriteSuccessAction
  | PostFavoriteFailedAction
  | PostFavoriteInitAction
  | PostVoteRequestedAction
  | PostVoteSuccessAction
  | PostVoteFailedAction
  | PostVoteInitAction
  | GetVoteScoreRequestedAction
  | GetVoteScoreSuccessAction
  | GetVoteScoreFailedAction
  | DeleteFavoriteRequestedAction
  | DeleteFavoriteSuccessAction
  | DeleteFavoriteFailedAction
  | DeleteFavoriteInitAction
  | GetFavoriteRequestedAction
  | GetFavoriteSuccessAction
  | GetFavoriteFailedAction;
