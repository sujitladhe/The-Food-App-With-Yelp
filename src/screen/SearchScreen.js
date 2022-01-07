import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView} from 'react-native';
import ReasultsList from '../components/ReasultsList';
import { SearchBar } from '../components/SearchBar';
import { useResults } from '../hooks/useResults';

export const SearchScreen = () => {
    
    const [term, setTerm] = useState('');
    const [searchApi, results, errorMessage] = useResults(); 
    const filterResultsByPrice = (price) => {
        // price === $ || price === $$ || price === $$$
        return results.filter (results=>{
            return results.price === price;
        });
    };
  return (
        <> 
            <SearchBar 
            term={term} 
            onTermChange={setTerm}
            onTermSubmit={() => {searchApi(term)}}
            />
        {errorMessage ? <Text>{errorMessage}</Text> : null}
        <ScrollView>
            <ReasultsList results={filterResultsByPrice('$')} title="Cost Effective"/>
            <ReasultsList results={filterResultsByPrice('$$')} title="Bit Pricier"/>
            <ReasultsList results={filterResultsByPrice('$$$')} title="Big Spender"/>
        </ScrollView>
        </>
    );
};

const styles = StyleSheet.create ({});
