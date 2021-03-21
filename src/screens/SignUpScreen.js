import React from "react";
import { View, StyleSheet } from "react-native";
import { Button, Text, Input } from "react-native-elements";
import Spacer from "../components/Spacer";

const SignUpScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text h3 style={{ marginBottom: 24, textAlign: "center" }}>
                Sign Up for Tracker
            </Text>
            <Spacer />
            <Input label="Email" />
            <Spacer />
            <Input label="Password" secureTextEntry />
            <Spacer />
            <Button title="Sign Up" />
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
    },
    title: {
        fontSize: 24,
    },
});

export default SignUpScreen;
