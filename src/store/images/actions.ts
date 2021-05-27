import { Image, VoteScore } from "../../types";
import { DeleteFavoriteError } from "../../util/deleteFavorite";
import { GetImagesError } from "../../util/getImages";
import { GetVoteScoreError } from "../../util/getVoteScore";
import { PostFavoriteError } from "../../util/postFavorite";
import { PostImageError } from "../../util/postImage";
import { PostVoteError } from "../../util/postVotes";
import { Favorite } from "./../../types";
import { GetFavoritesError } from "./../../util/getFavorites";
import {
  DELETE_FAVORITE_FAILED,
  DELETE_FAVORITE_INIT,
  DELETE_FAVORITE_REQUESTED,
  DELETE_FAVORITE_SUCCESS,
  GET_IMAGES_FAILED,
  GET_IMAGES_REQUESTED,
  GET_IMAGES_SUCCESS,
  GET_VOTE_SCORE_FAILED,
  GET_VOTE_SCORE_REQUESTED,
  GET_VOTE_SCORE_SUCCESS,
  GET_FAVORITE_REQUESTED,
  GET_FAVORITE_SUCCESS,
  GET_FAVORITE_FAILED,
  ImagesActionTypes,
  POST_FAVORITE_FAILED,
  POST_FAVORITE_INIT,
  POST_FAVORITE_REQUESTED,
  POST_FAVORITE_SUCCESS,
  POST_IMAGE_UPLOAD_FAILED,
  POST_IMAGE_UPLOAD_INIT,
  POST_IMAGE_UPLOAD_REQUESTED,
  POST_IMAGE_UPLOAD_SUCCESS,
  POST_VOTE_FAILED,
  POST_VOTE_INIT,
  POST_VOTE_REQUESTED,
  POST_VOTE_SUCCESS,
} from "./types";

/**
 * /GET Images endpoint
 */
export const getImagesRequested = (): ImagesActionTypes => ({
  type: GET_IMAGES_REQUESTED,
});
export const getImagesSuccess = (images: Image[]): ImagesActionTypes => ({
  type: GET_IMAGES_SUCCESS,
  payload: images,
});

export const getImagesFailure = (error: GetImagesError): ImagesActionTypes => ({
  type: GET_IMAGES_FAILED,
  payload: error,
});

/**
 * /GET Favorites endpoint
 */
export const getFavoriteRequested = (): ImagesActionTypes => ({
  type: GET_FAVORITE_REQUESTED,
});
export const getFavoriteSuccess = (
  favorites: Favorite[]
): ImagesActionTypes => ({
  type: GET_FAVORITE_SUCCESS,
  payload: favorites,
});

export const getFavoriteFailure = (
  error: GetFavoritesError
): ImagesActionTypes => ({
  type: GET_FAVORITE_FAILED,
  payload: error,
});

/**
 * POST Image endpoint
 */
export const postImageUploadRequested = (): ImagesActionTypes => ({
  type: POST_IMAGE_UPLOAD_REQUESTED,
});
export const postImageUploadSuccess = (): ImagesActionTypes => ({
  type: POST_IMAGE_UPLOAD_SUCCESS,
});

export const postImageUploadFailed = (
  error: PostImageError
): ImagesActionTypes => ({
  type: POST_IMAGE_UPLOAD_FAILED,
  payload: error,
});

export const postImageUploadInit = (): ImagesActionTypes => ({
  type: POST_IMAGE_UPLOAD_INIT,
});

/**
 * POST Favorites endpoint
 */
export const postFavoriteRequested = (): ImagesActionTypes => ({
  type: POST_FAVORITE_REQUESTED,
});
export const postFavoriteSuccess = (
  favorite_id: string
): ImagesActionTypes => ({
  type: POST_FAVORITE_SUCCESS,
  payload: favorite_id,
});

export const postFavoriteFailed = (
  error: PostFavoriteError
): ImagesActionTypes => ({
  type: POST_FAVORITE_FAILED,
  payload: error,
});

export const postFavoriteInit = (): ImagesActionTypes => ({
  type: POST_FAVORITE_INIT,
});

/**
 * POST Post Votes endpoint
 */
export const postVoteRequested = (): ImagesActionTypes => ({
  type: POST_VOTE_REQUESTED,
});
export const postVoteSuccess = (): ImagesActionTypes => ({
  type: POST_VOTE_SUCCESS,
});

export const postVoteFailed = (error: PostVoteError): ImagesActionTypes => ({
  type: POST_VOTE_FAILED,
  payload: error,
});

export const postVoteInit = (): ImagesActionTypes => ({
  type: POST_VOTE_INIT,
});

/**
 * /GET Vote Score endpoint
 */
export const getVoteScoreRequested = (): ImagesActionTypes => ({
  type: GET_VOTE_SCORE_REQUESTED,
});
export const getVoteScoreSuccess = (
  voteScore: VoteScore[]
): ImagesActionTypes => ({
  type: GET_VOTE_SCORE_SUCCESS,
  payload: voteScore,
});

export const getVoteScoreFailure = (
  error: GetVoteScoreError
): ImagesActionTypes => ({
  type: GET_VOTE_SCORE_FAILED,
  payload: error,
});

/**
 * DELETE Favorite endpoint
 */
export const deleteFavoriteRequested = (): ImagesActionTypes => ({
  type: DELETE_FAVORITE_REQUESTED,
});
export const deleteFavoriteSuccess = (): ImagesActionTypes => ({
  type: DELETE_FAVORITE_SUCCESS,
});

export const deleteFavoriteFailed = (
  error: DeleteFavoriteError
): ImagesActionTypes => ({
  type: DELETE_FAVORITE_FAILED,
  payload: error,
});

export const deleteFavoriteInit = (): ImagesActionTypes => ({
  type: DELETE_FAVORITE_INIT,
});
