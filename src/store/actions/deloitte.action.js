import { ActionTypes } from '../types';
import { notification } from 'antd';

// const getLogo = () => async (dispatch) => {
//     try {
//         dispatch(loadingLogo(true));
//         const response = await fetch('https://app.highattendance.com/get-comp-logo/2731');
//         const logoURL = await response.text();
//
//         dispatch(setCompLogo(logoURL));
//     } catch (e) {
//         console.log(e.message);
//     } finally {
//         dispatch(loadingLogo(false));
//     }
// };

const getAppCategories = () => async (dispatch) => {
  try {
      dispatch(loadingCategories(true));
      const response = await fetch('https://app.highattendance.com/content-app-cats/jVV3Q?appId=2731&eventId=2570');
      const { header_logo, title, cats } = await response.json();

      dispatch(setCompLogo(header_logo));
      dispatch(setAppTitle(title));
      dispatch(setCategories(cats));
      dispatch(onSelectCategory(cats[0].name));

  } catch (e) {
      notification.error(e.message);
  } finally {
      dispatch(loadingCategories(false));
  }
};

const onSelectCategory = (key) => async (dispatch) => {
    try {
        dispatch(setEntryCategory(key));
    } catch (e) {
        notification.error(e.message);
    }
};

const setEntryCategory = (key) => {
  return {
      type: ActionTypes.SET_ENTRY_CATEGORY,
      payload: key
  };
};

const setCategories = (categories) => {
  return {
      type: ActionTypes.SET_CATEGORIES,
      payload: [...categories]
  };
};

const setAppTitle = (title) => {
  return {
      type: ActionTypes.SET_APP_TITLE,
      payload: title
  };
};

const setCompLogo = (URL) => {
  return {
      type: ActionTypes.SET_COMP_LOGO,
      payload: URL
  };
};

const loadingCategories = (boolean) => {
  return {
      type: ActionTypes.CATEGORIES_LOADING,
      payload: boolean
  };
};

export const DeloitteActions = {
  getAppCategories,
  onSelectCategory
};