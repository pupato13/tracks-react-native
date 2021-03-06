import React from "react";
import { View, Text, StyleSheet } from "react-native";

const TrackDetailScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Track Detail Screen</Text>
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

export default TrackDetailScreen;
