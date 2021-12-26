import * as React from 'react';
import { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, TextInput, ActivityIndicator,Image} from 'react-native';
import { SafeAreaView,ScrollView } from 'react-native-safe-area-context';

const booksURL="https://www.commonlit.org/api/v1/raw_content/lesson_templates?token=9759826c246d687a67328c4c81811bb108821e41af3c42ce41e6ff28ebf8bbba9737947232dd64e32df99a54a0add95c498001d917ca96258d50444af256a2dc";

export default function HomeScreen({ navigation }){
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch(booksURL)
          .then((response) => response.json())
          .then((json) => setData(json))
          .catch((error) => console.error(error))
          .finally(() => setLoading(false));
      }, []);

    return (
        <SafeAreaView style = {{flex:1 , backgroundColor: '#fff'}}>
            {isLoading ? (
                <ActivityIndicator/>
            ):(
                <FlatList
                    numColumns={2}
                    data = {data}
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
    logo: {
      width: 66,
      height: 58,
    },
  });



