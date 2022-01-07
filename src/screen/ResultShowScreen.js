import React from 'react';
import { Text, View, TextInput, StyleSheet} from 'react-native';
export const ResultShowScreen = ({ navigation }) => {
    const id = navigation.getParam('id');
    console.log(id);
    return (
        <>
           <Text>This is a ResultShowScreen</Text> 
        </>
    )
}

const styles = StyleSheet.create ({});

