import * as React from 'react';
import { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, TextInput, ActivityIndicator,Image} from 'react-native';
import { SafeAreaView,ScrollView } from 'react-native-safe-area-context';
import { SearchBar } from 'react-native-screens';
import downloads from '../Download_Favourite_Data/downloadedbookdata'

export default function DownloadsScreen({ navigation }) {
    const [allDownloads,setDownloads]=useState([]);
    useEffect(() => {
        setDownloads(downloads);
        return()=>{

        }
      }, [downloads]);
    return (
        <FlatList
            numColumns={2}
            data = {allDownloads}
            key={'#'}
            keyExtractor = {({id}, index) => "#"+ id }
            renderItem = {({ item }) => (
                <View style = {{width: '48%', alignItems:"center", margin: '1%', borderWidth:'0.75', padding: 15}}>
                    <TouchableOpacity onPress={() => {navigation.push("DownloadedBook", {book : item})}}>
                        <Image source={{uri: 'https://reactjs.org/logo-og.png'}} style={{width: 180, height: 250}}/>
                        <Text numberOfLines={1} style = {{textAlign: 'center', fontWeight: 'bold'}}>{item.name} </Text>
                    </TouchableOpacity>  
                </View>  
            )}
        />
    );
}


