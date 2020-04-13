import {combineReducers} from 'redux';

// 导航
import nav from './nav';
// 业务
import theme from './theme';
import weather from './weather';
import location from './location';
import postcode from './postcode';

/**
 * 3.合并reducer
 * @type {Reducer<any> | Reducer<any, AnyAction>}
 */
export default combineReducers({
  nav: nav,
  theme: theme,
  weather: weather,
  location: location,
  postcode: postcode,
});

// const redu = combineReducers({
//   nav: nav,
//   theme: theme,
// });

// export default redu;
