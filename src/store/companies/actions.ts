import { Company } from "../../types";
import { GetCompaniesError } from "../../util/getCompanies";
import { PostCompanyError } from "../../util/postCompany";
import {
  CompaniesActionTypes,
  GET_COMPANIES_FAILED,
  GET_COMPANIES_SUCCESS,
  GET_COMPANIES_REQUESTED,
  POST_COMPANY_SUCCESS,
  POST_COMPANY_REQUESTED,
  POST_COMPANY_FAILED,
  POST_COMPANY_INIT,
} from "./types";

/**
 * /GET endpoint
 */
export const getCompaniesRequested = (): CompaniesActionTypes => ({
  type: GET_COMPANIES_REQUESTED,
});
export const getCompaniesSuccess = (
  companies: Company[]
): CompaniesActionTypes => ({
  type: GET_COMPANIES_SUCCESS,
  payload: companies,
});

export const getCompaniesFailure = (
  error: GetCompaniesError
): CompaniesActionTypes => ({
  type: GET_COMPANIES_FAILED,
  payload: error,
});

/**
 * POST endpoint
 */
export const postCompanyRequested = (): CompaniesActionTypes => ({
  type: POST_COMPANY_REQUESTED,
});
export const postCompanySuccess = (): CompaniesActionTypes => ({
  type: POST_COMPANY_SUCCESS,
});

export const postCompanyFailed = (
  error: PostCompanyError
): CompaniesActionTypes => ({
  type: POST_COMPANY_FAILED,
  payload: error,
});

export const postCompanyInit = (): CompaniesActionTypes => ({
  type: POST_COMPANY_INIT,
});
