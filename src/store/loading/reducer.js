import { actions } from '../../constants/Constants';

const reducerMapping = {
  [actions.onLoading]: (loading, action) => action.state,
  [actions.offLoading]: (loading, action) => action.state
};

const reducer = (loading = false, action) => {
  if (!reducerMapping[action.type]) {
    return loading;
  }
  return reducerMapping[action.type](loading, action);
};

export default reducer;
