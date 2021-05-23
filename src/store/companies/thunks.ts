import { Company } from "../../types";
import getCompanies from "../../util/getCompanies";
import postCompany from "../../util/postCompany";
import { AppThunk } from "../store";
import * as actions from "./actions";
import { CompaniesActionTypes } from "./types";

export const getCompaniesAction =
  (): AppThunk => async (dispatch: (arg0: CompaniesActionTypes) => void) => {
    dispatch(actions.getCompaniesRequested());

    const { companies, error } = await getCompanies();

    if (companies) {
      dispatch(actions.getCompaniesSuccess(companies));
    }
    if (error) {
      dispatch(actions.getCompaniesFailure(error));
    }
  };

export const postCompanyAction =
  (company: Company): AppThunk =>
  async (dispatch: (arg0: CompaniesActionTypes) => void) => {
    dispatch(actions.postCompanyRequested());

    const { error } = await postCompany(company);

    if (error) {
      dispatch(actions.postCompanyFailed(error));
      return;
    }

    dispatch(actions.postCompanySuccess());
    dispatch(actions.postCompanyInit());
  };
