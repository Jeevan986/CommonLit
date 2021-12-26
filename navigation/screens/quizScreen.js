import * as React from 'react';
import { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, ActivityIndicator,Image, ScrollView,Modal, Animated, StatusBar} from 'react-native';
import { SafeAreaView} from 'react-native-safe-area-context';
import { WebView } from 'react-native-webview';
import HTMLView from 'react-native-htmlview';
import Ionicons from 'react-native-vector-icons/Ionicons';


export default function quizScreen({ route, navigation }) {
    const [products, setProducts] = useState([]);
    useEffect(() =>{
        let{products}= route.params;
        setProducts(products)
    },[products])

    //checking if questions list exists
    if (products.guided_reading_questions){
        var questions = products.guided_reading_questions
    }else{
        var questions = [["error"]]
    }

    console.log("New Questions List\n")
    console.log(questions[0].question)
    //console.log("Questions[0] question\n")
    //console.log(questions[0].question)
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', margin: '1%' }}>
            <Text>Quiz Screen</Text>
            <Text>{products.name}</Text>
            <Text>{products.id}</Text>
            <View style= {{borderWidth: 1, borderRadius: 10, paddingLeft:40, paddingRight: 40}}>
                <Text>Number 1</Text>
                <Text>{questions[0].question}</Text>
            </View>
        </View>
    );
}
//comment