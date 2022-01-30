import * as React from 'react';
import { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, TextInput, ActivityIndicator,Image, ScrollView, SafeAreaView} from 'react-native';
import HTMLView from 'react-native-htmlview';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import * as Speech from 'expo-speech';
import * as FileSystem from 'expo-file-system';
import {link_cl} from '../Download_Favourite_Data/links';
//import DownloadedBookList from '../Download_Favourite_Data/downloadedbookdata';
//import favoriteBookList from '../Download_Favourite_Data/favouritebooks';



export default function BookDetailsScreen({ route, navigation }) {
    const [book, setBook]= useState(null);
    const [product, setProduct] = useState([]);
    const [isPress,setPress] = useState(true);
    const [favoritepressed, setfavoritepressed]=useState(false);
    const [isLoading,setLoading]=useState(false)
    useEffect(()=> {
        let {book} = route.params;
        setBook(book)
        const book_id_int = book.id
        const book_id_str = book_id_int.toString();
        const bookDetailURL=link_cl[0]+"/"+book_id_str+link_cl[1];
        fetch(bookDetailURL)
            .then((response) => response.json())
            .then((json) => setProduct(json))
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
        //const genre = product.genres
        //setgen(genre.join(", "))
        },[book]);

    const speakbuttonText = isPress? "Hablar": "Detener";
    const speakbuttonIcon = isPress? "volume-off-outline":"volume-high-outline";
    const favoritecolor = favoritepressed? "#C21807":"'rgba(0,0,0,0.1)'"

    //to convert product.html to a text format and remove all the html stuff
    const htmltotext=(textwithhtml)=>{
        let strippedHtml = [textwithhtml.replace(/<[^>]+>/g, '')]
        return(
            strippedHtml[0]
        )
    }

    const combinegenres=(genreofbook)=>{
        let combined=[]
        genreofbook? 
            combined=[" "]
        :
        combined=[genreofbook.join(", ")]
        return(
            combined
        )
    }
    
    if (book){
        //const genre = product.genres
        //const genretotext= genre.join(", ")

        return (
            <View style={{ flex: 3, alignItems: 'center', margin: '2%', padding: 15}}>
                <Image source={{uri: 'https://reactjs.org/logo-og.png'}} style={{width: 130, height: 180 , marginBottom: 5 }}/>
                <Text style={{ fontSize: 15, fontWeight: 'bold', marginBottom: 2, textAlign: 'center'}}>{product.name}</Text>
                <Text style={{ fontSize: 12, fontWeight: 'bold', marginBottom: 2 }}>Autor : {product.author} </Text>
                <Text style={{ fontSize: 12, fontWeight: 'bold', marginBottom: 2 }}> Genres : {product.genres} </Text>
                <Text style={{ fontSize: 12, fontWeight: 'bold', marginBottom: 2 }}> Grado : {product.grade_level}</Text>
                <View style ={{flexDirection: 'row',borderWidth: 1, borderRadius: 10, paddingVertical:2, margin: 5, backgroundColor: 'rgba(0,0,0,0.2)'}}>
                    <View style ={{flex :1, alignItems: 'center', borderRightWidth: 1}}>
                        <TouchableOpacity  style={{ alignItems: 'center'}} onPress={() => {console.log("Favourite Pressed"); setfavoritepressed(!favoritepressed)}}>
                            <MaterialCommunityIcons name="heart" style={{color: favoritecolor,fontSize: 25, fontWeight:'bold'}}/>
                            <Text> Favorable </Text>
                        </TouchableOpacity>
                    </View>
                    <View style ={{flex :1, alignItems: 'center',borderRightWidth: 1}}>
                        <TouchableOpacity style={{ alignItems: 'center'}} onPress={() => {console.log("Download pressed working");const gen= product.genres; console.log(gen.join(", ")); alert('Descargar exitoso..')}}>
                            <Ionicons name="download-outline"  size = {25}/>
                            <Text>Descargar </Text>
                        </TouchableOpacity>
                    </View>
                    <View style ={{flex :1, alignItems: 'center',borderRightWidth: 1}}>
                        <TouchableOpacity style={{ alignItems: 'center'}} onPress={() => {console.log("Speak Pressed") ;setPress(!isPress);console.log(isPress); {isPress? Speech.speak(htmltotext(product.html),{language:'es'}):Speech.stop()}}}>
                            <Ionicons name={speakbuttonIcon}  size = {25}/>
                            <Text>{speakbuttonText}</Text>
                        </TouchableOpacity>
                    </View>
                    <View style ={{flex :1, alignItems: 'center'}}>
                        <TouchableOpacity style={{ alignItems: 'center'}} onPress={() => navigation.push("Examen" , {products : product})}>
                            <Ionicons name="list-outline"  size = {25}/>
                            <Text>Examen</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style ={{borderWidth:'0.75', padding: 15, borderRadius: 10, flex: 1, width:'96%'}}>
                    {/*
                    <TouchableOpacity >
                        <MaterialCommunityIcons name="arrow-expand"  size = {25} style={{borderWidth: 1, borderRadius:10, width:'10%'}}/>
                    </TouchableOpacity>
                    */}
                    <ScrollView bounces={false}>
                        <HTMLView addLineBreaks={false} value={product.html}/>
                        <Text>{"\n"}</Text>
                        <View style={{borderWidth:1, width:'100%', borderRadius:10, padding: 5}}>
                            <HTMLView addLineBreaks={true} value={product.permissions}/>
                        </View>
                    </ScrollView>
                </View>
            </View>
        )
    } else {
        return(<ActivityIndicator/>)
    }
    
}

const styles={
    btnNormal: {
        alignItems: 'center',
        flex: 1
    },
    btnPressed:{
        backgroundColor: 'red',
        alignItems: 'center',
        flex:1
    }
}