import { actions } from '../../constants/Constants'

const onLoading = () => ({
  type: actions.onLoading,
  state: true
});

const offLoading = () => ({
  type: actions.offLoading,
  state: false
});

export { onLoading, offLoading };
