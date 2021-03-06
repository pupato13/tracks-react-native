import React, { useState, useContext } from "react";
import { View, StyleSheet } from "react-native";
import { Button, Text, Input } from "react-native-elements";
import Spacer from "../components/Spacer";
import { Context as AuthContext } from "../context/authContext";

const SignUpScreen = ({ navigation }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { state, signUp } = useContext(AuthContext);

    const handleSignUp = async () => {
        console.log(email);
        console.log(password);
        await signUp({ email, password });
    };

    return (
        <View style={styles.container}>
            <Text h3 style={{ marginBottom: 24, textAlign: "center" }}>
                Sign Up for Tracker
            </Text>
            <Spacer />
            <Input
                autoFocus={false}
                autoCapitalize="none"
                autoCorrect={false}
                label="Email"
                value={email}
                onChangeText={setEmail}
            />
            <Spacer />
            <Input
                autoFocus={false}
                autoCapitalize="none"
                autoCorrect={false}
                label="Password"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
            />
            <Spacer />
            {state.errorMessage ? (
                <Text style={styles.errorMessage}>{state.errorMessage}</Text>
            ) : null}
            <Button title="Sign Up" onPress={() => handleSignUp()} />
        </View>
    );
};

SignUpScreen.navigationOptions = () => {
    return {
        headerShown: false,
    };
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        justifyContent: "center",
        marginBottom: 150,
    },
    title: {
        fontSize: 24,
    },
    errorMessage: {
        fontSize: 16,
        color: "#c53030",
        textAlign: "center",
        marginBottom: 16,
    },
});

export default SignUpScreen;
