import React, { useState } from 'react';
import { View, Text, StyleSheet} from 'react-native';
import { SearchBar } from '../components/SearchBar';

export const SearchScreen = () => {

    const [term, setTerm] = useState('');
  return (
        <View> 
            <SearchBar 
            value={term} 
            onTermChange={(term)=>setTerm(term)}
            onTermSubmit={()=>{console.log("term submitted")}}
            />
        <Text>this is searchsreen</Text>
        <Text>{term}</Text>
        </View>
    )
}

const styles = StyleSheet.create ({});
