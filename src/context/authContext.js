import createDataContext from "./createDataContext";
import trackerApi from "../api/trackerApi";

const authReducer = (state, action) => {
    switch (action.type) {
        case value:
            return state;
        default:
            return state;
    }
};

const signUp = (dispatch) => {
    return async ({ email, password }) => {
        try {
            const response = await trackerApi.post("/signup", {
                email,
                password,
            });

            console.log(response.data);
        } catch (error) {
            console.log("ERROR ->", error.response.data);
        }
    };
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
