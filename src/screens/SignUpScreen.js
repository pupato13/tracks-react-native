import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const SignUpScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Sign Up Screen</Text>
            <TouchableOpacity onPress={() => navigation.navigate("SignIn")}>
                <Text>go to Sign In</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("mainFlow")}>
                <Text>go to Main Flow</Text>
            </TouchableOpacity>
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
