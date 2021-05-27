import {
  ImagesState,
  ImagesActionTypes,
  GET_IMAGES_REQUESTED,
  GET_IMAGES_SUCCESS,
  GET_IMAGES_FAILED,
  POST_IMAGE_UPLOAD_REQUESTED,
  POST_IMAGE_UPLOAD_FAILED,
  POST_IMAGE_UPLOAD_SUCCESS,
  POST_IMAGE_UPLOAD_INIT,
  POST_FAVORITE_REQUESTED,
  POST_FAVORITE_SUCCESS,
  POST_FAVORITE_FAILED,
  POST_FAVORITE_INIT,
  POST_VOTE_REQUESTED,
  POST_VOTE_SUCCESS,
  POST_VOTE_FAILED,
  POST_VOTE_INIT,
  GET_VOTE_SCORE_REQUESTED,
  GET_VOTE_SCORE_SUCCESS,
  GET_VOTE_SCORE_FAILED,
  GET_FAVORITE_REQUESTED,
  GET_FAVORITE_SUCCESS,
  GET_FAVORITE_FAILED,
  DELETE_FAVORITE_REQUESTED,
  DELETE_FAVORITE_SUCCESS,
  DELETE_FAVORITE_FAILED,
  DELETE_FAVORITE_INIT,
} from "./types";
import RequestStatus from "../RequestStatus";

export const initialState: ImagesState = {
  imageList: [],
  voteScore: [],
  favorites: [],
  postImageState: RequestStatus.Initial,
  postImageError: undefined,
  getImagesState: RequestStatus.Initial,
  getImagesError: undefined,
  getFavoriteState: RequestStatus.Initial,
  getFavoriteError: undefined,
  postFavoriteState: RequestStatus.Initial,
  postFavoriteError: undefined,
  deleteFavoriteState: RequestStatus.Initial,
  deleteFavoriteError: undefined,
  postVoteState: RequestStatus.Initial,
  postVoteError: undefined,
  getVoteScoreState: RequestStatus.Initial,
  getVoteScoreError: undefined,
};

export const imageReducers = (
  state = initialState,
  action: ImagesActionTypes
) => {
  switch (action.type) {
    case POST_IMAGE_UPLOAD_REQUESTED: {
      return { ...state, postImageState: RequestStatus.Requested };
    }
    case POST_IMAGE_UPLOAD_SUCCESS: {
      return { ...state, postImageState: RequestStatus.Success };
    }
    case POST_IMAGE_UPLOAD_FAILED: {
      return {
        ...state,
        postImageState: RequestStatus.Failed,
        postImageError: action.payload,
      };
    }
    case POST_IMAGE_UPLOAD_INIT: {
      return {
        ...state,
        postImageState: RequestStatus.Initial,
        postImageError: undefined,
      };
    }
    case GET_IMAGES_REQUESTED: {
      return { ...state, getImagesState: RequestStatus.Requested };
    }
    case GET_IMAGES_SUCCESS: {
      return {
        ...state,
        getImagesState: RequestStatus.Success,
        imageList: action.payload,
        getImagesError: undefined,
      };
    }
    case GET_IMAGES_FAILED: {
      return {
        ...state,
        getImagesState: RequestStatus.Failed,
        getImagesError: action.payload,
      };
    }
    case GET_FAVORITE_REQUESTED: {
      return { ...state, getImagesState: RequestStatus.Requested };
    }
    case GET_FAVORITE_SUCCESS: {
      return {
        ...state,
        getImagesState: RequestStatus.Success,
        favorites: action.payload,
        getImagesError: undefined,
      };
    }
    case GET_FAVORITE_FAILED: {
      return {
        ...state,
        getImagesState: RequestStatus.Failed,
        getImagesError: action.payload,
      };
    }
    case POST_FAVORITE_REQUESTED: {
      return { ...state, postFavoriteState: RequestStatus.Requested };
    }
    case POST_FAVORITE_SUCCESS: {
      return {
        ...state,
        favorite_id: action.payload,
        postFavoriteState: RequestStatus.Success,
      };
    }
    case POST_FAVORITE_FAILED: {
      return {
        ...state,
        postFavoriteState: RequestStatus.Failed,
        postFavoriteError: action.payload,
      };
    }
    case POST_FAVORITE_INIT: {
      return {
        ...state,
        postFavoriteState: RequestStatus.Initial,
        postFavoriteError: undefined,
      };
    }

    case POST_VOTE_REQUESTED: {
      return { ...state, postVoteState: RequestStatus.Requested };
    }
    case POST_VOTE_SUCCESS: {
      return { ...state, postVoteState: RequestStatus.Success };
    }
    case POST_VOTE_FAILED: {
      return {
        ...state,
        postVoteState: RequestStatus.Failed,
        postVoteError: action.payload,
      };
    }
    case POST_VOTE_INIT: {
      return {
        ...state,
        postVoteState: RequestStatus.Initial,
        postVoteError: undefined,
      };
    }

    case GET_VOTE_SCORE_REQUESTED: {
      return { ...state, getVoteScoreState: RequestStatus.Requested };
    }
    case GET_VOTE_SCORE_SUCCESS: {
      return {
        ...state,
        getVoteScoreState: RequestStatus.Success,
        voteScore: action.payload,
        getVoteScoreError: undefined,
      };
    }
    case GET_VOTE_SCORE_FAILED: {
      return {
        ...state,
        getVoteScoreState: RequestStatus.Failed,
        getVoteScoreError: action.payload,
      };
    }
    case DELETE_FAVORITE_REQUESTED: {
      return { ...state, deleteFavoriteState: RequestStatus.Requested };
    }
    case DELETE_FAVORITE_SUCCESS: {
      return {
        ...state,
        deleteFavoriteState: RequestStatus.Success,
      };
    }
    case DELETE_FAVORITE_FAILED: {
      return {
        ...state,
        deleteFavoriteState: RequestStatus.Failed,
        deleteFavoriteError: action.payload,
      };
    }
    case DELETE_FAVORITE_INIT: {
      return {
        ...state,
        deleteFavoriteState: RequestStatus.Initial,
        deleteFavoriteError: undefined,
      };
    }
    default:
      return initialState;
  }
};
