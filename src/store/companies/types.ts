import { Company } from "../../types";
import RequestStatus from "../RequestStatus";
import { GetCompaniesError } from "../../util/getCompanies";
import { PostCompanyError } from "../../util/postCompany";

export const GET_COMPANIES_REQUESTED = "GET_COMPANIES_REQUESTED";
export const GET_COMPANIES_SUCCESS = "GET_COMPANIES_SUCCESS";
export const GET_COMPANIES_FAILED = "GET_COMPANIES_FAILED";

export const POST_COMPANY_REQUESTED = "POST_COMPANY_REQUESTED";
export const POST_COMPANY_SUCCESS = "POST_COMPANY_SUCCESS";
export const POST_COMPANY_FAILED = "POST_COMPANY_FAILED";
export const POST_COMPANY_INIT = "POST_COMPANY_INIT";

export type CompaniesState = {
  companyList: Company[];
  getCompaniesState: RequestStatus;
  getCompaniesError: GetCompaniesError | undefined;
  postCompanyState: RequestStatus;
  postCompanyError: PostCompanyError | undefined;
};

type GetCompaniesRequestedAction = {
  type: typeof GET_COMPANIES_REQUESTED;
};

type GetCompaniesSuccessAction = {
  type: typeof GET_COMPANIES_SUCCESS;
  payload: Company[];
};
type GetCompaniesFailedAction = {
  type: typeof GET_COMPANIES_FAILED;
  payload: Error;
};
type PostCompanyRequestedAction = {
  type: typeof POST_COMPANY_REQUESTED;
};

type PostCompanySuccessAction = {
  type: typeof POST_COMPANY_SUCCESS;
};
type PostCompanyFailedAction = {
  type: typeof POST_COMPANY_FAILED;
  payload: Error;
};
type PostCompanyInitAction = {
  type: typeof POST_COMPANY_INIT;
};
export type CompaniesActionTypes =
  | GetCompaniesRequestedAction
  | GetCompaniesSuccessAction
  | GetCompaniesFailedAction
  | PostCompanyRequestedAction
  | PostCompanySuccessAction
  | PostCompanyFailedAction
  | PostCompanyInitAction;
