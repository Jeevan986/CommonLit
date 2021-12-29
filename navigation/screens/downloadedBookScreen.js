import * as React from 'react';
import { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, TextInput, ActivityIndicator,Image, ScrollView} from 'react-native';
import HTMLView from 'react-native-htmlview';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function downloadedBookScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <View style={{ flex: 1, alignItems: 'center', borderWidth:1, borderRadius: 10,paddingVertical:2, margin: 5 }} >
                <Text style={{ fontSize: 26, fontWeight: 'bold' }}>Downloaded Book</Text>
            </View>
            <View style ={{flexDirection: 'row',borderWidth: 1, borderRadius: 10, paddingVertical:2, paddingHorizontal: 20,margin: 5, backgroundColor: 'rgba(0,0,0,0.2)'}}>
                    <View style ={{flex :1, alignItems: 'center', borderRightWidth: 1}}>
                        <TouchableOpacity  style={{ alignItems: 'center'}} onPress={() => {console.log("Delete Pressed"); navigation.goBack()}}>
                            <Ionicons name="trash-outline" size={25}/>
                            <Text> Quitar de la descarga </Text>
                        </TouchableOpacity>
                    </View>
                    <View style ={{flex :1, alignItems: 'center'}}>
                        <TouchableOpacity style={{ alignItems: 'center'}} onPress={() => console.log("Speak Pressed")}>
                            <Ionicons name="volume-high-outline"  size = {25}/>
                            <Text>Hablar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            
        </View>
    );
}
//comment