import { React, useState, useEffect } from 'react';
import yelp from '../api/yelp';

export const useResults = () => {
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState("");
    
    const searchApi = async (searchTerm) => {
        console.log("API called");
        try {
        const response = await yelp.get(
            '/search',
            {
                params: {
                    limit: 50,
                    term: searchTerm,
                    location: "san jose"
                }
            });

        setResults(response.data.businesses);
    }
        catch (error) {
            // handle error
            setErrorMessage("Something went wrong");
          }
       
    };
    // searchApi("pasta");
    useEffect(() => {
        searchApi("cake");
    }, []);

    return [searchApi, results, errorMessage];
}
