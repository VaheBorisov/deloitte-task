import { ActionTypes } from '../types';

const initialState = {
    categories: {
        list: [],
        logo: null,
        title: null,
        entry: null,
        content: {
            list: [],
            isLoading: false
        },
        entryContent: {
            content: {},
            isLoading: false
        },
        imgs: {
          list: [],
          isLoading: false
        },
        searchedContent: {
            list: [],
            isLoading: false
        },
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
        case ActionTypes.CATEGORIES_CONTENT_LOADING:
            return {
                ...state,
                categories: {
                    ...state.categories,
                    content: {
                        ...state.categories.content,
                        isLoading: payload
                    }
                }
            };
        case ActionTypes.SET_CATEGORIES_CONTENT:
            return {
                ...state,
                categories: {
                    ...state.categories,
                    content: {
                        ...state.categories.content,
                        list: [ ...payload ]
                    }
                }
            };
        case ActionTypes.ENTRY_CATEGORY_CONTENT_LOADING:
            return {
              ...state,
              categories: {
                  ...state.categories,
                  entryContent: {
                      ...state.categories.entryContent,
                      isLoading: payload
                  }
              }
            };
        case ActionTypes.SET_ENTRY_CATEGORY_CONTENT:
            return {
                ...state,
                categories: {
                    ...state.categories,
                    entryContent: {
                        ...state.categories.entryContent,
                        content: { ...payload }
                    }
                }
            };
        case ActionTypes.IMGS_LOADING:
            return {
                ...state,
                categories: {
                    ...state.categories,
                    imgs: {
                        ...state.categories.imgs,
                        isLoading: payload
                    }
                }
            };
        case ActionTypes.SET_IMGS:
            return {
                ...state,
                categories: {
                    ...state.categories,
                    imgs: {
                        ...state.categories.imgs,
                        list: [ ...payload ]
                    }
                }
            };
        case ActionTypes.SEARCH_LOADING:
            return {
                ...state,
                categories: {
                    ...state.categories,
                    searchedContent: {
                        ...state.categories.searchedContent,
                        isLoading: payload
                    }
                }
            };
        case ActionTypes.SET_SEARCHED_CONTENT:
            return {
                ...state,
                categories: {
                    ...state.categories,
                    searchedContent: {
                        ...state.categories.searchedContent,
                        list: [ ...payload ]
                    }
                }
            };
        default: return state;
    }
};

export default DeloitteReducer;