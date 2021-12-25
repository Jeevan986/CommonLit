import * as React from 'react';
import { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, TextInput, ActivityIndicator,Image, ScrollView} from 'react-native';
import { SafeAreaView} from 'react-native-safe-area-context';
import { WebView } from 'react-native-webview';
import HTMLView from 'react-native-htmlview';
import Ionicons from 'react-native-vector-icons/Ionicons';


export default function BookDetailsScreen({ route, navigation }) {
    const [book, setBook]= useState(null);
    const [product, setProduct] = useState([]);
    useEffect(()=> {
        let {book} = route.params;
        setBook(book)
        const book_id_int = book.id
        const book_id_str = book_id_int.toString();
        const bookDetailURL="https://www.commonlit.org/api/v1/raw_content/lesson_templates"+"/"+book_id_str+"?token=9759826c246d687a67328c4c81811bb108821e41af3c42ce41e6ff28ebf8bbba9737947232dd64e32df99a54a0add95c498001d917ca96258d50444af256a2dc";
        fetch(bookDetailURL)
            .then((response) => response.json())
            .then((json) => setProduct(json))
            .catch((error) => console.error(error))
        },[book]);
    
    if (book){
        return (
            <View style={{ flex: 3, alignItems: 'center', margin: '2%', padding: 15}}>
                <Image source={{uri: 'https://reactjs.org/logo-og.png'}} style={{width: 140, height: 200 , marginBottom: 5 }}/>
                <Text style={{ fontSize: 15, fontWeight: 'bold', marginBottom: 2, textAlign: 'center'}}>{product.name}</Text>
                <Text style={{ fontSize: 12, fontWeight: 'bold', marginBottom: 2 }}>Author : {product.author}</Text>
                <Text style={{ fontSize: 12, fontWeight: 'bold', marginBottom: 2 }}> Genre : {product.genres}</Text>
                <View style ={{flexDirection: 'row', borderWidth: 1, paddingVertical:2, margin: 5, borderRadius: 10, backgroundColor: 'rgba(0,0,0,0.2)'}}>
                    <View style ={{flex :1, alignItems: 'center' }}>
                        <Ionicons name="heart-outline" size={25}/>
                        <Text> Favourite </Text>
                    </View>
                    <View style ={{flex :1, alignItems: 'center' }}>
                        <Ionicons name="download-outline"  size = {25}/>
                        <Text>Download</Text>
                    </View>
                    <View style ={{flex :1, alignItems: 'center' }}>
                        <Ionicons name="list-outline"  size = {25}/>
                        <Text>Take Quiz</Text>
                    </View>
                </View>
                <View style ={{borderWidth:'0.75', padding: 15, borderRadius: 10, flex: 1, padding: 7}}>
                    <ScrollView bounces={false}>
                        <HTMLView addLineBreaks={false} value={product.html} />
                    </ScrollView>
                </View>
            </View>
        )
    } else {
        return(<></>)
    }
    
}