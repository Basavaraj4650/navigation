import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const InitialPage = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Text>Welcome To InitialPage</Text>
            <Button
                title="Go to Home"
                onPress={() => navigation.navigate('Home')}
            />
            <Button
                title="Go to About"
                onPress={() => navigation.navigate('About')}
            />
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

export default InitialPage;
