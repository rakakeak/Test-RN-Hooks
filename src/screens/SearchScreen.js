import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import SearchBar from '../components/SearchBar'
import useResults from '../hooks/useResults'
import ResultsList from '../components/ResultsList'

const SearchScreen = ({ navigation }) => {
    const [term, setTerms] = useState('');
    const [searchApi, results, errorMessage] = useResults();

    const filterResultsByPrice = (price) => {
        // price === '$' || '$$' || '$$$'
        return results.filter(result => {
            return result.price === price;
        })
    }

    return (
        <>
            <SearchBar
                term={term}
                onTermChange={setTerms}
                onTermSubmit={() => searchApi(term)}
            />
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            {/* <Text>We have found {results.length} results</Text> */}
            <ScrollView>
                <ResultsList
                    results={filterResultsByPrice('$')}
                    title="Cost Effective"
                    />
                <ResultsList
                    results={filterResultsByPrice('$$')}
                    title="Bit Pricier"
                     />
                <ResultsList
                    results={filterResultsByPrice('$$$')}
                    title="Big Spender"
                   />
            </ScrollView>
        </>
    );
};



const styles = StyleSheet.create({

});

export default SearchScreen;