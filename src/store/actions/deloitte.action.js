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

      dispatch(setSearchedData([]));
      dispatch(setCompLogo(header_logo));
      dispatch(setAppTitle(title));
      dispatch(setCategories(cats));
      dispatch(setEntryCategory(cats[0].name));

  } catch (e) {
      notification.error({ message: e.message });
  } finally {
      dispatch(loadingCategories(false));
  }
};

const getCategoriesContent = () => async (dispatch) => {
    try {
        dispatch(loadingCategoriesContent(true));
        const response = await fetch('https://app.highattendance.com/app-contents/jVV3Q?appId=2731&eventId=2570');
        const { contents } = await response.json();

        dispatch(setContent(contents));
        dispatch(getContentImgs());
        dispatch(getEntryContent());

    } catch (e) {
        notification.error({ message: e.message });
    } finally {
        dispatch(loadingCategoriesContent(false));
    }
};

const getEntryContent = () => async (dispatch, getState) => {
  try {
      dispatch(loadingEntryCategoryContent(true));
      const { deloitte: { categories: { entry, content: { list } } } } = getState();

      const entryContent = list.find(({ catName }) => catName === entry);

      dispatch(setEntryContent(entryContent));

  } catch (e) {
    notification.error({ message: e.message });
  } finally {
      dispatch(loadingEntryCategoryContent(false));
  }
};

const getContentImgs = () => async (dispatch) => {
    try {
        dispatch(loadingImgs(true));
        const response = await fetch('https://app.highattendance.com/content-thumbnail-url/2731');
        const imgs = await response.json();

        dispatch(setImgs(imgs));

    } catch (e) {
        notification.error({ message: e.message });
    } finally {
        dispatch(loadingImgs(false));
    }
};

const searchContent = (value) => async (dispatch, getState) => {
    try {
        dispatch(searchLoading(true));
        const { deloitte: { categories: { content: { list } } } } = getState();

        let searchedContent = [];
        for (let i = 0; i <= list.length - 1; i++) {
            searchedContent = [...searchedContent, ...list[i].contentInf.filter(({ name }) => name.toLowerCase().includes(value.toLowerCase()))];
        }

        dispatch(setSearchedData(searchedContent));

    } catch (e) {
        notification.error({ message: e.message });
    } finally {
        dispatch(searchLoading(false));
    }
};


const setSearchedData = (content) => {
    return {
      type: ActionTypes.SET_SEARCHED_CONTENT,
      payload: [ ...content ]
    };
};

const setImgs = (imgs) => {
    return {
        type: ActionTypes.SET_IMGS,
        payload: [ ...imgs ]
    };
};

const setEntryContent = (content) => {
  return {
      type: ActionTypes.SET_ENTRY_CATEGORY_CONTENT,
      payload: { ...content }
  };
};

const setContent = (content) => {
    return {
        type: ActionTypes.SET_CATEGORIES_CONTENT,
        payload: [ ...content ]
    };
};

const onSelectCategory = (key) => async (dispatch) => {
    try {
        dispatch(setSearchedData([]));
        dispatch(setEntryCategory(key));
        dispatch(getEntryContent());
    } catch (e) {
        notification.error({ message: e.message });
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

const searchLoading = (boolean) => {
    return {
        type: ActionTypes.SEARCH_LOADING,
        payload: boolean
    };
};

const loadingImgs = (boolean) => {
    return {
        type: ActionTypes.IMGS_LOADING,
        payload: boolean
    };
};

const loadingEntryCategoryContent = (boolean) => {
  return {
      type: ActionTypes.ENTRY_CATEGORY_CONTENT_LOADING,
      payload: boolean
  };
};

const loadingCategoriesContent = ( boolean ) => {
    return {
        type: ActionTypes.CATEGORIES_CONTENT_LOADING,
        payload: boolean
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
  onSelectCategory,
  getCategoriesContent,
  getEntryContent,
  searchContent,
};