import React from 'react';
import { View, TextInput, StyleSheet} from 'react-native';
import { Feather } from '@expo/vector-icons';

export const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
    return (
        <View style={styles.backgroundStyle}>
        <Feather name="search" size={30} color="black" style={styles.iconStyle} />
        <TextInput 
        autoCapitalize='none'
        autoCorrect={false}
        placeholder='Search' 
        style={styles.inputStyle} 
        value={term}
        onChangeText={onTermChange}
        onEndEditing={onTermSubmit}
        />
        </View>
    )
}

const styles = StyleSheet.create ({
    backgroundStyle: {
        backgroundColor: 'grey',
        height: 50,
        marginHorizontal: 15,
        borderRadius: 5,
        flexDirection: 'row',
        marginTop: 10,
    },
    inputStyle: {
        flex: 1,
        fontSize: 18
    },
    iconStyle: {
         alignSelf: 'center',
         marginHorizontal: 10
    }
});
