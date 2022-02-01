import * as React from 'react';
import { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, TextInput, ActivityIndicator,Image} from 'react-native';
import { SafeAreaView,ScrollView } from 'react-native-safe-area-context';
import { SearchBar } from 'react-native-screens';
import {link_cl} from '../Download_Favourite_Data/links';

const booksURL=link_cl[0]+link_cl[1];
export default function LibraryScreen({ navigation }) {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData]= useState([]);
    const [search, setSearch]= useState('');
    useEffect(() => {
        fetchBooks();
        return()=>{

        }
      }, []);

    const fetchBooks=()=>{
        fetch(booksURL)
          .then((response) => response.json())
          .then((json) => {
              setData(json);
              setFilteredData(json);})
          .catch((error) => console.error(error))
          .finally(() => setLoading(false));
    }

    const searchFilter=(text)=>{
        if(text){
            const newData = data.filter((item)=>{
                const itemData = item.name? item.name.toUpperCase() : ''.toUpperCase();
                const textData = text.toUpperCase();
                return itemData.indexOf(textData)> -1;
            });
            setFilteredData(newData);
            setSearch(text);
            
        }else{
            setFilteredData(data);
            setSearch(text);
        }
        
    }

    return (
        <SafeAreaView style = {{flex:1 , backgroundColor: '#fff'}}>
            <TextInput
                style={styles.textInputStyle}
                value={search}
                placeholder="Buscar libros..."
                onChangeText={(text)=> searchFilter(text)}
            />
            {isLoading ? (
                <ActivityIndicator/>
            ):(
                <FlatList
                    numColumns={2}
                    data = {filteredData}
                    key={'#'}
                    keyExtractor = {({id}, index) => "#"+ id }
                    renderItem = {({ item }) => (
                        <View style = {{width: '48%', alignItems:"center", margin: '1%', borderWidth:'0.75', padding: 15}}>
                            <TouchableOpacity onPress={() => navigation.push("Detalles" , {book : item})} >
                                <Image source={{uri: 'https://reactjs.org/logo-og.png'}} style={{width: 180, height: 250}}/>
                                <Text numberOfLines={1} style = {{textAlign: 'center', fontWeight: 'bold'}}>{item.name} </Text>
                            </TouchableOpacity>  
                        </View>  
                    )}
                />
            )}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
      flex : 1,  
      paddingTop: 50,
      paddingHorizontal : 30,
      backgroundColor : '#fff'
    },
    tinyLogo: {
      width: 50,
      height: 50,
    },
    textInputStyle:{
        height:36,
        borderWidth:1,
        borderRadius:10,
        paddingLeft: 20,
        margin:5,
        borderColor:'black',
        backgroundColor:'white'
    }
});