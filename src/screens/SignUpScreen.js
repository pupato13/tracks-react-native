import React from "react";
import { View, Text, StyleSheet } from "react-native";

const SignUpScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Sign Up Screen</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    title: {
        fontSize: 24,
    },
});

export default SignUpScreen;
