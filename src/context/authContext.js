import createDataContext from "./createDataContext";
import trackerApi from "../api/trackerApi";
import AsyncStorage from "@react-native-community/async-storage";

const TOKEN_KEY = "@TrackersApp";
const ACTIONS = {
    ADD_ERROR: "add_error",
    SIGN_UP: "sign_up",
};

const authReducer = (state, action) => {
    switch (action.type) {
        case ACTIONS.ADD_ERROR:
            return { ...state, errorMessage: action.payload };
        case ACTIONS.SIGN_UP:
            return { token: action.payload, errorMessage: "" };
        default:
            return state;
    }
};

const signUp = (dispatch) => async ({ email, password }) => {
    try {
        const response = await trackerApi.post("/signup", {
            email,
            password,
        });

        await AsyncStorage.setItem(TOKEN_KEY, response.data.token);

        dispatch({
            type: ACTIONS.SIGN_UP,
            payload: response.data.token,
        });
    } catch (error) {
        dispatch({
            type: ACTIONS.ADD_ERROR,
            payload: "Something went wrong with Sign Up!",
        });
    }
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
        token: null,
        errorMessage: "",
    }
);
