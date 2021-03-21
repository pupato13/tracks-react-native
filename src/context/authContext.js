import createDataContext from "./createDataContext";
import trackerApi from "../api/trackerApi";

const ACTIONS = {
    ADD_ERROR: "add_error",
};

const authReducer = (state, action) => {
    switch (action.type) {
        case ACTIONS.ADD_ERROR:
            return { ...state, errorMessage: action.payload };
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
            dispatch({
                type: ACTIONS.ADD_ERROR,
                payload: "Something went wrong with Sign Up!",
            });
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
    {
        isSignedIn: false,
        errorMessage: "",
    }
);
