import { getFavorites } from "./../../util/getFavorites";
import { deleteFavorite } from "../../util/deleteFavorite";
import { getImages } from "../../util/getImages";
import { getVoteScore } from "../../util/getVoteScore";
import { postFavorite } from "../../util/postFavorite";
import { postImage } from "../../util/postImage";
import { postVotes } from "../../util/postVotes";
import { AppThunk } from "../store";
import * as actions from "./actions";
import { ImagesActionTypes } from "./types";

export const getImagesAction =
  (): AppThunk => async (dispatch: (arg0: ImagesActionTypes) => void) => {
    dispatch(actions.getImagesRequested());

    const { uploadedImages, error } = await getImages();

    if (uploadedImages) {
      dispatch(actions.getImagesSuccess(uploadedImages));
    }
    if (error) {
      dispatch(actions.getImagesFailure(error));
    }
  };

export const postImageUploadAction =
  (
    file: string | Blob,
    sub_id: string | Blob,
    progressCallBack?: (percent: number) => void
  ): AppThunk =>
  async (dispatch: (arg0: ImagesActionTypes) => void) => {
    dispatch(actions.postImageUploadRequested());

    const { error } = await postImage(file, sub_id, progressCallBack);

    if (error) {
      dispatch(actions.postImageUploadFailed(error));
      return;
    }

    dispatch(actions.postImageUploadSuccess());
    dispatch(actions.postImageUploadInit());
  };

export const postFavoriteAction =
  (image_id: string, sub_id: string): AppThunk =>
  async (dispatch: (arg0: ImagesActionTypes) => void) => {
    dispatch(actions.postFavoriteRequested());

    const { error, favourite_id } = await postFavorite(image_id, sub_id);

    if (error) {
      dispatch(actions.postFavoriteFailed(error));
      return;
    }

    dispatch(actions.postFavoriteSuccess(favourite_id));
    dispatch(actions.postFavoriteInit());
  };

export const deleteFavoriteAction =
  (favourite_id: number | undefined): AppThunk =>
  async (dispatch: (arg0: ImagesActionTypes) => void) => {
    dispatch(actions.deleteFavoriteRequested());

    const { error } = await deleteFavorite(favourite_id);

    if (error) {
      dispatch(actions.deleteFavoriteFailed(error));
      return;
    }

    dispatch(actions.deleteFavoriteSuccess());
    dispatch(actions.deleteFavoriteInit());
  };

export const postVoteAction =
  (image_id: string, value: number, sub_id?: string): AppThunk =>
  async (dispatch: (arg0: ImagesActionTypes) => void) => {
    dispatch(actions.postVoteRequested());
    const { error } = await postVotes(image_id, value);

    if (error) {
      dispatch(actions.postVoteFailed(error));
      return;
    }

    dispatch(actions.postVoteSuccess());
    dispatch(actions.postVoteInit());
  };

export const getVoteScoreAction =
  (sub_id?: string, limit?: number, page?: number): AppThunk =>
  async (dispatch: (arg0: ImagesActionTypes) => void) => {
    dispatch(actions.getVoteScoreRequested());

    const { vote_scores, error } = await getVoteScore(sub_id, limit, page);

    if (vote_scores) {
      dispatch(actions.getVoteScoreSuccess(vote_scores));
    }
    if (error) {
      dispatch(actions.getVoteScoreFailure(error));
    }
  };

export const getFavoriteAction =
  (): AppThunk => async (dispatch: (arg0: ImagesActionTypes) => void) => {
    dispatch(actions.getVoteScoreRequested());

    const { favorites, error } = await getFavorites();

    if (favorites) {
      dispatch(actions.getFavoriteSuccess(favorites));
    }
    if (error) {
      dispatch(actions.getFavoriteFailure(error));
    }
  };
