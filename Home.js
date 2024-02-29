import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';


const Home = () => {
    return (
        <View style={styles.container}>
            <Text>Welcome To Home Page </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        fontWeight: "bold",
        fontSize: 25
    },
});

export default Home;
