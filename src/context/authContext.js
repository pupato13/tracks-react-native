import createDataContext from "./createDataContext";

const authReducer = (state, action) => {
    switch (action.type) {
        case value:
            return state;
        default:
            return state;
    }
};

const signUp = (dispatch) => {
    return async ({ email, password }) => {};
};

const signIn = (dispatch) => {
    return async ({ email, password }) => {
        // go to api and signIn
    };
};

const signOut = (dispatch) => {
    return () => {
        // manage async storage
    };
};

export const { Provider, Context } = createDataContext(
    authReducer,
    { signUp, signIn, signOut },
    { isSignedIn: false }
);
