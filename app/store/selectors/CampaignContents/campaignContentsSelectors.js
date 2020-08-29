import { createSelector } from 'reselect';

const campaignContentsStateSelector = state => state.get('campaignContents').toJS();

const campaignContentsSelector = createSelector(
  campaignContentsStateSelector,
  campaignContentsState => campaignContentsState && campaignContentsState.campaignContents
);

const campaignContentsLoadingSelector = createSelector(
  campaignContentsStateSelector,
  campaignContentsState => campaignContentsState && campaignContentsState.campaignContentsLoading
);
const campaignContentsCountSelector = createSelector(
  campaignContentsStateSelector,
  campaignContentsState => campaignContentsState && campaignContentsState.campaignContentsCount
);

const campaignContentSelector = createSelector(
  campaignContentsStateSelector,
  campaignContentsState => campaignContentsState && campaignContentsState.campaignContent
);

const campaignContentByIdLoadingSelector = createSelector(
  campaignContentsStateSelector,
  campaignContentsState => campaignContentsState && campaignContentsState.campaignContentByIdLoading
);

export {
  campaignContentsStateSelector,
  campaignContentsSelector,
  campaignContentsLoadingSelector,
  campaignContentsCountSelector,
  campaignContentSelector,
  campaignContentByIdLoadingSelector
};
