export const TURN_LOADING = 'TURN_LOADING';
export const ON_APP_READY = 'ON_APP_READY';
export const ON_APP_LOADING_FINISH = 'ON_APP_LOADING_FINISH';

export const turnLoading = (visible) => ({
  type: TURN_LOADING,
  payload: visible,
});

export const onAppReady = () => ({
  type: ON_APP_READY,
});

export const onAppLoadingFinish = () => ({
  type: ON_APP_LOADING_FINISH,
});
