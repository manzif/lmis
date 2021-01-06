import { FETCH_RESOURCES_FAILURE, FETCH_RESOURCES_START, FETCH_RESOURCES_SUCCESS } from "../actions/types";

const INITIAL_STATE = {
    resources: [],
    fetching: false,
    fetched: false
};

export const resourcesReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_RESOURCES_START:
            return Object.assign({}, state, {
                fetching: true
            });
        case FETCH_RESOURCES_SUCCESS:
            return Object.assign({}, state, {
                resources: action.resources,
                fetching: false,
                fetched: true
            });
        case FETCH_RESOURCES_FAILURE:
            return Object.assign({}, state, {
                fetching: false,
                errors: action.errors
            });
        default:
            return state;
    }
};