import { ActionTypes } from '../types';

const initialState = {
    categories: {
        list: [],
        logo: null,
        title: null,
        entry: null,
        isLoading: false
    }
};

const DeloitteReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.CATEGORIES_LOADING:
            return {
              ...state,
              categories: {
                ...state.categories,
                isLoading: payload,
              }
            };
        case ActionTypes.SET_COMP_LOGO:
            return {
                ...state,
                categories: {
                  ...state.categories,
                  logo: payload
                }
            };
        case ActionTypes.SET_APP_TITLE:
            return {
                ...state,
                categories: {
                    ...state.categories,
                    title: payload,
                }
            };
        case ActionTypes.SET_CATEGORIES:
            return {
                ...state,
                categories: {
                    ...state.categories,
                    list: [...payload]
                }
            };
        case ActionTypes.SET_ENTRY_CATEGORY:
            return {
                ...state,
                categories: {
                    ...state.categories,
                    entry: payload
                }
            };
        default: return state;
    }
};

export default DeloitteReducer;