import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native'
import Feather from 'react-native-vector-icons/Feather'

const SearchBar = ({term, onTermChange, onTermSubmit }) => {
    return (
        <View style={styles.background}>
            <Feather name="search" style={styles.iconStyle} />
            <TextInput 
            autoCapitalize='none'
            autoCorrect={false}
            style={styles.inputStyle} 
            placeholder='Search' 
            value={term}
            onChangeText={onTermChange}
            onEndEditing={onTermSubmit}
            />  
        </View>
    )
};

const styles = StyleSheet.create({
    background: {
        marginTop:10,
        backgroundColor: '#F0EEEE',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection:'row',
        marginBottom:10
        
    },
    inputStyle: {
        fontSize: 18,
        flex:1
    },
    iconStyle: {
        fontSize: 35,
        alignSelf:'center',
        marginHorizontal:15
    }
});

export default SearchBar;