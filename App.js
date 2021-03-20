import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
    return (
        <View style={styles.container}>
            <Text
                style={{ color: "#d72893", fontSize: 20, textAlign: "center" }}
            >
                Open up App.js to start working on your app!
            </Text>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#1a154b",
        alignItems: "center",
        justifyContent: "center",
    },
});
