import { ROUTES } from "../utils/constants";
import { createSelector } from "reselect";
import { AppState } from "../store/combineReducers";
import { IRoutes } from "../store/selection/pages/reducer";

export interface IVisitedPages {
  showFrameworks: boolean;
  showPages: boolean;
  showReviewAndGenerate: boolean;
}

const getIsVisitedRoutes = (state: AppState) => state.wizardRoutes.isVisited;
const transformIsVisited = (isVisitedRoutes: IRoutes): IVisitedPages => ({
  showFrameworks: isVisitedRoutes[ROUTES.SELECT_FRAMEWORKS],
  showPages: isVisitedRoutes[ROUTES.SELECT_PAGES],
  showReviewAndGenerate: isVisitedRoutes[ROUTES.REVIEW_AND_GENERATE]
});

const getIsVisitedRoutesSelector = createSelector(
  getIsVisitedRoutes,
  transformIsVisited
);

export { getIsVisitedRoutesSelector };