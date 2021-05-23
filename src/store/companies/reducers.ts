import {
  GET_COMPANIES_REQUESTED,
  CompaniesState,
  CompaniesActionTypes,
  GET_COMPANIES_SUCCESS,
  GET_COMPANIES_FAILED,
  POST_COMPANY_REQUESTED,
  POST_COMPANY_SUCCESS,
  POST_COMPANY_FAILED,
  POST_COMPANY_INIT,
} from "./types";
import RequestStatus from "../RequestStatus";

export const initialState: CompaniesState = {
  companyList: [],
  getCompaniesState: RequestStatus.Initial,
  getCompaniesError: undefined,
  postCompanyState: RequestStatus.Initial,
  postCompanyError: undefined,
};

const companiesReducer = (
  state = initialState,
  action: CompaniesActionTypes
) => {
  switch (action.type) {
    case GET_COMPANIES_REQUESTED: {
      return { ...state, getCompaniesState: RequestStatus.Requested };
    }
    case GET_COMPANIES_SUCCESS: {
      return {
        ...state,
        getCompaniesState: RequestStatus.Success,
        companyList: action.payload,
        getCompaniesError: undefined,
      };
    }
    case GET_COMPANIES_FAILED: {
      return {
        ...state,
        getCompaniesState: RequestStatus.Failed,
        getCompaniesError: action.payload,
      };
    }
    case POST_COMPANY_REQUESTED: {
      return { ...state, postCompanyState: RequestStatus.Requested };
    }
    case POST_COMPANY_SUCCESS: {
      return { ...state, postCompanyState: RequestStatus.Success };
    }
    case POST_COMPANY_FAILED: {
      return {
        ...state,
        postCompanyState: RequestStatus.Failed,
        postCompanyError: action.payload,
      };
    }
    case POST_COMPANY_INIT: {
      return {
        ...state,
        postCompanyState: RequestStatus.Initial,
        postCompanyError: undefined,
      };
    }
    default:
      return initialState;
  }
};

export default companiesReducer;
