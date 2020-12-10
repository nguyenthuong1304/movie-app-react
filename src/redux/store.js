import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './index';
import rootSaga from './saga';

const sagaMiddleware = createSagaMiddleware();

const store = compose(
  applyMiddleware(sagaMiddleware),
  window.devToolsExtension && window.devToolsExtension(),
)(createStore)(rootReducer);

sagaMiddleware.run(rootSaga);

export default store;