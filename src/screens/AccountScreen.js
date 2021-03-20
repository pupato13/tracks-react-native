import React from "react";
import { View, Text, StyleSheet } from "react-native";

const AccountScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Account Screen</Text>
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

export default AccountScreen;
