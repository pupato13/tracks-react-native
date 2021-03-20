import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const TrackListScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Track List Screen</Text>
            <TouchableOpacity
                onPress={() => navigation.navigate("TrackDetail")}
            >
                <Text>go to Track Detail</Text>
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

export default TrackListScreen;
