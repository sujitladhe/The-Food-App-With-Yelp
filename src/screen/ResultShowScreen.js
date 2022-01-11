import React, {useState, useEffect} from 'react';
import { Text, View, TextInput, StyleSheet, Image, FlatList} from 'react-native';
import yelp from '../api/yelp';

export const ResultShowScreen = ({ navigation }) => {
    const id = navigation.getParam('id');
    const [result, setResult] = useState(null);
    const getResult = async (id) => {
        const response = await yelp.get(`/${id}`);
        setResult(response.data);
    }
    useEffect(() => {
       getResult(id);
    }, []);

    if(!result){ return null; }
    console.log(result.photos);
    return (
        <>
           <Text>We have got results for {result.name}</Text> 
           <FlatList 
                data={result.photos} 
                keyExtractor={(item) => item} 
                renderItem={({item})=>{
                    return(
                        <Image style={styles.image} source={{uri: item}}/>
                    );
                }}
           />
        </>
    )
}

const styles = StyleSheet.create ({
    image: {
        height: 150,
        width: 250
    },
});

